(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict"

var inventory = []


var loadInventory = function(callback){
  return new Promise(function(resolve, reject) {
    // body...
    var inventoryLoader = new XMLHttpRequest()
    inventoryLoader.open("GET", "inventory.json")
    inventoryLoader.addEventListener("load", function(event){
      console.log("event", event)
      inventory = JSON.parse(this.responseText).cars
      resolve(inventory)
      })
      inventoryLoader.send()
    })
  }
  var getInventory = function(){
    return inventory
  }

module.exports = {getInventory, loadInventory} //object literal shorthand
},{}],2:[function(require,module,exports){
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


},{"./style":4}],3:[function(require,module,exports){
"use strict"

var carInventory = require("./CarLot")
var eventStuff = require("./events")

//now, to call loadInventory, we call carInventory.loadInventory

var populatePage = function(inventory) {

  var output = document.querySelector("#output")
  var results = ""
  inventory.forEach(function(car, i){
    if (i % 3 === 0) {
    results += `<div class="row">`
    }
    results += `
    <div class="col-md-4 carCard carCard" style="border-color: ${car.color}">
    <h2>${car.make} ${car.model}</h2>
    <p>${car.year}</p>
    <p>${car.color}</p>
    <p>${car.price}</p>
    <p>${car.purchased}</p>
    <p class="description">${car.description}</p>
    </div>
    `
    if ((i + 1) % 3 === 0) {
      results += `</div>`
    }
  })

  output.innerHTML = results
  eventStuff()
}

  console.log("listen")
carInventory.loadInventory().then(function(inventoryFromLoadInventoryResolve){
  populatePage(inventoryFromLoadInventoryResolve)
  console.log("carPromise")
})




},{"./CarLot":1,"./events":2}],4:[function(require,module,exports){
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

module.exports = {resetCards, styleCard, bindText}
},{}]},{},[3]);
