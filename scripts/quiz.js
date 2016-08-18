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



