import { constants } from './index'
const searchFocus = () => ({
	type: constants.SEARCH_FOCUS,
	value: true,
})
const searchBlur = () => ({
	type: constants.SEARCH_BLUR,
	value: false,
})
export { searchFocus, searchBlur }
