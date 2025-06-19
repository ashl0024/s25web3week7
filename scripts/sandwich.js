//create an object information about the sandwich 
let sandwich = {
    toasted: false,
    //store the protein and veggies as arrays inside the object
    protein: [],
    veggies: [],
    // store information about the bread as an object within this object 
    bread: {
        kind: "", //an empty string
        glutenfree: false 
    }
}

// add an event listener to the toasted checkbox
//because this is a very simple function, we donot need to store the element in a variable 
// we can also use an anonymous function (unamed) which exists only as a part of the 
// event listener
document.querySelector("#toasted").addEventListener("change", function(){
      // use a shorthand if statement to ask the question 
      // figure out whether the checkbox is checked or unchecked 
      sandwich.toasted = (this.checked) ? true : false;
      //console.log(sandwich);                                                     
});

document.querySelector("#gluten").addEventListener("change", function(){
      // use a shorthand if statement to ask the question 
      // figure out whether the checkbox is checked or unchecked 
      sandwich.bread.glutenfree = (this.checked) ? true : false; 
      console.log(sandwich);                                                   
});

//check the type of bread and add it to the oblect 
//use  a classic for loop to add event listeners to all the radio buttons 
const breadTypes = document.querySelectorAll('input[name="bread"]');
//console.log(breadTypes.length);
for(let i=0; i<breadTypes.length; i++) {
    breadTypes[i].addEventListener("change", addBread);
}

// the function for adding a braed type to the object
function addBread(){
    //when weare adding the text content, use trim() to remove any 
    // spaces from the begining or the end of the text
    sandwich.bread.kind = this.parentNode.textContent.trim();
    console.log(sandwich);
}

//add the protein to the array inside the object 
//users can check and uncheck options, so we have to add and remove fom the array
const allProtein = document.querySelectorAll(".protein input");
// use a for... of loop, which doesnot require you to know the length of the array
for(const eachProtein of allProtein){
    //console.log(eachProtein);// "each protein" will temporially store each of the objects from the array allProtein
    eachProtein.addEventListener("change", addProtein);
    }

    function addProtein(){
        //get the value of the label and store it in variable 
        const proteinName = this.parentNode.textContent.trim();
        //check to see if the checkbox i checked or unchecked 
        if(this.checked){
            //if checked,add this object to the protein array
            sandwich.protein.push(proteinName);
        }else{
            //if unchecked, remove this object from the array
            //first, we have to figure out if the thing is in the array
            //and if it is, what position it's at
            const proteinPos = sandwich.protein.indexOf(proteinName);
            //if the object not in the array,indexof will return -1
            if(proteinPos > -1){
                //if the position  (index) is graeter than -1, tehn the thing is in this array
                //use splice to remove it - splice(position,number of the things to remove)
                sandwich.protein.splice(proteinPos,1);
            }
        }
        console.log(sandwich);
    }

  
const allVeggies = document.querySelectorAll(".veggies input");

for (const eachVeggie of allVeggies) {
    eachVeggie.addEventListener("change", addVeggie);
}

// Function to add or remove veggies from the sandwich object
function addVeggie() {
    const veggieName = this.parentNode.textContent.trim();

    if (this.checked) {
        // Add the veggie to the array if it's checked
        sandwich.veggies.push(veggieName);
    } else {
        // Remove the veggie from the array if it's unchecked
        const veggiePos = sandwich.veggies.indexOf(veggieName);
        if (veggiePos > -1) {
            sandwich.veggies.splice(veggiePos, 1);
        }
    }

    console.log(sandwich);
}
