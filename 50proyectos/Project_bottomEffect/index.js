const btn=document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
   let x=e.clientX;
   let y=e.clientY;

   const buttonTop = e.target.offsetTop
   const buttonLeft = e.target.offsetLeft

   const xInside = x - buttonLeft-10
   const yInside = y - buttonTop-10

   const circle = document.createElement('span')
   circle.classList.add('click')
   circle.style.top = yInside + 'px'
   circle.style.left = xInside + 'px'
   btn.appendChild(circle)
   

   setTimeout(() => circle.remove(), 500)
})
