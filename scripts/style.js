"use strict"

  var resetCards = function(cards) {
    console.log(cards)
    cards.forEach(function(card){
      card.classList.remove("color")
    })
  }
  var styleCard = function(card, color) {
    card.classList.add(color)
  }
  var bindText = function(card, userInput) {
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("color")){
        card.querySelector(".description").innerHTML = userInput.value
      }
    })
  }
