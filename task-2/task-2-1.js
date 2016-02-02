//Creating an object with property.
var car = {
    speed : 0
}

//Defining getter and setters methods of the above mentioned object.
Object.defineProperties(car, {

    "setSpeed" : {
        value : function (speed){
            this.speed = speed;
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
        }
    }
});

//Example of usage.
car.setSpeed(200);
console.log(car.getSpeed());

car.clearSpeed();
console.log(car.getSpeed());