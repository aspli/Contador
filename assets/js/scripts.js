var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

mais.addEventListener("click", increment);
menos.addEventListener("click", decrement);

function increment(){
        if(currentNumber >=9){
            document.getElementById('mais').disabled = true;
            document.getElementById('menos').disabled = false;
        }
        else{
            document.getElementById('mais').disabled = false;
        }
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
}   

function decrement(){    
    if(currentNumber <=1){
        document.getElementById('menos').disabled = true;
        document.getElementById('mais').disabled = false;
    }
    else{
        document.getElementById('menos').disabled = false;
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;   
}