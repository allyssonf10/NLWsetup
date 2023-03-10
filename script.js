const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia jรก incluso ๐")
    return
  }

  alert("Dia adicionado com sucesso โ")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("nlwhabits", JSON.stringify(nlwSetup.data))
}

//const data = {
//  run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
//  dog: ["01-03"],
//  food: ["01-05"],
//}

const data = JSON.parse(localStorage.getItem("nlwhabits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
