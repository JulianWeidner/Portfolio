const parentDiv = document.getElementById('title-container');
const title = "Title Of design website"


//create the array for any parameter passed
function CreateCharArray(titleParam){
	let strArray = Array.from(titleParam);
  console.log(strArray);
  return strArray;
}

//creates the divs that will hold the letters that are passed via a map
//also adds class for my personal well being
//ALSO ADDS THE TEXT CONTENT OF THE CHAR ARRAY. HELP ME.
function CreateDiv(charParam){ 
	const childDiv = document.createElement('div');
	parentDiv.appendChild(childDiv);
  childDiv.classList.add('title-header');
  childDiv.textContent = charParam;
}

//finds the final char in the title and adds the blinker class
function AddBlinkerId(){
	const divArray = Array.from(document.querySelectorAll('.title-header'));
	const lastLetterIndex = divArray.length - 1;
 	const lastLetterChar = divArray[lastLetterIndex].classList.add('blinker');
}


function CreateTitle(titleParam){
	let charArray = CreateCharArray(title);
  let filledDiv = charArray.map( i => CreateDiv(i));
  AddBlinkerId();
}





CreateTitle(title);
