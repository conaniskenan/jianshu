import React, { PureComponent } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
const data = [
	'Racing car sprays burning fuel into crowd.',
	'Japanese princess to wed commoner.',
	'Australian walks 100km after outback crash.',
	'Man charged over missing wedding girl.',
	'Los Angeles battles huge wildfires.',
]
export default class Todolist extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			list: [...data],
			value: '',
		}
	}

	render() {
		return (
			<div>
				<Input
					placeholder="Todo info"
					style={{ width: 300, margin: 10 }}
					onChange={e => {
						this.handleChange(e)
					}}
					value={this.state.value}
				/>
				<Button
					type="primary"
					onClick={e => {
						this.handleClick()
					}}
				>
					提交
				</Button>
				<List
					style={{ width: 300, margin: 10 }}
					size="small"
					bordered
					dataSource={this.state.list}
					renderItem={item => <List.Item>{item}</List.Item>}
				/>
			</div>
		)
	}
	handleChange(e) {
		this.setState(
			(preState, props) => ({ value: e.target.value }),
			() => {}
		)
	}
	handleClick() {
		this.setState(
			(preState, props) => ({
				list: [...preState.list, preState.value],
				value: '',
			}),
			() => {}
		)
	}
}
