let numberBox = document.querySelectorAll(".number_box"); 

console.log(numberBox);

const chooseNum = (e) =>{

    let userNum =  parseInt(e.target.innerHTML);
console.log(e.target.classList.add("success"));
}


//event listeners
numberBox.forEach(element => {
    element.addEventListener("click", chooseNum);
});