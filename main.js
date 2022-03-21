let listaEle = document.querySelectorAll('.boton--click');

listaEle.forEach(element =>{
    element.addEventListener('click', ()=>{
        element.classList.toggle('flechis');

        let height=0;
        let menu= element.nextElementSibling;
        if(menu.clientHeight == "0")
        {
            height= menu.scrollHeight;
        }
        menu.style.height= `${height}px`;


    })
});
