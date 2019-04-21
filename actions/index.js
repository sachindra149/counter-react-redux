const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function incrementAction() {
	return {
		type: 'INCREMENT'
	}
}

export function decrementAction() {
	return {
		type: 'DECREMENT'
	}
}