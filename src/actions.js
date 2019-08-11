import { CHANGE_SEARCH_FIELD } form '.CONSTANTS.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})