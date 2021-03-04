document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          },
          {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          }    
    ]

    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/Memory.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        var message = document.getElementById('error')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/Memory.png')
          cards[optionOneId].setAttribute('src', 'images/Memory.png')
          alert('You have clicked the same image!')
        }

        else if (cardsChosen[0] === cardsChosen[1]) {
            message.innerHTML = 'You found a match'
            cards[optionOneId].setAttribute('src', 'images/grey.png')
            cards[optionTwoId].setAttribute('src', 'images/grey.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/Memory.png')
            cards[optionTwoId].setAttribute('src', 'images/Memory.png')
            message.innerHTML = 'Sorry, try again'
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
            message.innerHTML = ''
        }
    }

    //flip your card
    function flipCard() {
      var message = document.getElementById('error')
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        message.innerHTML = ''
        if (cardsChosen.length === 2) {
             setTimeout(checkForMatch, 500)
        }
    }

createBoard()

})