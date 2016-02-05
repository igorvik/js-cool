//Tasks 1, 2. The result is 10 because in the if-statement variable foo equals undefined which returns boolean value false. And not false is true.
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();

//Task 3, 4. We have to do some changes in function named a. Function was called earlyer.
var a = 1;
function b() {
    a = 10;
    return;
    c = function a() {}
}
b();
console.log(a);

/*Task 5.
 *Unary operators
 *+"a";
 *delete a;
 *typeof g;

 *Binary operators
 *a + b;
 *a - b;
 *a * b;
 *a / b;

 *Ternary operator
 *true==true ? "good" : "bad";
 */

//Task 6.
var a = "Нехай завжди буд";
var arr = ["е сонце,", "е небо,", "е мама,", "у я"];
for(i in arr){
    console.log(a.concat(arr[i]));
}

//Task 7.
var stars = "*****************************";
var starsQuantyty = [];
for(var x = 4; x >=0; x--){
    var quantyty = stars.length - x*x - x;
    starsQuantyty.splice(starsQuantyty.length/2, 0, quantyty, quantyty);
}
for(var i in  starsQuantyty) console.log(stars.substr(0, starsQuantyty[i]));


//Task 8.
var interval = 0;
var startTime = new Date();
while(interval < 10000) {
    alarmTime = new Date();
    interval = alarmTime - startTime;
}
console.log(interval/1000 + " seconds passed.");

var startTime = new Date();
do {
    alarmTime = new Date();
    interval = alarmTime - startTime;
} while(interval < 10000)
console.log(interval/1000 + " seconds passed.");

//Task 9.
var num = 95;
var str1 = "good luck";
var str2 = "5";

var obj = {style:"nice", price:"twice"};
var arr = ['like', 'a', 5, function f(){alert('this way')}, {a : 1, b : 2}];
var func = function(x,y){
    alert('picture');
}

function result(arg){
    console.log(arg + " is " + typeof arg);
}

result(num);
result(str1);
result(str2);

result(obj);
result(arr);
result(func);

//Task 10.
var num = "95";
console.log(typeof num);
num *= 2;
console.log(typeof num);


var b = 1;
console.log(typeof b);
b += "nice";
console.log(typeof b);

//Task 11.
var num = 95;
var str = "95";
console.log(num != !str);

//Task 12.
var intNum = 15;
var num2 = intNum.toString(2);
var num8 = intNum.toString(8);
var num16 = intNum.toString(16);
var num32 = intNum.toString(32);

console.log(num2);
console.log(num8);
console.log(num16);
console.log(num32);

var num2_back = parseInt(num2, 2);
var num8_back = parseInt(num8, 8);
var num16_back = parseInt(num16, 16);
var num32_back = parseInt(num32, 32);

console.log(num2_back);
console.log(num8_back);
console.log(num16_back);
console.log(num32_back);
