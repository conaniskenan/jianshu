import { constants } from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

let isFirst = false
const changeList = data => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10),
})

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS,
	value: true,
})
export const searchBlur = () => ({
	type: constants.SEARCH_BLUR,
	value: false,
})
export const getList = () => {
	return async dispatch => {
		try {
			if (isFirst) {
				return
			}
			let res = await axios.get('/api/headerlist.json')
			dispatch(changeList(res.data.data))
			isFirst = true
		} catch (e) {
			console.log(e)
		}
	}
}
export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER,
	value: true,
})
export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE,
	value: false,
})
export const changePage = page => ({
	type: constants.CHANGE_PAGE,
	page: page,
})
