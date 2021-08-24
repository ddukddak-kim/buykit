import React from 'react';
import { connect } from "react-redux";
import { changeInput, insert, remove, toggle } from "../modules/buykits";
import BuykitList from "../components/buykitList/BuykitList";

const BuykitContainer = ({
		input, buykits, changeInput, insert, toggle, remove
	}) => {
	console.log("#1 ", input)
	return (
		<BuykitList
			input={input}
			buykits={buykits}
			onChangeInput={changeInput}
			onInsert={insert}
			onToggle={toggle}
			onRemove={remove}
		/>
	);
};

export default connect(
	({buykits}) => ({
		input: buykits.input,
		buykits: buykits.buykits,
	}),
	{
		changeInput,
		insert,
		toggle,
		remove
	},
)(BuykitContainer);