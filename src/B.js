import React, { PureComponent, Fragment } from 'react'
import './B.css'
export default class B extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isShow: true,
			showMsg: 'hide',
		}
	}

	render() {
		return (
			<Fragment>
				<h2 className={this.state.isShow ? 'show' : 'hide'}>Hello</h2>
				<button
					onClick={e => {
						this.handleToggle()
					}}
				>
					{this.state.showMsg}
				</button>
			</Fragment>
		)
	}
	handleToggle() {
		if (this.state.isShow) {
			this.setState(
				(preState, props) => ({ showMsg: 'show', isShow: !preState.isShow }),
				() => {}
			)
		} else {
			this.setState(
				(preState, props) => ({ showMsg: 'hide', isShow: !preState.isShow }),
				() => {}
			)
		}
	}
}
