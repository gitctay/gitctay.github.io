const calculatorButtons = document.getElementById("calculatorButtons")
const clearButton = document.getElementById("clearButton")
const output = document.getElementById("outputDisplay")
function loadDefault(isError)
{
    if(isError){
        evalString = ``
    }
    evalString = ``
    outputDisplay.innerText = `Output:`
}
evalString = ``




calculatorButtons.onclick = function(event)
{

    
    let currentBtn = event.target.closest('button') //Matches to the closest LI from where the event occured
    if(currentBtn===clearButton){
        loadDefault(false)
        return
    }
    if(!currentBtn) return;  // if the current LI is not in target we return
    if(!calculatorButtons.contains(currentBtn)) return; // If the current LI is not in our table we return (stops it from getting a different LI)
    value = currentBtn.value
    if(isNaN(value))
    {
        if(value == "=")
        {
            if(isNaN(evalString[evalString.length - 1]) || isNaN(evalString[0]))
            {
                outputDisplay.innerText = "ERROR!"
            }
            else
            {
                outputDisplay.innerText = `Output: ${eval(evalString)}`
            } 
        }
        else
        {
            outputDisplay.innerText += `${currentBtn.innerText}`;
            evalString+=value
        }
    }
    else
    {
        outputDisplay.innerText += currentBtn.innerText;
        evalString+=value
    }
}

clearButton.addEventListener("click",()=>
{
    loadDefault(false)
})

