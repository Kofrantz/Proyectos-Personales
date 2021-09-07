let arr = ['-','-','-','-','-','-','-','-','-']
let marca = 'X'
function drawPanel(arr){
    console.log(' '+arr[0]+' | '+arr[1]+' | '+arr[2]+' ')
    console.log('-----------')
    console.log(' '+arr[3]+' | '+arr[4]+' | '+arr[5]+' ')
    console.log('-----------')
    console.log(' '+arr[6]+' | '+arr[7]+' | '+arr[8]+' ')
    check4Win(arr)
}
function check4Win(arr){
    for(let i = 0; i < 3; i++){
        if(arr[i*3+0] !== '-' && arr[i*3+0] === arr[i*3+1] && arr[i*3+1] === arr[i*3+2]) {
            printWinMsj('GANARON LAS "'+arr[i*3+0]+'"!')
            console.log('Usar reset() para reiniciar el tablero')
            return
        }
        if(arr[i+0*3] !== '-' && arr[i+0*3] === arr[i+1*3] && arr[i+1*3] === arr[i+2*3]) {
            printWinMsj('GANARON LAS "'+arr[i+0*3]+'"!')
            console.log('Usar reset() para reiniciar el tablero')
            return
        }
    }
    if(arr[0] !== '-' && arr[0] === arr[4] && arr[4] === arr[8]) {
        printWinMsj('GANARON LAS "'+arr[0]+'"!')
        console.log('Usar reset() para reiniciar el tablero')
        return
    }
    if(arr[2] !== '-' && arr[2] === arr[4] && arr[4] === arr[6]) {
        printWinMsj('GANARON LAS "'+arr[2]+'"!')
        console.log('Usar reset() para reiniciar el tablero')
        return
    }
    if(!arr.some(n => n === '-')) {
        printWinMsj('=====EMPATE!====')
        console.log('Usar reset() para reiniciar el tablero')
        return
    }
    console.log('Turno de '+marca+' ---> (usar -> poner(posicion) ejemplo: poner(7))')
}
function reset(){
    arr = ['-','-','-','-','-','-','-','-','-']
    marca = 'X'
    drawPanel(arr)
}

function printWinMsj(marca){
    console.log('=====================================')
    console.log('=========='+marca+'===========')
    console.log('=====================================')
}
function poner(pos){
    if(arr[pos-1] === '-') {
        arr[pos-1] = marca
        marca = marca === 'X' ? marca = 'O' : marca = 'X'
        drawPanel(arr)
    }else{
        if(pos < 9) console.log('Lugar ocupado, probá devuelta...')
        else console.log('Esa poscion no existe')
    } 
}

drawPanel(arr)
