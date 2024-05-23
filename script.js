const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const removePunc = (str) => {
  const regex = /[^A-Za-z0-9]/g;
  return str.replace(regex, '').toLowerCase();
}

const checkPalindrome = (str) => {
  console.log(str);
  str = removePunc(str);
  console.log(str);
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inp = textInput.value;
  textInput.value = ""
  if (inp === "") {
    alert("Please input a value");
    return;
  }

  const isPalindrome = checkPalindrome(inp);
  // const isPalindrome = true;
  const boldText = document.createElement("span");
  boldText.textContent = inp;
  boldText.className = "bold";

  resultDiv.textContent = "";
  resultDiv.appendChild(boldText);
  resultDiv.append(` is ${isPalindrome ? "" : "not"} a palindrome`);
})
