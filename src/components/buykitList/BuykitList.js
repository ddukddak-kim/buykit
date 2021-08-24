import React from 'react';


const BuyTem = ({buyTem, onToggle, onRemove}) => {
	return (
		<div>
			<input
				type="checkbox"
				onClick={() => onToggle(buyTem.id)}
				checked={buyTem.done}
				readOnly={true}
			/>
			<span style={{ textDecoration: buyTem.done ? 'line-through' : 'none' }}>
				{ buyTem.text }
			</span>
			<button onClick={() => onRemove(buyTem.id)}>삭제</button>
		</div>
	);
};

const BuykitList = ({input, buykits, onChangeInput, onInsert, onToggle, onRemove}) => {

	const onSubmit = e => {
		e.preventDefault();
		onInsert(input);
		onChangeInput('');
	}

	const onChange = e => onChangeInput(e.target.value);

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={input} onChange={onChange}/>
				<button type="submit">등록</button>
			</form>
			<div>
				{buykits.map(buyTem => (
					<BuyTem
						buyTem={buyTem}
						key={buyTem.id}
						onToggle={onToggle}
						onRemove={onRemove}
					/>
				))}
			</div>
		</div>
	);
};

export default BuykitList;