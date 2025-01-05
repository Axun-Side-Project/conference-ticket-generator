export default {

	/**
	 * Helper Function
	 * 
	 * These functions are designed for internal purposes 
	 * and are not exposed for direct client usage.
	 */
	SET_FORM(state, data) {
		state.form = data;
	},

	GENERATE_TICKET(state) {
		state.showTicket = true;
	},
	
}