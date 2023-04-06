"use strict";
function getproducts() {
    return fetch('/products.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
getproducts()
    .then(products => {
    document.write(products.map(p => p.id + p.pname + p.pname + p.pdescription + p.price).toString());
});
fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(json => console.log(json));
