let products =[
  {id:1,name:'iphone15',price:80000,photourl:'https://sm.pcmag.com/pcmag_me/review/a/apple-ipho/apple-iphone-15_5efk.jpg'},

  {id:2,name:'iphone16',price:100000,photourl:"https://cdn.mos.cms.futurecdn.net/fYiknYQteLSt8emoFfNWNH-1600-80.jpg"}
];
function showProducts(){
   '<thead><tr><td>ID</td> <td>Name</td> <td>Price<td><td>Link</td></tr></thead>'
  let response = '<thead><tr><td>ID</td> <td>Name</td> <td>Price</td><td>photo</td></tr></thead><tbody>'
  for(let i=0; i< products.length; i++){
    response = response + '<tr>'
    response = response + '<td>' + products[i].id + '</td>'
    response = response + '<td>' + products[i].name + '</td>'
    response = response + '<td>' + products[i].price + '</td>'
    response = response + '<td> <img height=50px src=' + products[i].photourl + '> </td>'
    response = response + '</tr>'
  }
  response = response + '</tbody>'
  document.getElementById('myTab').innerHTML = response
}


function addProduct(){
  let id =document.getElementById('pid').value
  let name =document.getElementById('pname').value
  let price =document.getElementById('pprice').value
  let photourl =document.getElementById('purl').value
  let product ={id,name,price,photourl}
  products.push(product)
  showProducts();
}