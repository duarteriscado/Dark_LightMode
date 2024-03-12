function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // ir buscar a tag img
  const img = document.querySelector("#profile img")
  const p = document.querySelector("#mudar-texto")
  // depois, substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light

    img.setAttribute("src", "./assets/lightRiscado.png")
    img.setAttribute(
      "alt",
      "Foto do Duarte Riscado a sorrir, a usar +/- óculos de sol e uma camisa no carro"
    )
    //Definir o texto do p
    p.textContent = "@duarteriscado claro"
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/darkRiscado.png")
    img.setAttribute(
      "alt",
      "Foto de Duarte Riscado, com bigode e casaco azul na casa do Azoia"
    )
    p.textContent = "@duarteriscado escuro"
  }
}
