const header =document.querySelector("header")
const main =document.querySelector("main")
const footer =document.querySelector("footer")
const btnExample= createButtonInfo()



//Insert element before the container
// main.before(btnExample)

//Insert element like the last child
// main.appendChild(btnExample)

// Insert element after the container
//main.after(btnExample)

//Insert element like a first child
// main.prepend(btnExample)


// Insert a lot of elements like a last childrens
// main.append(btnExample)


// // Replace a first child 
// main.replaceChild(btnExample)

// Replace all children
// main.replaceChildren(btnExample)

// Borra el contenedero
// main.replaceWith(btnExample)

//borra por completo el elemento
// main.remove()


function createButtonInfo(){
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-info")
    btn.textContent = "Point"
    return btn
}

// console.log(main)
// console.log(main.children)
// // acceder al padre del elemento
// const btnDark =document.querySelector(".btn-dark")
// console.log(btnDark.parentElement)

// //Acceder al primer hijo del elemento
// console.log(main.firstElementChild)
// //Acceder al ultimo hijo del elemento
// console.log(main.lastChild)

console.log(main.previousElementSibling) // Acceder al elemento hermano anterior
console.log(main) //acceder al elemento
console.log(main.nextElementSibling) //Acceder al elemento hermano siguiente