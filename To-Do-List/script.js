const input = document.querySelector("#input")
const button = document.querySelector(".btn")
const ul = document.querySelector(".ul")
const ulDiv = document.querySelector(".ul-div")

const addTask = () => {
    const li = document.createElement("li")
    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    li.textContent = input.value
    ul.appendChild(ulDiv)
    ulDiv.appendChild(li)
    ulDiv.appendChild(checkBox)
}

button.onclick = addTask