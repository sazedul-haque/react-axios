import React from 'react';
import axios from 'axios';

class AddProduct extends React.Component {

	constructor () {
    	super()
		this.state = {
		  	name: '',
			condition: '',
			slug: '',
			excerpt: '',
			description: '',
			official_url: '',
			specification: [
				{ }
			],
			options: [
				1,
				2
			],
			images: ['https://biyebazaar.com/']
		}

	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	}


	handleSubmit = event => {
		event.preventDefault();

		const { name, condition, slug, excerpt, description, official_url, specification, options, images } = this.state;


		var headers = {
            'Content-Type': 'application/json'
        }


		axios.post(`http://ac1e58f0.ngrok.io/api/products`, { name, condition, slug, excerpt, description, official_url, specification, options, images })
		.then(res => {
			console.log(res);
			console.log(res.data);
		}) 
		.catch(error => {
		    console.log(error.response.data)
		});
	}

	render(){
		const { name, condition, slug, excerpt, description, official_url, specification, options, images } = this.state;
		return (
			<div>
				<h1>Add Product</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Product Title:
						<input type="text" name="name" value={name} onChange={this.handleChange} />
					</label>
					<label>
						Product Slug:
						<input type="text" name="slug" value={slug} onChange={this.handleChange} />
					</label>
					<label>
						Product Description:
						<input type="text" name="description" value={description} onChange={this.handleChange} />
					</label>
					<label>
						Product Excerpt:
						<input type="text" name="excerpt" value={excerpt} onChange={this.handleChange} />
					</label>
					<label>
						Product Condition:
						<input type="text" name="condition" value={condition} onChange={this.handleChange} />
					</label>
					<label>
						Product Url:
						<input type="text" name="official_url" value={official_url} onChange={this.handleChange} />
					</label>
					<button type="submit">Add Product</button>
				</form>
			</div>
		)
	}
}
export default AddProduct;