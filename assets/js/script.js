
//imprimir valor en input
function getValue(value){
    //tomar valor existente en input
    const screenValue = document.getElementById('screen').value
    //agregar valor al input
    document.getElementById('screen').value = screenValue + value;
}

//resetear input
function reset(){
    //asignar " " al input
    document.getElementById('screen').value = " ";
}

function solve(){
    //tomar valor existente en el input
    const screenValue = document.getElementById('screen').value
    //calcular y mostrar resultado
    document.getElementById('screen').value = math.evaluate(screenValue)
}