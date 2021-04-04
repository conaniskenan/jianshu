import { constants } from './index'

const initalState = {
	focused: false,
}

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case constants.SEARCH_FOCUS:
			return { ...state, focused: action.value }
		case constants.SEARCH_BLUR:
			return { ...state, focused: action.value }
		default:
			return state
	}
}
export default reducer
