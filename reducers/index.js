const initialCounter = {
	countValue: 15
}
function CounterReducer(state = initialCounter, action) {

	switch(action.type) {

		case 'INCREMENT':
			let incremented = Object.assign({}, state);
			incremented.countValue++;
			return incremented

		case 'DECREMENT':
			let decremented = Object.assign({}, state);
			decremented.countValue--;
			return decremented

		default:
			return state;

	}

}

export default CounterReducer;