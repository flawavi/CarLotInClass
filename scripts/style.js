"use strict"

var CarLot = (function(carLot){
  carLot.resetCards = function(cards) {
    console.log(cards)
    cards.forEach(function(card){
      card.classList.remove("color")
    })
  }
  carLot.styleCard = function(card, color) {
    card.classList.add(color)
  }
  carLot.bindText = function(card, userInput) {
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("color")){
        card.querySelector(".description").innerHTML = userInput.value
      }
    })
  }

  return carLot

})(CarLot);