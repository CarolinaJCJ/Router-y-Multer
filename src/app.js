import express from 'express';
import productsRouter from './Routes/product.router.js'
import cartRouter from './Routes/cart.router.js'
import __dirname from './util.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//con _dirname tenemos la ruta absoluta
//app.use(express.static(__dirname +'/public'))(aun no agrego html)

// http://localhost:8080/api/products
app.use('/api/products', productsRouter)

// http://localhost:8080/api/carts
app.use('/api/carts', cartRouter)


app.listen(PORT, ()=>{
    console.log(`Escuchando el puerto: ${PORT}`)
})
