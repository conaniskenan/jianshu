import React, { PureComponent, Fragment } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style'
import { IconFont } from '../src/statics/iconfont/iconfont'

export default class App extends PureComponent {
	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<IconFont />
				<Provider store={store}>
					<Header />
				</Provider>
			</Fragment>
		)
	}
}
