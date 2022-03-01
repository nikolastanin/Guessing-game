let numberBox = document.querySelectorAll(".number_box"); 

console.log(numberBox);

const chooseNum = (e) =>{
    let userNum =  parseInt(e.target.innerHTML);

}
numberBox.forEach(element => {
    element.addEventListener("click", chooseNum);
});