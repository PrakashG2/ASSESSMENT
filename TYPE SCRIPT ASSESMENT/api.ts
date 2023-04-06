interface products {
    id: number
    pname: string
    pdescription: string
    price: string

}


function getproducts(): Promise<products[]> {
    return fetch('/products.json')
        .then(res => res.json())
        .then(res => {
            return res as products[]
        }) 


}
getproducts()
    .then(products => {
        document.write(products.map(p => p.id + p.pname + p.pname + p.pdescription + p.price).toString())
    })

fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(json => console.log(json))

