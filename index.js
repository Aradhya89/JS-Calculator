
let expression = "";
let screentxt = document.getElementById('screenresult');

function addexp(value) {
    // (value in ['+','-','/','*'] && expression.slice(-2) in ['+','-','/','*'])
    // 'in' not work in js use includes 

    if (['+', '-', '/', '*'].includes(value) && ['+', '-', '/', '*'].includes(expression.slice(-1))) {
        expression = expression.slice(0, -1);
    }
    expression = expression + value;
    screentxt.innerHTML = expression;
}

async function result() {
    try {
        let result = eval(expression);
        screentxt.innerHTML = result;
        expression = String(result)
    } catch {
        screentxt.innerHTML = 'INVALID'

        setTimeout(() => {
            screentxt.innerHTML = expression;
        }, 1000);

    }


}

function cleartxt() {
    expression = ''
    screentxt.innerHTML = '0';
}

function correcting() {
    expression = expression.slice(0, -1);
    screentxt.innerHTML = expression;
}


//in check wheter that index is in or not

let body = document.querySelector("body");
body.addEventListener("keyup",(event)=>{
    if (['1','2','3','4','5','6','7','8','9','0','+','-','*',"/",'.'].includes(event.key)){
        addexp(event.key);
    }

    if (event.key == "Enter"){
        result();
    }

    if (event.key == "Backspace"){
        correcting();
    }
    if (event.ctrlKey && event.key == "Backspace"){
        cleartxt();
    }
})