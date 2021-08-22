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
	buykit: {
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
