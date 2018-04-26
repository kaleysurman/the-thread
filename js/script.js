var collection = [
  // [0]
  { item: "Stalvey Top Handle Mini Handbag",
    color: "White Alligator",
    cost: "$11,500",
    purchase: "https://www.stalvey.com/product/top-handle-mini-handbag-white-alligator/",
    company: "Stalvey"
  },
  // [1]
  { item: "Adam Selman Le Specs Sunglasses in the Last Lolita",
    color: "Crystal Grey",
    cost: "$119",
    purchase: "https://lespecs.com/the-last-lolita-1702127-crystal-grey-brass-mirror-las1702127",
    company: "Le Specs"
  },
  // [2]
  { item: "Sally LaPointe Lightweight Asymmetrical Sweater",
    color: "Blue",
    cost: "$790",
    purchase: "https://www.modaoperandi.com/sally-lapointe-r18/lightweight-asymmetrical-sweater",
    company: "Sally LaPointe"
  },
  // [3]
  { item: "Sally LaPointe Silk Paperbag Pants",
    color: "Blue",
    cost: "$1,290",
    purchase: "https://www.modaoperandi.com/sally-lapointe-r18#lkcell-128283",
    company: "Sally La Pointe"
  },
  // [4]
  { item: "Stuart Weitzman Clingy Boots",
    color: "Patent Snow White",
    cost: "$575",
    purchase: "https://www.stuartweitzman.com/products/clingy/snow-white-leather/?sid=295228&",
    company: "Stuart Weitzman"
  }
]

var h2El = document.querySelector("#title");
var colorEl = document.querySelector("#color");
var costEl = document.querySelector("#cost");
var purchaseEl = document.querySelector("#purchase");

var mainEl = document.querySelector("main");
mainEl.addEventListener("click", function(event) {
  console.log(event.target.id);
  var target = event.target.id;
  var focus = target.split("_");
  console.log(focus)

  h2El.textContent = collection[focus[0]].item
  colorEl.innerHTML = "<strong>Color:</strong> " + collection[focus[0]].color
  costEl.innerHTML = "<strong>Cost:</strong> " + collection[focus[0]].cost
  purchaseEl.innerHTML = "<strong>Purchase:</strong> " + "<a href='" + collection[focus[0]].purchase + "'>Buy from " + collection[focus[0]].company + "</a>"
});
