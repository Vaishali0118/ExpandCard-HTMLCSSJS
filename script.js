let cards = document.querySelectorAll('.card');

cards.forEach(card=>{
    card.addEventListener('click',()=>{
        removeActiveclass()
        card.classList.add('active')
    })
})

function removeActiveclass(){
    cards.forEach(card=>{
        card.classList.remove('active')
    })
}