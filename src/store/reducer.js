const initialState = { list: [], inputValue: '' }

let reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'on_change_value':
			return { ...state, inputValue: action.value }
		case 'add_input_list':
			return { ...state, list: [...state.list, action.value], inputValue: '' }
		case 'delete_list_item':
			let list = [...state.list]
			list.splice(action.index, 1)
			return { ...state, list }
		default:
			return state
	}
}
export default reducer
