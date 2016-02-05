//Creating an object through literal.
var car = {};

/*
 *Defining object properties.
 *Field speed isn't writable directly.
 *Instead you can use setter method 'setSpeed'.  
 */
Object.defineProperties(car, {
    "speed": {
        value: 0,
        configurable: true
    },
    "setSpeed": {
        value: function (val) {
            setField(this, "speed", val);
            return this;
        }
    },
    "clearSpeed": {
        value: function () {
            setField(this, "speed", 0);
            return this;
        }
    },
    "getSpeed": {
        value: function () {
            return this.speed;
        }
    }
});

//Method to change field's writability.
function setFieldsWritability(obj, field, isWritable) {
    Object.defineProperty(obj, field, {
        writable: isWritable
    });
};

//Method to set field's value.
function setField(obj, field, value) {
    setFieldsWritability(obj, field, true);
    obj[field] = value;
    setFieldsWritability(obj, field, false);
}

//Examples of usage.

console.log('Let\'s try to change speed of the car directly by writing: \'car.speed = 888;\'.');
car.speed = 888;
console.log('Speed of the car hasn\'t been changed. It is equal ' + car.speed + '.');

console.log('Now let\'s try to use a special method: \'car.setSpeed(999)\'.');
car.setSpeed(999);
console.log('Now speed is equal ' + car.speed + '.');

console.log('And the last example is method chaining: \'car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed()\'.');
console.log('The result is: ' + car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());
