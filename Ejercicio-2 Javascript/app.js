const img = document.getElementById('img');

const contador = document.getElementById('contador');

const btnMas = document.getElementById('mas');

const btnreset = document.getElementById('reset');

const btnMenos = document.getElementById('menos');

btnMas.addEventListener('click', mas)

btnreset.addEventListener('click', reset)

btnMenos.addEventListener('click', menos)



function mas(){
    contador.textContent = Number(contador.textContent)+1
    filter(contador.textContent)

}

function reset(){
    contador.textContent = 0;
    filter(contador.textContent)
}

function menos(){
    contador.textContent = Number(contador.textContent)-1
    filter(contador.textContent)
}

const filter = (numero)=>{
    if(numero < 0){
        img.classList.add('imgFilter')
    }else{
        img.classList.remove('imgFilter');
    }
}