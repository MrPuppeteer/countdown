import { useState } from 'preact/hooks';

const Form = ({ onSaveData }) => {
	const [datetime, setDatetime] = useState('');

	const datetimeChangeHandler = event => {
		setDatetime(event.target.value);
	};

	const submitHandler = event => {
		event.preventDefault();

		onSaveData(datetime);
		setDatetime('');
	};

	return (
		<form
			className="flex flex-col justify-center items-center"
			onSubmit={submitHandler}
		>
			<input
				className="form-input px-5 py-2.5 mr-2 mb-4 rounded-md border border-gray-200 shadow-md"
				type={'datetime-local'}
				placeholder="Enter Date & Time"
				value={datetime}
				onChange={datetimeChangeHandler}
			/>
			<button
				className="text-white bg-sky-600 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 font-medium text-sm rounded-md px-5 py-2.5 text-center mb-4"
				type="submit"
			>
				Set Date & Time
			</button>
		</form>
	);
};

export default Form;
