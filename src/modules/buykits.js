const CHANGE_INPUT = 'buykits/CHANGE_INPUT';
const INSERT = 'buykits/INSERT';
const TOGGLE = 'buykits/TOGGLE';
const REMOVE = 'buykits/REMOVE';

export const changeInput = input => ({
	type: CHANGE_INPUT,
	input
});

let id = 3;

export const insert = text => ({
	type: INSERT,
	buykits: {
		id: id++,
		text,
		done: false
	}
});

export const toggle = id => ({
	type: TOGGLE,
	id
});

export const remove = id => ({
	type: REMOVE,
	id
});

const initState = {
	input: '',
	buykits: [
		{
			id: 1,
			text: '리덕스 기초 배우기',
			done: true,
		},
		{
			id: 2,
			text: '김밥말기',
			done: false,
		}
	]
};

const buykits = (state=initState, action) => {
	switch (action.type) {
		case CHANGE_INPUT:
			return {
				...state,
				input: action.input
			};
		case INSERT:
			console.log("action : ", action);
			return {
				...state,
				buykits: state.buykits.concat(action.buykits)
			};
		case TOGGLE:
			return {
				...state,
				buykits: state.buykits.map(buykit =>
					buykit.id === action.id ? {...buykit, done: !buykit.done} : buykit
				)
			};
		case REMOVE:
			return {
				...state,
				buykits: state.buykits.filter(buykit => buykit.id !== action.id)
			};
		default: return state;
	}
}

export default buykits;
