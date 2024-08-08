function toogleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatarb.png")
  } else {
    img.setAttribute("src", "./assets/avatar bare.png")
  }
  // tenho q pegar a taf img
  // substituir a imagem
  // se tiver light mode, adc a imagem light
  // se tiver sem light mode, manter imagem normal
}
