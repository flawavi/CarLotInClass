"use strict"

var CarLot = (function(){
  var inventory = []

  return {
    loadInventory: function(callback){
      var inventoryLoader = new XMLHttpRequest()
      inventoryLoader.open("GET", "inventory.json")
      inventoryLoader.addEventListener("load", function(event){
        console.log("event", event)
        inventory = JSON.parse(this.responseText).cars
        callback(inventory)
      })
      inventoryLoader.send()
    },
    getInventory: function(){
      return inventory
    }
  }
})();