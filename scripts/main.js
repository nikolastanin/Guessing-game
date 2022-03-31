let numberBox = document.querySelectorAll(".number-box"); 

console.log(numberBox);

const chooseNum = (e) =>{
        return new Promise ((resolve,reject)=>{
            let userNum =  parseInt(e.target.innerHTML);
            let randomNum = Math.floor(Math.random() * 3) + 1;
            console.log(randomNum);
           
            if(userNum === randomNum){
                e.target.classList.add("success");
              console.log(e.target.nextSibling.nextSibling.classList.add("fail"));
                resolve({points:1, randomNum}
                );
            }
            
            if(userNum!==randomNum){
                reject(new Error("wrong"));
            }

        });
  
}
const mainFunc = async (e) =>{
        try{
const results = await chooseNum(e);
console.log(results.randomNum, results.points +"guessed right");
        }
        catch(error){
                    console.log(error);
        }
}

const flipFunc = (e) =>{
      e.currentTarget.classList.toggle("flip");
}
//event listeners
numberBox.forEach(element => {
    element.addEventListener("click", mainFunc);
    element.addEventListener("click", flipFunc);
 
});
/**
for(let i = 0 ; i<4; i++){ 
        numberBox[i].style.display = "none";
}
