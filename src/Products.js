import React from 'react';
import API from './utils/API'; 

class Products extends React.Component {

	state = {
		products: []
	}


	async componentDidMount() {
		try {
			let productsData = await API.get(`/products`)
			productsData = productsData.data.data;
			const products = productsData;
			this.setState({ products })
		} catch(e) {
			console.log(`Axios request faild:${e}`);
		}
		
	}

	deleteProduct = async slug => {
		const signal = AbortController.signal
		try {
			const response = await API.delete(`/products/${slug}`, { signal: signal })
			const products = this.state.products.filter(p => p.slug !== slug);
    		this.setState({ products });

			console.log(response);
	        console.log(response.data);
		} catch(e) {
			console.log(`Delete faild:${e}`);
		}

		return function cleanup() {
			AbortController.abort()
		}

	}

	render() {
		return(
			<div>
				<div>Products</div>
				<div>
					{ this.state.products.map(product => 
						<div key={product.id}>
							<h3>{ product.name }</h3>
							<p>{ product.description }</p>
							<button onClick={this.deleteProduct.bind(null, product.slug)}>Delete</button>  
						</div>
					) }
				</div>
			</div>
		)
	}
}

export default Products;