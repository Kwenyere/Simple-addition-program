const input1 = document.getElementById("first-input");
const input2 = document.getAnimations("second-input)");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

console.log(input1.value);
btn.addEventListener("click", () => {
    const firstInput = parseInt(document.getElementById("first-input").value);
    const secondInput = parseInt(document.getElementById("second-input").value);
    const addInput = firstInput + secondInput;
    result.innerHTML = addInput;
})