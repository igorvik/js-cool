//Creating an object with property.
var car = {
    speed : 0
}

//Block of code with object's methods.
Object.defineProperties(car, {
  //Returns actual speed.
  'getSpeedometer' : {
    get: function() {
      return this.speed;
    }
  },
  //Method to set the speed.
  'setSpeedometer' : {
    set: function(val) {
      return this.speed = val;
    }
  },
  //Method makes speed equal 0.
  clearSpeedometer : {
    value : function() {
      this.speed = 0;
    }
  }
});

//Block of code helps to provide method chaining. It works using previous block of code.
Object.defineProperties(car, {

    "setSpeed" : {
        value : function (speed){
            car.setSpeedometer = speed;
            return this;
        }
    },
    "getSpeed" : {
        value : function () {
            return car.getSpeedometer;
        }
    },
    "clearSpeed" : {
        value : function(){
            car.clearSpeedometer();
            return this;
        }
    }
});

//Example of usage.
console.log(car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());