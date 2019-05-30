export default class Weapon {
    
    constructor(level) {

        this.level = level;
        this.scene = level.scene;

        this.fireRate = 350; // Milliseconds between each fire
        this.canFire = true;
        this.currentFireRate = 0;

        this.fireSound = this.level.assets.getSound('shotgun');
    }

    create() {

        this.mesh = this.level.assets.getAnimatedMesh('rifle');
        this.mesh.setEnabled(true);
            
        this.mesh.isVisible = true;
        
        // Let's use a transform node to never lose the correct mesh orientation
        // It we apply transformations directly to the mesh, It can be mirrored,
        // removinf the handedness conversion
        let transformNode = new BABYLON.TransformNode('weaponTransformNode');
        
        transformNode.parent = this.level.camera; 
        transformNode.scaling = new BABYLON.Vector3(3.5, 3.5, 3.5);
        transformNode.position = new BABYLON.Vector3(0.7,-0.45,1.1);
        
        this.mesh.parent = transformNode;
        
        this.controlFireRate();

    }

    fire() {
        var width = this.scene.getEngine().getRenderWidth();
        var height = this.scene.getEngine().getRenderHeight();
        
        // Is the player control enabled?
        if (this.level.controlEnabled) {
            var pickInfo = this.scene.pick(width/2, height/2, null, false, this.camera);
            this.doFire(pickInfo);
        }
    }

    doFire(pickInfo) {
        if (this.canFire) {

            this.fireSound.play();
            
            // If we hit an enemy
            if (pickInfo.hit && BABYLON.Tags.HasTags(pickInfo.pickedMesh) 
            && pickInfo.pickedMesh.matchesTagsQuery('enemy')) {
                let mainMesh = (pickInfo.pickedMesh.parent) ? pickInfo.pickedMesh.parent : pickInfo.pickedMesh;
                mainMesh.enemyObject.destroy();
            } else {
                if(pickInfo.pickedPoint) {
                    let box = BABYLON.Mesh.CreateBox('box', 0.1, this.scene);
                    box.position = pickInfo.pickedPoint.clone();
                }
            }
            
            this.animateFire();

            this.canFire = false;
        }
    }

    animateFire() {
        // Playing rifle animation from frame 0 to 10
        this.level.assets.playMeshAnimation('rifle', 0, 10);
    }

    controlFireRate() {
        if (!this.canFire) {
            this.currentFireRate -= GAME.engine.getDeltaTime();
            
            if (this.currentFireRate <= 0) {
                this.canFire = true;
                this.currentFireRate = this.fireRate;
            }
        }
    }

}