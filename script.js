const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard, secondCard
//função para virar carta
function flipCard() {
  if (this === firstCard) return

  this.classList.add('flip')
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    return
  }

  secondCard = this
  hasFlippedCard = false
  checkForMatch()
}
//função que checa se as cartas são iguais
function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards()
    return
  }

  unflipCards()
}
//função que desabilita as cartas
function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
}

//funcão que desvira as cartas
function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
  }, 1500)
}
cards.forEach(card => {
  card.addEventListener('click', flipCard)
})
