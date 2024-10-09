let text = document.querySelector("#text");
let inputcolor = document.querySelector("#inputbarcolor");
let inputweight = document.querySelector("#inputbarweight");
let inputsize = document.querySelector("#inputbarsize");
inputcolor.addEventListener("input", () => {
  text.style.color = inputcolor.value;
});
inputweight.addEventListener("input", () => {
  if (inputweight.value) {
    text.style.fontWeight = String(inputweight.value);
  } else {
    text.style.fontWeight = "bold";
  }
});
inputsize.addEventListener("input", () => {
  if (inputsize.value) {
    text.style.fontSize = String(inputsize.value) + "px";
  } else {
    text.style.fontSize = "32px";
  }
});