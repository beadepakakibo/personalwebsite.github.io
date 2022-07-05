const x = document.querySelectorAll(".panel");

x.forEach(function(panel){
    panel.addEventListener('click', ()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses(){
    x.forEach(function(panel){
        panel.classList.remove('active');
    })
}