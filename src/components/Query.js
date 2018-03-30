import React, { Component } from 'react'
import { Input, Button, Form, Radio } from 'antd';

const RadioGroup = Radio.Group;

export default class Query extends Component {

	state = {
		key: '',
		con: 'html'
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = async (e) => {
		e.preventDefault();
		this.props.fetchData(this.state.key, this.state.con);

	}

	render() {
		return (
			<div>
				<Form layout="vertical" onSubmit={this.onSubmit} >
					<Input
						className="search"
						name='key'
						onChange={this.onChange}
						size="large"
						required
						placeholder="jquery.js"></Input>
					<Button
						size="large"
						htmlType="submit"
						type="primary">Search
						</Button>
					<br />
					<RadioGroup defaultValue={'html'} onChange={this.onChange} name='con' >
						<Radio value={'html'}>HTML</Radio>
						<Radio value={'css'}>CSS</Radio>
						<Radio value={'js'}>JS</Radio>
					</RadioGroup>
				</Form>
			</div>
		)
	}
}
