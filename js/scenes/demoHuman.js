let DemoHuman = function() {

   this.init = (model) => {
      this.start = true;
      this.name = "human";
      this.model = model;
      this.model.move(0,2,0).scale(0.2);

      this.top = this.model.add();
      this.head = this.top.add('sphere').move(0,1.1,0).color(1,1,1).texture('media/textures/r2d2.png');

      this.body = this.model.add();
      this.upperbody = this.body.add('tubeY').color(1,1,1).texture('media/textures/r2d2.png');
      this.leftHand = this.body.add('tubeY').move(1,-0.5,0).scale(0.3,1.5,0.6).color(1,1,1).texture('media/textures/r2d2.png');
      this.rightHand = this.body.add('tubeY').move(-1,-0.5,0).scale(0.3,1.5,0.6).color(1,1,1).texture('media/textures/r2d2.png');
      this.leg = this.body.add('donut').turnY(Math.PI/2).move(0,-1.6,0).scale(0.7,0.7,1).color(0,0.2,1);

      // this.leftLeg = this.body.add('tubeY').move(1,-1,0).scale(0.3,0.5,0.6).color(0,0.2,1);
      // this.rightLeg = this.body.add('tubeY').move(-1,-1,0).scale(0.3,0.5,0.6).color(0,0.2,1);

      this.leftWheel = this.body.add('donut').move(1,-2,0).turnY(Math.PI/2).scale(0.3).color(0,0.2,1);
      this.rightWheel = this.body.add('donut').move(-1,-2,0).turnY(Math.PI/2).scale(0.3).color(0,0.2,1);
   }

   this.display = () => {
      this.model.animate(() => {
         this.top.identity().move(0,0,Math.sin(2*this.model.time)/2).turnY(2*this.model.time);
         this.body.identity().move(0,0,Math.sin(2*this.model.time)/2);
         //this.leftHand.identity().turnX(Math.sin(2 * this.model.time)).move(1,-0.5,0).scale(0.3,1.5,0.3).color(1,1,1);
      });
   }
}

export let demoHuman
 = new DemoHuman();
