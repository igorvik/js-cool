//Creating an object with property.
var car = {
    speed : 0
}

//Defining getter and setters methods of the above mentioned object.
Object.defineProperties(car, {

    "setSpeed" : {
        value : function (speed){
            this.speed = speed;
            return this;
        }
    },
    "getSpeed" : {
        value : function () {
            return this.speed;
        }
    },
    "clearSpeed" : {
        value : function(){
            this.speed = 0;
            return this;
        }
    }
});

//Example of usage.
console.log(car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());