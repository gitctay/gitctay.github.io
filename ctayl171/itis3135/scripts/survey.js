const userForm = document.getElementById('byoForm');
const userFormInputs = userForm.querySelectorAll('input'); //This returns a nodelist
const submitBtn = document.getElementsByTagName('formSubmit');
const courseAddButton = document.getElementById('courseAddButton');
const classesListElement = document.getElementById("classesList");
const formReset = document.getElementById("resetButton");
let customIntroSection = document.getElementById("customIntro");
let classesList = document.getElementById("classesListIntro")
let introImage = document.getElementById("introImage")
let textEntries = customIntroSection.querySelectorAll("ul > li:not(#classesListLI)");
const listDefault = textEntries;

// const userInfoList = document.main.querySelectorAll('li:not[id]');

// function setDefaultTitles(textEntries){
//     let tempDefault = []
//     for (let index = 0; index < textEntries.length; index++) {
//         tempDefault[index] = textEntries[index].innerHTML
//     }

//     return tempDefault;
// }

checkRequired(userFormInputs);
userForm.addEventListener('submit',(event)=>{
    event.preventDefault(); //Prevents default submit handler from occuring
    let formData = userForm.querySelectorAll("input[type='text']:not([name='courseInput'],[name='imageCapInput'],[name='nameInput'])")
    // userForm.hidden = true; //Need to modify the style display instead
    userForm.style.display = 'none'
    buildPageForm(formData);
})




function buildPageForm(formData){
    let nameValue = document.getElementsByName("nameInput")[0].value
    let imgCap = customIntroSection.getElementsByTagName("figcaption")[0];
    imgCap.innerText = document.getElementsByName("imageCapInput")[0].value; 
    
    let nameSection = document.getElementById('introName')
    nameSection.innerHTML = `${nameValue}'s INTRO!!!`
    introImage.setAttribute("src",loadImage());
   
    
    for(let i=0;i<textEntries.length;i++)
    {
        let currentElementValue = formData[i].value;
        textEntries[i].innerHTML = textEntries[i].innerHTML + " " + currentElementValue;
    }

    for(let j = 0; j<studentClassesPersonal.length;j++)
    {
        buttonRemove = studentClassesPersonal[j].getElementsByTagName('button')[0]
        if(buttonRemove!=null)
        {
        studentClassesPersonal[j].removeChild(buttonRemove)
        classesList.append(studentClassesPersonal[j])
        }
    }

    customIntroSection.style.display = 'block';
}




function resetForm(){
    formReset.click()
    userForm.style.display = 'flex';
    customIntroSection.style.display = 'none';
    classesList.innerHTML = ""
    studentClassesPersonal = []
    textEntries = listDefault
    
}



function checkRequired(userFormInputs){
    //Checks to make sure that all user form inputs are required
    for(let i=0;i<userFormInputs.length;i++){
        // userFormInputs[i].required = true;
        userFormInputs[i].setAttribute("required",""); //The reason this worked and required=true did not work?
    }
}

let studentClassesPersonal = []


courseAddButton.addEventListener('click',()=>{
     //Remember get by name returns a node list
    let className = document.getElementsByName('courseInput')[0].value
    addClassesEntry(className);
})

let studentIndexCounter = 0;

//TODO Add function that will edit the innerHTML of the ul to add classes
function addClassesEntry(className){
    let tempLi = document.createElement("li") //Can also just add innerText
    tempLi.setAttribute("class","classCode")
    tempLi.innerText=className;
    studentClassesPersonal.push(tempLi)
    let delButton = document.createElement("button");
    // delButton.classList.add("liDelete"); //ClassList add is often used for better readability and performance
    delButton.innerText = "Delete"
    delButton.setAttribute("class","liDelete")
    delButton.setAttribute("type","button")
    tempLi.append(delButton);
    classesListElement.append(tempLi)
    
    // let unorderedList = document.getElementById('classesList');
}

// delButton.addEventListener('click',(event)=>event.target.parentElement.remove());

classesListElement.onclick = function(event){
    let currentLI = event.target.closest('li') //Matches to the closest LI from where the event occured
    if(!currentLI) return;  // if the current LI is not in target we return
    if(!classesListElement.contains(currentLI)) return; // If the current LI is not in our table we return (stops it from getting a different LI)
    studentClassesPersonal
    let elementIndex = studentClassesPersonal.indexOf(currentLI)
    if(studentClassesPersonal.indexOf(currentLI) >= 0){
        studentClassesPersonal.splice(elementIndex,1)
    }
    else{
        console.error("There is an issue with removing a class element from the array")
        return
    }
    currentLI.remove();
}

function loadImage(){
    let imageInput = document.getElementsByName("imageInput")[0];
    let image = imageInput.files[0];
    const imageUrl = URL.createObjectURL(image);
    return imageUrl;
}

function addUserInformation(userInfoList)
{
    let userInfoNames = [];
    for (let index = 0; index < userInfoList.length; index++)
    {
        let element = userInfoList[index];
        // element.textContent+= 
    }
}
