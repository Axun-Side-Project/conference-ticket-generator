export default {

	/**
	 * Helper Function
	 * 
	 * These functions are designed for internal purposes 
	 * and are not exposed for direct client usage.
	 */

	/**
	 * Client Function 
	 */
	setForm({ state, commit }, data ) {
		commit("SET_FORM", data);
		commit("GENERATE_TICKET")
	},

}