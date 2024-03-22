function displayValue(val) {
    document.getElementById('display').value = document.getElementById('display').value + val;
}

function clrDisplay() {
    document.getElementById('display').value = "";
}

function calculate() {
    var input = document.getElementById('display').value;

    var res = eval(input);

    document.getElementById('display').value = res; 
}