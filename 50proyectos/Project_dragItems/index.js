const contents=document.querySelectorAll(".content")
const items=document.querySelectorAll(".item")

contents.forEach(content=>{
    content.addEventListener("dragstart",()=>{
        content.classList.add("hold")
    })
    content.addEventListener("dragover", event=>{
        event.preventDefault()
    })
    content.addEventListener("drop",event=>{
        const id_parrafo=event.dataTransfer.getData("id")
        const parrafo=document.getElementById(id_parrafo)
        content.appendChild(parrafo)
    })
})
items.forEach(item=>{
    item.addEventListener("dragstart",event=>{
        item.classList.add("dragging")
        event.dataTransfer.setData("id", item.id)
    })
    item.addEventListener("dragend",()=>{
        item.classList.remove("dragging")
        contents.forEach(content=>{
            content.classList.remove("hold")
        })
    })
})



