import React, { PureComponent } from 'react'
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
	SearchInfo,
	Triangle,
	SearchInfoItem,
	SearchChange,
} from './style'

class Header extends PureComponent {
	render() {
		const {
			focused,
			mouseIn,
			currentPage,
			totalPage,
			handleBlur,
			handleFocus,
			handleMouseEnter,
			handleMouseLeave,
			handleChangeList,
		} = this.props
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
						<CSSTransition in={focused} timeout={300} classNames="slide">
							<NavSearch
								className={focused ? 'focusd' : ''}
								onFocus={handleFocus}
								onBlur={handleBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focusd iconfont' : 'iconfont'}>&#xe614;</i>
						<SearchInfo
							className={focused || mouseIn ? '' : 'hide'}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<Triangle></Triangle>
							<SearchChange
								onClick={() => handleChangeList(currentPage, totalPage)}
							>
								<i className="iconfont">&#xe851;</i>换一批
							</SearchChange>
							<div>{this.getListArea()}</div>
						</SearchInfo>
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
	getListArea = () => {
		const { currentPage, list } = this.props
		const newList = list.toJS()
		const currentList = []
		for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
			currentList.push(newList[i])
		}
		if (newList.length) {
			return currentList.map(item => {
				return <SearchInfoItem key={item}>{item}</SearchInfoItem>
			})
		} else {
			return null
		}
	}
}

const mapStateToProps = state => ({
	focused: state.getIn(['header', 'focused']),
	list: state.getIn(['header', 'list']),
	mouseIn: state.getIn[('header', 'mouseIn')],
	currentPage: state.getIn(['header', 'currentPage']),
	totalPage: state.getIn(['header', 'totalPage']),
})

const mapDispatchToProps = dispatch => ({
	handleFocus() {
		dispatch(actionCreators.getList())
		dispatch(actionCreators.searchFocus())
	},
	handleBlur() {
		setTimeout(() => {
			dispatch(actionCreators.searchBlur())
		}, 1000)
	},
	handleMouseEnter() {
		dispatch(actionCreators.mouseEnter())
	},
	handleMouseLeave() {
		dispatch(actionCreators.mouseLeave())
	},
	handleChangeList(currentPage, totalPage) {
		let page
		if (currentPage < totalPage) {
			page = currentPage + 1
		} else {
			page = 1
		}
		dispatch(actionCreators.changePage(page))
	},
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
