let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if(count != 0){
    saveEl.textContent += ` ${count} -`
    countEl.textContent = 0
    count = 0
    }
}

document.getElementById("del-btn").addEventListener("click", ()=>{
    saveEl.innerText = "Previous entries:"
})
