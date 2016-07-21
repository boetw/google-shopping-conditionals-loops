var data = require('../products.json');

var shoppingCount = 0;
// Write your solutions below


// Part 1

for(var i = 0; i < data.items.length; i++) {
	var item = data.items[i];
	if  (item.kind === "shopping#product"){
		shoppingCount++;
	}

}
console.log("Part 1: Shopping count = " + shoppingCount);


//Part 2

console.log("Part 2: Backordered items: ");
for (var i=0; i < data.items.length; i++){
	if (data.items[i].product.inventories[0].availability === "backorder"){
		console.log(data.items[i].product.title);
	}
}


//Part 3

console.log("Part 3: Multiple Images: ")
for (var i=0; i < data.items.length; i++){
	if (data.items[i].product.images.length > 1){
		console.log(data.items[i].product.title);
	}
}


//Part 4

console.log("Part 4: Canon Products: ")
for (var i=0; i < data.items.length; i++){
	if (data.items[i].product.brand === "Canon"){
		console.log(data.items[i].product.title);
	}
}


//Part 5

console.log("Part 5: eBay and Canon");
for (var i=0; i < data.items.length; i++){
	if (data.items[i].product.author.name == "eBay" && data.items[i].product.brand === "Canon"){
		console.log(data.items[i].product.title);
	}
}

//Part 6

console.log("Part 6: Brand, Price, Image");
for (var i=0; i < data.items.length; i++){
	console.log("Brand: "+data.items[i].product.brand+"   Price: " +data.items[i].product.inventories[0].price);
	console.log("Image: " +data.items[i].product.images[0].link);
}
//console.log(data.items);
