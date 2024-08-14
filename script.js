//Recupera gli elementi
const preview = document.getElementById("preview");
const colorPickers = document.querySelectorAll(".color-picker");

//In attesa che il mouse vada nella casellina del colore
colorPickers.forEach((colorPicker) => {
  colorPicker.addEventListener("mouseover", (e) => {
    console.log(getComputedStyle(e.srcElement).backgroundColor);
    preview.style.backgroundColor = getComputedStyle(
      e.srcElement
    ).backgroundColor;
  });
});
