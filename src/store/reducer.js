const initalState = {
	focused: false,
}
const reducer = (state = initalState, action) => {
	switch (action.type) {
		case 'search_focusT':
			return { ...state, focused: action.value }
		case 'search_focusF':
			return { ...state, focused: action.value }
		default:
			return state
	}
}
export default reducer
