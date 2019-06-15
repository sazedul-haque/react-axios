import React from 'react';
import axios from 'axios';

class Products extends React.Component {

	state = {
		products: []
	}

	deleteProduct = slug => {
		axios.delete(`http://ac1e58f0.ngrok.io/api/products/${slug}`)
	    .then(res => {
	        console.log(res);
	        console.log(res.data);
	    })
	}

	componentDidMount() {
		axios.get(`http://ac1e58f0.ngrok.io/api/products`)
		.then(res => {
			const products = res.data.data;
			this.setState({ products })
			console.log(products);
		})
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