import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 5.6rem;
	border-bottom: 1px solid #f0f0f0;
	position: fixed;
`
export const Logo = styled.a.attrs({
	href: '/',
})`
	display: inline-block;
	width: 10rem;
	height: 5.6rem;
	background: url(${logoPic});
	background-size: contain;
	z-index: 999;
`
export const Nav = styled.div`
	width: 96rem;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
`
export const NavItem = styled.div`
	line-height: 5.6rem;
	padding: 0 1.5rem;
	font-size: 1.7rem;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
		.iconfont {
			font-size: 2.4rem;
		}
	}
	&.active {
		color: #ea6f5a;
	}
`
export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	line-height: 5.6rem;
	.iconfont {
		position: absolute;
		right: 0.5rem;
		top: 50%;
		transform: translateY(-50%);
		width: 3rem;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		border-radius: 50%;
		font-size: 2rem;
		font-weight: bold;
		color: #a6a6a6;
		&.focusd {
			background-color: #969696;
			color: #fff;
		}
	}
`
export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
	width: 18rem;
	height: 3.8rem;
	padding: 0 4.2rem 0 2rem;
	outline: none;
	border: none;
	border-radius: 1.9rem;
	margin-top: 0.9rem;
	margin-left: 2rem;
	background: #eee;
	font-size: 1.3rem;
	&.slide-enter {
		width: 18rem;
		transition: all 0.3s ease-out;
	}
	&.slide-enter-active {
		width: 25rem;
	}
	&.slide-exit {
		transition: all 0.3s ease-out;
	}
	&.slide-exit-active {
		width: 18rem;
	}
	&::placeholder {
		color: #999;
	}
	&.focusd {
		width: 25rem;
	}
`
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 5.6rem;
	line-height: 5.6rem;
`
export const SearchInfo = styled.div`
	position: absolute;
	left: 2rem;
	top: 5.6rem;
	width: 24rem;
	margin-top: 1rem;
	padding: 0 2rem 2rem 2rem;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	background-color: #fff;
	&.hide {
		display: none;
	}
	&::before {
		content: '热门搜索';
		color: #a3a3a3;
		font-size: 1.4rem;
		font-weight: bold;
	}
`
export const SearchInfoItem = styled.a.attrs({ href: '#' })`
	display: block;
	float: left;
	padding: 0 0.6rem;
	line-height: 2.5rem;
	font-size: 1.3rem;
	color: #787878;
	text-decoration: none;
	border: 1px solid #ddd;
	border-radius: 3px;
	margin: 0.6rem 0.7rem;
`
export const SearchChange = styled.div`
	position: absolute;
	right: 2rem;
	top: 0;
	color: #a3a3a3;
	font-size: 1.4rem;
	font-weight: bold;
	text-decoration: none;
	.iconfont {
		position: absolute;
		right: 3.8rem;
		top: 2.8rem;
		font-size: 1.6rem;
		font-weight: normal;
	}
`
export const Triangle = styled.div`
	width: 0;
	height: 0;
	border: 1rem solid transparent;
	border-bottom: 1.3rem solid #fff;
	position: absolute;
	left: 2.2rem;
	top: -2.3rem;
`
export const Button = styled.span`
	display: inline-block;
	border-radius: 1.9rem;
	height: 3rem;
	line-height: 3rem;
	text-align: center;
	font-size: 1.4rem;
	border: 1px solid #ec6149;
	padding: 0 2rem;
	margin-right: 2rem;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`
