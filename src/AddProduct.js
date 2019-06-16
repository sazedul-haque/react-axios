import React from 'react';
import API from './utils/API'; 

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


	handleSubmit = async event => {
		event.preventDefault();

		const { name, condition, slug, excerpt, description, official_url, specification, options, images } = this.state;


		try { 
			const res = await API.post(`/products`, { 
				name, condition, slug, excerpt, description, official_url, specification, options, images 
			})
			console.log(res);
		}
		catch(e) {
			console.log(`product cration faild: ${e}`);
		}

	}

	render(){
		const { name, condition, slug, excerpt, description, official_url, specification, options, images } = this.state;
		return (
			<div>
				<h1>Add Product</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Product Title:</label>
						<input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Product Slug:</label>
						<input type="text" className="form-control" name="slug" value={slug} onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Product Description:</label>
						<textarea rows="5" className="form-control" name="description" value={description} onChange={this.handleChange}></textarea>
					</div>
					<div className="form-group">
						<label>Product Excerpt:</label>
						<textarea rows="4" className="form-control" name="excerpt" value={excerpt} onChange={this.handleChange}></textarea>
					</div>
					<div className="form-group">
						<label>Product Condition:</label>
						<input type="text" className="form-control" name="condition" value={condition} onChange={this.handleChange} />
					</div>
					<div className="form-group">
						<label>Product Url:</label>
						<input type="text" className="form-control" name="official_url" value={official_url} onChange={this.handleChange} />
					</div>
					<button type="submit" className="btn btn-secondary">Add Product</button>
				</form>
			</div>
		)
	}
}
export default AddProduct;