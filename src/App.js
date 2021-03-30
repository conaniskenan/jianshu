import React, { PureComponent, Fragment } from 'react'

export default class App extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			inputValue: '',
			list: [],
		}
	}
	//hhplplpp
	render() {
		let { inputValue, list } = this.state
		return (
			<Fragment>
				<div>
					<input
						type="text"
						value={inputValue}
						onChange={e => {
							this.handleChange(e)
						}}
					/>
					<button
						onClick={e => {
							this.handleClick(e)
						}}
					>
						添加
					</button>
				</div>
				<ul>
					{list.map((item, index) => {
						return (
							<Fragment>
								<div>
									<li key={index} style={{ display: 'inline-block' }}>
										{item}
									</li>
									<button
										onClick={e => {
											this.handleItemDelete(index)
										}}
									>
										删除
									</button>
								</div>
							</Fragment>
						)
					})}
				</ul>
			</Fragment>
		)
	}
	handleClick(e) {
		let value = this.state.inputValue
		if (value.trim().length === 0) {
			this.setState({
				inputValue: '',
			})
		} else {
			this.setState({
				list: [...this.state.list, this.state.inputValue],
				inputValue: '',
			})
		}
	}
	handleChange(e) {
		this.setState({
			inputValue: e.target.value,
		})
	}
	handleItemDelete(index) {
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list,
		})
	}
}
