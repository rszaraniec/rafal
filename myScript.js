function changeText() {
    document.getElementById("text").innerHTML = "World";
}

function displayResult() {
    window.alert(5 + 6);
}

function consoleLog() {
    console.log(5 + 6);
}





function funcWithStaticVariable() {
    var x, y, z;
    x = 5;
    y = 6;
    z = x + y;

    document.getElementById("text_4").innerHTML =
        "The value of z is " + z + ".";
}

function funcWithVariable(x, y) {
    z = x + y;
    document.getElementById("text_5").innerHTML =
        "The value of z is " + z + ".";
}


function myFirstObject() {
    var car = { type: "Fiat", model: "500", color: "white" };
    document.getElementById("text_6").innerHTML = "The car type is " + car.color;
}

function mySecondObject() {
    var person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566
    };
    document.getElementById("text_7").innerHTML =
        person["firstName"] + " " + person["lastName"];
}

function myFirstArray() {
    var cars = ["Saab", "Volvo", "BMW"];


    text = "";
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }




    document.getElementById("text_12").innerHTML = text;
    document.getElementById("text_13").innerHTML = text[0];
}

function date() {
    document.getElementById("text_8").innerHTML = Date();
}

function textLength() {
    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("text_9").innerHTML = txt.length;
}

function textOperation() {
    // slice:

    var str1 = "Apple, Banana, Kiwi";
    var res1 = str1.slice(7, 13);

    //BANANA

    // substr:

    var str2 = "Apple, Banana, Kiwi";
    var res2 = str2.substr(-4);

    //Kiwi

    // replace

    str3 = "Please visit Microsoft!";
    var n = str3.replace("Microsoft", "W3Schools");


    var text1 = "Hello World!";       // String
    var text2 = text1.toUpperCase();

    var text1_2 = "Hello";
    var text2_2 = "World";
    var text3_2 = text1_2.concat(" ", text2_2);

    var str3 = "       Hello World!        ";
    str3.trim();
}

// 2 część

function addToArray() {
    // var fruits = ["Banana", "Orange", "Apple", "Mango"];
    // fruits.push("Lemon");


    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits[6] = "Lemon";

    text = "";
    for (i = 0; i < fruits.length + 2; i = i + 2) {
        text += fruits[i] + "<br>";
    }

    document.getElementById("text_14").innerHTML = text;
}

function sortMyArray() {
    var fruits = ["Banana", "Orange", "Apple", "Mango", 5, 8];
    fruits.sort();
    document.getElementById("text_15").innerHTML = fruits;

}
function reverseMyArray() {
    var fruits = ["Banana", "Orange", "Apple", "Mango", 8];
    fruits.reverse();
    document.getElementById("text_16").innerHTML = fruits;
}

function foreachArray() {
    var txt = "";
    var numbers = [45, 4, 9, 16, 25];
    numbers.forEach(myFunction);
    document.getElementById("text_17").innerHTML = txt;

    function myFunction(value) {
        txt = txt + value + "<br>";
    }
}

function mapArray() {
    var numbers1 = [45, 4, 9, 16, 25];
    var numbers2 = numbers1.map(myFunction);

    document.getElementById("text_18").innerHTML = numbers2;

    function myFunction(value) {
        return value * 2;
    }
}

function filterMyArray() {
    var numbers = [45, 4, 9, 16, 25];
    var d = numbers.filter(myFunction);

    document.getElementById("text_19").innerHTML = d;




    function myFunction(value) {
        if (value !== 5) {
            return value;
        }
    }
}


