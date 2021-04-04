import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
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

const Header = props => {
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
					<CSSTransition in={props.focused} timeout={300} classNames="slide">
						<NavSearch
							className={props.focused ? 'focusd' : ''}
							onFocus={props.handleFocus}
							onBlur={props.handleBlur}
						></NavSearch>
					</CSSTransition>
					<i className={props.focused ? 'focusd iconfont' : 'iconfont'}>
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

const mapStateToProps = state => ({
	focused: state.header.focused,
})

const mapDispatchToProps = dispatch => ({
	handleFocus() {
		dispatch(actionCreators.searchFocus())
	},
	handleBlur() {
		dispatch(actionCreators.searchBlur())
	},
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
