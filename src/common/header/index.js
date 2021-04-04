import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
} from './style'

class Header extends PureComponent {
	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={300}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focusd' : ''}
								onFocus={this.props.handleFocus}
								onBlur={this.props.handleBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focusd iconfont' : 'iconfont'}>
							&#xe614;
						</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="reg">注册</Button>
					<Button className="writting">
						<i className="iconfont">&#xe615;</i>写文章
					</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}
const mapStateToProps = state => ({
	focused: state.focused,
})

const mapDispatchToProps = dispatch => ({
	handleFocus() {
		const action = {
			type: 'search_focusT',
			value: true,
		}
		dispatch(action)
	},
	handleBlur() {
		const action = {
			type: 'search_focusF',
			value: false,
		}
		dispatch(action)
	},
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
