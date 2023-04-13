import express from 'express';
import productsRouter from './Routes/product.router.js'
import cartRouter from './Routes/cart.router.js'
import __dirname from './util.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//con _dirname tenemos la ruta absoluta
app.use(express.static(__dirname +'/public'))


// http://localhost:8080/api/products
app.use('/api/products', productsRouter)

// http://localhost:8080/api/carts
app.use('/api/carts', cartRouter)


app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto: ${PORT}`)
})

/*app.get ('/', (request, response)=> {
    response.send('Whats happend')

})*/

/*app.get('/products',  (req, res) => {

    const { limit } = req.query
    producto.getProducts().then(products => {
    if (!limit){
        res.send(products)
    } else{
        const limitProduts = products.slice(0, limit)
        res.send(limitProduts)
    }

    })
        .catch(err => res.status(500).send(err))

})*/

/*app.get('/products/:pid', (req, res) => {

    const id = parseInt(req.params.pid)
    producto.getProductById(id)
        .then(product =>{
            (res.send(product))
        })
        .catch(err => res.status(500).send(err))
})

app.listen(8080, () => {
    console.log('Estoy escuchando el puerto 8080...');
});*/