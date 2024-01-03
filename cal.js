
function display(num){
    result.value+=num
}

function equal(){
    try{result.value=eval(result.value)} //eval() is predefined function for evaluate
    catch{
        result.value="error"
        setTimeout(()=>{result.value=""},1000)
    }

}

function clearALL(){  //claerAll is default function name to clearall value
    result.value=""
}

function back(){
    result.value=result.value.slice(0,-1)
}
