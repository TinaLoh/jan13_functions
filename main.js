var data = require("./products.json")

//2. to print out all the backordered items.

data["items"]

for (var i = 0; i < data['items'].length ; i ++) {
  if(data['items'][i]['product']['inventories'][0]['availability']=== 'backordered')
  console.log(data['items'])
}



//3. Find all items with more than one image
