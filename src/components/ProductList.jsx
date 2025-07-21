// Importa los datos de productos desde el archivo data.js
import { data } from '../data';

// Componente que muestra la lista de productos y permite añadirlos al carrito
export const ProductList = ({
	allProducts,         // Array con los productos que están en el carrito
	setAllProducts,      // Función para actualizar el array de productos en el carrito
	countProducts,       // Número total de productos en el carrito
	setCountProducts,    // Función para actualizar el contador de productos
	total,               // Precio total del carrito
	setTotal,            // Función para actualizar el total
}) => {
	// Función que se ejecuta al pulsar "Añadir al carrito"
	const onAddProduct = product => {
		// Verifica si el producto ya está en el carrito
		if (allProducts.find(item => item.id === product.id)) {
			// Si existe, aumenta la cantidad del producto en el carrito
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			// Actualiza el total sumando el precio del producto añadido
			setTotal(total + product.price * product.quantity);
			// Actualiza el contador de productos
			setCountProducts(countProducts + product.quantity);
			// Actualiza el array de productos en el carrito
			return setAllProducts([...products]);
		}

		// Si el producto no está en el carrito, lo añade por primera vez
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	// Renderiza la lista de productos disponibles
	return (
		<div className='container-items'>
			{/* Recorre el array de productos y muestra cada uno */}
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						{/* Imagen del producto */}
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						{/* Nombre del producto */}
						<h2>{product.nameProduct}</h2>
						{/* Precio del producto */}
						<p className='price'>${product.price}</p>
						{/* Botón para añadir el producto al carrito */}
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};