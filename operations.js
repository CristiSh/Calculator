function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function eq(res) {
    alert(res);
}

function test() {
    alert("merge");
}

function display() {
    document.getElementById("one").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 1;
    });
    document.getElementById("two").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 2;
    });
    document.getElementById("three").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 3;
    });
    document.getElementById("four").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 4;
    });
    document.getElementById("five").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 5;
    });
    document.getElementById("six").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 6;
    });
    document.getElementById("seven").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 7;
    });
    document.getElementById("eight").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 8;
    });
    document.getElementById("nine").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 9;
    });
    document.getElementById("zero").addEventListener("click", function () {
        document.getElementById("output").innerHTML = 0;
    });
}