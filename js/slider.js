let btnNext = document.querySelector('.review__next')
let btnBack = document.querySelector('.review__back')
let reviewName = document.querySelector('.review__name')
let reviewText = document.querySelector('.review__text')
let reviewPhoto = document.querySelector('.review__photo')
let listIndex = 0
let reviewList = [
    {userName : 'Марина, 25 лет', userText : 'Обратилась к Сергею, потому что нервы уже были на пределе. Ситуация казалась мне безвыходной – несмотря на то, что я работаю и учусь. Сама не заметила, как избавилась от огромного кома. Наконец-то увидела выход из сложившейся ситуации и теперь есть надежда... Большое спасибо Валентину.', userPhoto : "./img/user_photo-1.png"},
    {userName : 'Евгения, 34 года', userText : 'Sit sit ex reprehenderit irure deserunt sint mollit anim nostrud labore reprehenderit commodo commodo ex. Irure dolor occaecat ullamco proident id ut labore ullamco deserunt. Sunt veniam Lorem est non sint veniam.', userPhoto : "./img/user_photo-2.png"},
    {userName : 'Алексей, 29 лет', userText : 'Eu officia esse ipsum fugiat do. Cupidatat labore eu cillum non do proident magna fugiat pariatur laboris tempor officia fugiat consectetur. Ullamco ut et mollit cillum aliqua incididunt sunt id excepteur.', userPhoto : "./img/user_photo-3.png"}
]
reviewName.innerText = reviewList[listIndex].userName
reviewText.innerText = reviewList[listIndex].userText
btnNext.addEventListener('click', function() {
    slider('next')
})
btnBack.addEventListener('click', function() {
    slider('back')
})
function slider(direction) {
    if (direction === 'next') {
        listIndex >= reviewList.length - 1 ? listIndex = 0 : listIndex += 1
        reviewName.innerText = reviewList[listIndex].userName
        reviewText.innerText = reviewList[listIndex].userText
        reviewPhoto.src = reviewList[listIndex].userPhoto
    }
    else if (direction === 'back') {
        listIndex <= 0 ? listIndex = reviewList.length - 1 : listIndex -= 1
        reviewName.innerText = reviewList[listIndex].userName
        reviewText.innerText = reviewList[listIndex].userText
        reviewPhoto.src = reviewList[listIndex].userPhoto
    }
}