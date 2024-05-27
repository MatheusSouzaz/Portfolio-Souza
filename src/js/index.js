document.querySelector('.btn-show-projects').addEventListener("click",(e)=>{
const botaoClasses = e.target.classList
const projetos = document.querySelectorAll('.project')
botaoClasses.add("used")
projetos.forEach(p => {
    if(p.classList[1] !== 'active'){
       p.classList.add("active")
    }
});
})