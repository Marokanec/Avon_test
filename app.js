const colorBtn = document.querySelectorAll('.color__item input[type="radio"]')
const colorDesc = ['Оттенок: коричнево-черная', 'Оттенок: графит', 'Оттенок: темно-синий', 'Оттенок: черный']
let colorText = document.querySelector('.color__desc')
const closePromo = document.querySelector('.promo__close')
const promo = document.querySelector('.promo')
const addToCart = document.querySelector('.add-to-cart input[type="submit"]')

for(let i = 0; i < colorBtn.length; i ++){
    colorBtn[i].btn = i
    colorBtn[i].addEventListener("click", function(){
        colorText.textContent = colorDesc[i]
    })
}

window.onload = function(){
    colorBtn[0].click()
}

addToCart.addEventListener('click', (e) => {
    e.preventDefault();
    for (let color of colorBtn) {
        if (color.checked) {
           alert(`Товар ${color.value} в корзине`)
        }
    }
    
})

closePromo.addEventListener('click', () => {
    promo.style.display = 'none'
})