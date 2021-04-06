import { constants } from './index'
import { fromJS } from 'immutable'

const initalState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	currentPage: 1,
	totalPage: 1,
})

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', action.value)
		case constants.SEARCH_BLUR:
			return state.set('focused', action.value)
		case constants.CHANGE_LIST:
			return state.merge({ list: action.data, totalPage: action.totalPage })
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', action.value)
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', action.value)
		case constants.CHANGE_PAGE:
			return state.set('currentPage', action.page)
		default:
			return state
	}
}
export default reducer
