const products = [
    { 
        id: '1', 
        name: 'Tablero', 
        price: 49574,
        category: 'Tablero', 
        img:'https://d2r9epyceweg5n.cloudfront.net/stores/002/235/664/products/tablero11-984308d369860f643116558598277885-480-0.jpg', 
        stock: 5, 
        description:'Palancas de acero, botones reforzados. la mejor calidad'
    },
    { id: '2', name: 'Pedestal TV', price: 49574, category: 'pedestal', img:'https://d2r9epyceweg5n.cloudfront.net/stores/002/235/664/products/pedestal-2-player1-57b356446130b4217a16558655670085-480-0.jpg', stock: 5, description:'Palancas de acero, botones reforzados eago, la mejor calidad'},
    { id: '3', name: 'Retro', price: 160000, category: 'retro', img:'https://d2r9epyceweg5n.cloudfront.net/stores/002/235/664/products/d11-785c1cc0550dde25e916561267776846-480-0.jpg', stock: 10, description:'Tv 32" smart android - Palancas de acero perita - Botones eago reforzados - La mejor calidad. '}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}