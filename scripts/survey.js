const userForm = document.getElementById('byoForm');
const userFormInputs = userForm.querySelectorAll('input'); //This returns a nodelist
const submitBtn = document.getElementsByTagName('formSubmit');
const courseAddButton = document.getElementById('courseAddButton');
const userInfoList = document.main.querySelectorAll('li:not[id]')




function checkRequired(userFormInputs){
    //Checks to make sure that all user form inputs are required
    for(let i=0;i<userFormInputs.length;i++){
        // userFormInputs[i].required = true;
        userFormInputs[i].setAttribute("required",""); //The reason this worked and required=true did not work?
    }
}

let classesValue = []

courseAddButton.addEventListener('click',()=>{
    let className = document.getElementsByName('courseInput')[0].value //Remember get by name returns a node list
    addClasses(className);
})

//TODO Add function that will edit the innerHTML of the ul to add classes
function addClasses(className){
    let tempLi = `<li>${className}</li>`
    classesValue.push(tempLi)
    let unorderedList = document.getElementById('classesList');
    unorderedList.innerHTML += tempLi
}

checkRequired(userFormInputs)



function addUserInformation(userInfoList)
{
    let userInfoNames = []
    for (let index = 0; index < userInfoList.length; index++) {
        let element = userInfoList[index];
        element.textContent+= 
    }
}
