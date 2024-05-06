const main=document.querySelector("main")
const boton=document.querySelector(".boton_agregar")
const botonEliminar=document.querySelector(".boton_eliminar")
const botonReemplazar=document.querySelector(".boton_reemplazar")
const botonEnMedioDe=document.querySelector(".boton_middle_of")

//Creacion de un nuevo boton
function createButtonSuccess() {
    const button=document.createElement("button")
   // button.setAttribute("type","button") //enviar el atributo type al elemento button
    button.type = "button" // otra forma de enviar el atributo type al elemento button version moderna
    button.classList.add("btn", "btn-success") //agregamos las clases al elemento button
    button.textContent = "hello" //agregamos contenido de texto al elemento button
    return button
}


// recepcion del evento click y agregar el boton
boton.addEventListener("click",function() {
//    alert("Hola")
    const btnResponse=createButtonSuccess()
    // console.log(btnResponse)
    main.appendChild(btnResponse) //esta es una forma de insertar con la funcion
    // main.innerHTML+=`  <button type="button" class="btn btn-primary btn-success">
    //         Hello
    //         </button>
    // `// esta es otra forma de agregar pero con etiquetas HTML
})


//Eliminar
botonEliminar.addEventListener("click",function() {
   
    const btnForDeleted=selectInfoButton()
    main.removeChild(btnForDeleted)
       
        
})


//Seleccion del boton
function selectInfoButton(){
    const btnFound=document.querySelector(".btn-info")
    return btnFound
}

//Reemplazar

botonReemplazar.addEventListener("click",function(){
    const btnForReplaced=selectInfoButton()
    const newButton=createButtonSuccess()
    main.replaceChild(newButton,btnForReplaced)
       

})


//Insert before

botonEnMedioDe.addEventListener("click",function(){
    const buttonInMiddle= createButtonSuccess()
    const btnReference=selectInfoButton()
    main.insertBefore(buttonInMiddle,btnReference)
})

