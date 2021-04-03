import React, { PureComponent } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
export default class Todolist extends PureComponent {
	constructor(props) {
		super(props)
		this.state = store.getState()
		store.subscribe(this.handleStore)
	}

	render() {
		return (
			<div>
				<Input
					placeholder="Todo info"
					style={{ width: 300, margin: 10 }}
					value={this.state.inputValue}
					onChange={this.handleChange}
				/>
				<Button type="primary" onClick={this.handleClick}>
					提交
				</Button>
				<List
					style={{ width: 300, margin: 10 }}
					size="small"
					bordered
					dataSource={this.state.list}
					renderItem={(item, index) => (
						<List.Item onClick={this.handleItemClick.bind(this, index)}>
							{item}
						</List.Item>
					)}
				/>
			</div>
		)
	}
	handleChange = e => {
		const action = { type: 'on_change_value', value: e.target.value }
		store.dispatch(action)
	}
	handleClick = e => {
		const action = { type: 'add_input_list', value: this.state.inputValue }
		store.dispatch(action)
	}
	handleItemClick = index => {
		const action = { type: 'delete_list_item', index }
		store.dispatch(action)
	}
	handleStore = () => {
		this.setState(
			(preState, props) => store.getState(),
			() => {}
		)
	}
}
