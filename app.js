const displayEl = document.querySelector('.display');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal')
const resetEl = document.querySelector('.reset')
const deleteLastEl = document.querySelector('.delete_last_input')
const themeEl = document.querySelector('.theme')
const themeListEl = document.querySelector('.theme-list')
const themeChangeEl = document.querySelector('.theme-change')
const listEl = document.querySelector('.list')
const colorChange = document.querySelector('.color-change')
const radioOneColor = document.querySelector('.radio1')
const radioTwoColor = document.querySelector('.radio2')
const radioThreeColor = document.querySelector('.radio3')


colorChange = false;

radioOneColor.addEventListener('click', (e)=>{
    if(e.target.radioOneColor){
        colorChange = true;
    }
})


let disNum = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach( number => {
    number.addEventListener('click', (e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        disNum += e.target.innerText;
        displayEl.innerText = disNum;
    })
})

operationEl.forEach( operation => {
    operation.addEventListener('click', (e)=> {
        if(!disNum){
            return;
        } haveDot = false;
        const operationName = e.target.innerText;
        if(disNum && lastOperation) {
            mathOperation();
        }else{
            result = parseInt(disNum);
        }
        lastOperation = parseInt(operationName)
        lastOperation = operationName;
        clearVar(lastOperation);
        })
})

function clearVar(name = ''){
    disNum += name + ' ';
    displayEl.innerText = disNum;
    disNum = '';
    displayEl.innerText = result;
}

function mathOperation(){
    if(lastOperation === 'x'){
        result = parseInt(result) * parseInt(disNum);
    }
    if(lastOperation === '+'){
        result = parseInt(result) + parseInt(disNum);
    }
    if(lastOperation === '-'){
        result = parseInt(result) - parseInt(disNum);
    }
    if(lastOperation === '/'){
        result = parseInt(result) / parseInt(disNum);
    }
}

equalEl.addEventListener('click', (e)=>{
    if(!disNum || !lastOperation){
        return;
    } haveDot = false;
    mathOperation();
    clearVar();
    displayEl.innerText = result;
    disNum = result;
})

resetEl.addEventListener('click', (e)=>{
    displayEl.innerText = '';
    disNum = '';
    result = '';
})

deleteLastEl.addEventListener('click', (e)=>{
    displayEl.textContent = '';
    disNum = '';
})