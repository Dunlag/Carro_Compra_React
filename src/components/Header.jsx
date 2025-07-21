// Importa el hook useState de React para manejar el estado local
import { useState } from 'react';

// Componente Header que muestra el título y el carrito de compras
export const Header = ({
	allProducts,         // Array con los productos en el carrito
	setAllProducts,      // Función para actualizar el array de productos
	total,               // Precio total del carrito
	countProducts,       // Número total de productos en el carrito
	setCountProducts,    // Función para actualizar el contador de productos
	setTotal,            // Función para actualizar el total
}) => {
	// Estado local para mostrar/ocultar el carrito
	const [active, setActive] = useState(false);

	// Elimina un producto del carrito
	const onDeleteProduct = product => {
		// Filtra el producto a eliminar
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		// Actualiza el total y el contador de productos
		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	// Vacía todo el carrito
	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	// Renderiza el header y el carrito
	return (
		<header>
			{/* Título de la tienda */}
			<h1>Tienda</h1>

			<div className='container-icon'>
				{/* Icono del carrito, al hacer click muestra/oculta el carrito */}
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					{/* Muestra el número de productos en el carrito */}
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				{/* Contenedor de los productos del carrito, se muestra/oculta según el estado "active" */}
				<div
					className={`container-cart-products ${active ? '' : 'hidden-cart'
						}`}
				>
					{/* Si hay productos en el carrito, los muestra */}
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											{/* Cantidad de ese producto */}
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											{/* Nombre del producto */}
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											{/* Precio del producto */}
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										{/* Botón para eliminar el producto del carrito */}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							{/* Muestra el total a pagar */}
							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							{/* Botón para vaciar el carrito */}
							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						// Si no hay productos, muestra mensaje de carrito vacío
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};