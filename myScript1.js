function onSum() {
    document.getElementById("demo").innerHTML = 5 + 7;
    window.alert(10+5);

    let x,y,z; x = 5; y = 16; z = x+y;
    document.getElementById("demo").innerHTML = "The value of Z is " + z + ".";

    /* 
    Sample Javascript to learn
    */

    //Single line comment

    //Variable declaration
    let a = 5, b = 100;
    let sum1 = a + b;
    document.getElementById("demo1").innerHTML = "The value of sum1 is " + sum1 + ".";

    var c, d; c = 100; d = 200;
    var sum2 = c + d;
    document.getElementById("demo2").innerHTML = "The value of sum2 is " + sum2 + ".";

    const bday = '1981-12-01';
    document.getElementById("demo3").innerHTML = "The value of bday is " + bday + ".";

    let carName = "volvo" + " " + "car";
    document.getElementById("demo3").innerHTML = "The value of car is " + carName + ".";

    let $ = 5;
    let _firstname = 'She';

    let abc = 1000;
    document.getElementById("demo5").innerHTML = "The value is" + abc + ".";

}

function onSum1() {
    //value of abc cannot be accessed outside block - onSum()
    document.getElementById("demo6").innerHTML = "The value outside block is" + abc + ".";

}