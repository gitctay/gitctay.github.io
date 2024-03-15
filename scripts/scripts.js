const submitButtonName = document.getElementById('greetingSubmit')
const submitButtonNumber = document.getElementById('favNumSubmit')
const pizzaButton = document.getElementById('pizzaCounter')
const musicalNoteButton = document.getElementById('musicalButton')
const instrumentButton = document.getElementById('instrumentButton')





//Section for current month selection

function getCurrentDate(){
    const month_array = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const day_of_week_array=["Monday","Tuesday","Wenesday","Thursday","Friday","Saturday","Sunday"]
    const date = new Date();
    let fullMonth = month_array[date.getMonth()];
    let day_of_week = day_of_week_array[date.getDay()];
    let currentHour = date.getHours()
    let minutes = date.getMinutes()
    let timeFormat = currentHour >= 12 ? 'PM' : 'AM'; //This information was taken from GeeksForGeeks
    currentHour = currentHour % 12; //To see if it is 0
    currentHour = currentHour ? currentHour : 12;
    alert(`Today it is ${currentHour}:${minutes}${timeFormat} on ${day_of_week}, ${date.getDate()} ${fullMonth}, ${date.getFullYear()}`);
}
this.getCurrentDate()




//This is where I will do the 5th assigment extra code

//TODO Create eventList for submit that has the event listen for the input fields
submitButtonName.addEventListener('click',()=>{
    userGreeting()
})

// TODO Create a switch statement for submitting numbers
submitButtonNumber.addEventListener('click',()=>{
    favNumPoly()
})


let pizzaCounter = 0
//TODO create a pizza counter
pizzaButton.addEventListener('click',()=>{
    pizzaCounter = pizzaCounter + 1;
    let pizzaTag = document.getElementById('pizzaAmount')
    if(pizzaCounter <= 8){
        pizzaTag.innerText = `You have ${pizzaCounter} pizzas Yum!`
    }
    else if(pizzaCounter > 8 && pizzaCounter < 12){
        pizzaTag.innerText = `You have ${pizzaCounter} pizzas...might be a bit much`
    }
    else{
        pizzaTag.innerText = `OH MY GOD PLEASE STOP!` 
    }
});



musicalNoteButton.addEventListener('click',keyRandom); //Wanted to test out the other syntax

instrumentButton.onclick = instrumentRandom;

function instrumentRandom(){
    
    let instrumentImage = document.getElementById('instrumentImage')
    let instrumentCaption = document.getElementById('instrumentCap')
    let randomNumber = Math.floor(Math.random() * 3);
    let tempText = ''
    let tempImage = ''
    switch(randomNumber){
        case 0:
            tempText = 'You shall play the guitar'
            tempImage = 'images/360_F_64913707_PNS2WMobSFvvUgZrr4LuXbPUmpTSlBl1.jpg'
            break;
        case 1:
            tempText = 'You shall play the drums'
            tempImage = 'images/istockphoto-869892048-612x612.jpg'
            break;
        case 2:
            tempText = 'You shall play the PIANO!!'
            tempImage =  'images/young-pianist-playing-piano-600nw-136364489.webp' 
            break;
        default:
            console.log("there is an issue check it");         
    }   
    instrumentImage.setAttribute('src',tempImage);
    instrumentCaption.innerText = tempText
}



function keyRandom(){
    let randomNumber = Math.floor(Math.random() * 11);
    let tempAlertValue = '';
    switch (randomNumber) {
        case 0:
            tempAlertValue = "C Major / A Minor";
            break;
        case 1:
            tempAlertValue = "C# Major / A# Minor";
            break;
        case 2:
            tempAlertValue = "D Major / B Minor";
            break;
        case 3:
            tempAlertValue = "D# Major / C Minor";
            break;
        case 4:
            tempAlertValue = "E Major / C# Minor";
            break;
        case 5:
            tempAlertValue = "F Major / D Minor";
            break;
        case 6:
            tempAlertValue = "F# Major / D# Minor";
            break;
        case 7:
            tempAlertValue = "G Major / E Minor";
            break;
        case 8:
            tempAlertValue = "G# Major / F Minor";
            break;
        case 9:
            tempAlertValue = "A Major / F# Minor";
            break;
        case 10:
            tempAlertValue = "A# Major / G Minor";
            break;
        case 11:
            tempAlertValue = "B Major / G# Minor";
            break;
        default:
            tempAlertValue = "Invalid key number Dev needs to check code...This should not happen";
    }
    alert(`Your random key is (${tempAlertValue}) enjoy playing`)
}








function favNumPoly(){
    let favNum = document.getElementById('favNumInput')
    favNum = favNum.value;
    let tempAlertText = ''
    favNum = Math.abs(Math.round(favNum))
    if(favNum > 10){
        tempAlertText= 'I am sorry please put in a lower number';
    }
    else if(favNum == 0){
        tempAlertText = 'the truth is 0 is the loneliest number...';
    }
    switch(favNum){
        case 1:
            tempAlertText = "Henagon";
            break;
            
        case 2:
            tempAlertText = "Digon";
            break;
        case 3:
            tempAlertText = "Trigon";
            break;
        case 4:
            tempAlertText = "Quadrilateral";
            break;
        case 5:
            tempAlertText = "Pentagon";
            break;
        case 6:
            tempAlertText = "Hexagon";
            break;
        case 7:
            tempAlertText = "Heptagon";
            break;
        case 8:
            tempAlertText = "Octagon";
            break;
        case 9:
            tempAlertText = "Nonagon";
            break;
        case 10:
            tempAlertText = "Decagon";
            break;
    }
    alert(tempAlertText)
}






function userGreeting(){
    let nameInput = document.getElementById('name');
    nameValue = nameInput.value;
    let moodInput = document.getElementById('mood')
    moodValue = moodInput.value
    alert(`The Clumsy Tiger welcomes you, ${nameValue}!\nWe're glad you are doing ${moodValue}`)
}

//This is where I will dynamically be able to set information about different webpages


//General Pages:

allHeader.innerHTML+=`<nav>
<a href="/itis3135/itis3135">Home</a>
||
<a href="/itis3135/introduction.html">introduction</a>
||
<a href="/itis3135/contract.html">Contract</a>
||
<a href="/itis3135/table">Table</a>
||
<a href="/itis3135/forms.html">Form</a>
||
<a href="/itis3135/website_evaluations.html">Website Evaluations</a>
||
<a href="itis3135/clumsytiger.com/about.html">Clumsy Tiger About Page</a>
||
<a href="/ctayl171/itis3135/cthelps.co/index.html">Firm Home Page</a>
</nav>`





//Business Page
allFooter.innerHTML += `
<nav>
<a
    href="https://webpages.charlotte.edu/ctayl171/">Charlotte.edu</a>
||
<a
    href="https://github.com/gitctay/gitctay.github.io">Github</a>
||
<a href="https://gitctay.github.io/">Github.io</a>
||
<a
    href="https://gitctay.github.io/local_www/itis3135/">itis3135.io</a>
||
<a href="https://www.freecodecamp.org/ctayl171">FreeCodeCamp</a>
||
<a
    href="https://www.codecademy.com/profiles/christianTaylor8191440473">CodeAcademy</a>
||
<a
    href="https://www.linkedin.com/in/christian-taylor-b67327182/">Linkedin</a>

</nav>
<br>
<p>Page built by <a href="clumsytiger.com">Clumsy Tiger</a> Co.
©2024 </p>
<a href="https://validator.w3.org/check?uri=referer"
id="validation_link_html">
<img style="border:0;width:88px;height:31px"
    src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png"
    alt="Valid HTML!" href="https://validator.w3.org/check?uri=${location.href}">
</a>
<a href="https://jigsaw.w3.org/css-validator/check/referer"
id="validation_link_css">
<img style="border:0;width:88px;height:31px"
    src="https://jigsaw.w3.org/css-validator/images/vcss"
    alt="Valid CSS!" href=https://jigsaw.w3.org/css-validator/validator?uri=${location.href}>
</a>
`


