//Creating an object 'car' with property 'speed'.
var car = {
  speed: 0
};

//Defining object's methods.
Object.defineProperties(car, {
  //Returns actual speed.
  'getSpeed' : {
    get: function() {
      return this.speed;
    }
  },
  //Method to set the speed.
  'setSpeed' : {
    set: function(val) {
      return this.speed = val;
    }
  },
  //Method makes speed equal 0.
  clearSpeed : {
    value : function() {
      this.speed = 0;
    }
  }
});

//Examples of usage.
console.log(car.getSpeed);

car.setSpeed = 100;
console.log(car.getSpeed);

car.clearSpeed();
console.log(car.getSpeed);