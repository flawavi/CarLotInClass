"use strict"

var inventory = []


var loadInventory = function(callback){
  var inventoryLoader = new XMLHttpRequest()
  inventoryLoader.open("GET", "inventory.json")
  inventoryLoader.addEventListener("load", function(event){
    console.log("event", event)
    inventory = JSON.parse(this.responseText).cars
    callback(inventory)
    })
  inventoryLoader.send()
  }
  var getInventory = function(){
    return inventory
  }

module.exports = {getInventory, loadInventory} //object literal shorthand