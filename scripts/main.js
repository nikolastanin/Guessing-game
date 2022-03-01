let numberBox = document.querySelectorAll(".number_box"); 

console.log(numberBox);

const chooseNum = (e) =>{
        return new Promise ((resolve,reject)=>{
            let userNum =  parseInt(e.target.innerHTML);
            let randomNum = Math.floor(Math.random() * 9) + 1;
            console.log(randomNum);
           
            if(userNum === randomNum){
                e.target.classList.add("success");
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

//event listeners
numberBox.forEach(element => {
    element.addEventListener("click", mainFunc);
});