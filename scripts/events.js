"use strict"

var cardStyle = require("./style")

  var activateEvents = function() {
    var cards = document.querySelectorAll(".carCard")
    console.log(cards)
    cards.forEach(function(card) {
    card.addEventListener("click", function(){
      var userInput = document.querySelector("#userInput")
      userInput.value = ""
      userInput.focus()
      cardStyle.resetCards(cards)
      cardStyle.styleCard(card, "color")
      cardStyle.bindText(card, userInput)
      })
    })
  }

module.exports = activateEvents

