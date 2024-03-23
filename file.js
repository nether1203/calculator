const inVan = document.getElementById('in1');
const inTwo = document.getElementById('in2');
const vClick = document.getElementById('button');
const vMn = document.getElementById('mnButton');
const vP = document.getElementById('pButton');
const vD = document.getElementById('divButton');
const vMl = document.getElementById('mlButton');
const tX = document.getElementById('p');

let pM = '+';


vMn.onclick = function() {
    pM = '-';
}
vD.onclick = function() {
    pM = '/';
}
vP.onclick = function() {
    pM = '+';
}
vMl.onclick = function() {
    pM = '*';
}

function rob (inp1, inp2, action) {
    const A = Number(inp1.value)
    const B = Number(inp2.value) 

    console.log(A,pM,B)

    if(pM === '+' ){
        return A + B 
    }else if(pM === '-' ){
        return A - B
    }
    else if (pM === '/' ){
        return A / B
    }else if (pM === '*'){
        return A * B
    }
}

function color(result) {
    
    if (result < 0) {
        tX.classList.add('red')
        tX.classList.remove('green')
    }else{
        tX.classList.add('green')
        tX.classList.remove('red')
        
    }
    
}


vClick.onclick = function () {
   const rezalt = rob(inVan, inTwo, pM) 
   color(rezalt)
tX.textContent = rezalt
}