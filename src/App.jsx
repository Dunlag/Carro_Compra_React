// Importa React y el hook useState para manejar estados
import React from 'react'
import { useState } from 'react'
// Importa los componentes Header y ProductList
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

// Componente principal de la aplicación
function App() {
  // Estado para almacenar los productos en el carrito
  const [allProducts, setAllProducts] = useState([])
  // Estado para el total a pagar
  const [total, setTotal] = useState(0)
  // Estado para el contador de productos en el carrito
  const [countProducts, setCountProducts] = useState(0)

  // Renderiza el Header y la lista de productos, pasando los estados y funciones necesarias como props
  return (
    <>
      {/* Header muestra el título y el carrito */}
      <Header
        allProducts={allProducts}
        total={total}
        countProducts={countProducts}
        setAllProducts={setAllProducts}
        setTotal={setTotal}
        setCountProducts={setCountProducts}
      />
      {/* ProductList muestra los productos y permite añadirlos al carrito */}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        setTotal={setTotal}
        setCountProducts={setCountProducts}
        total={total}
        countProducts={countProducts}
      />
    </>
  )
}

// Exporta el componente principal
export default App
