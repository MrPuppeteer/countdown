import { useState } from 'preact/hooks';

import Timer from './components/Timer';
import Form from './components/Form';

import '@fontsource/work-sans';

export function App() {
	const [deadline, setDeadline] = useState('');

	const addDeadlineHandler = datetime => {
		setDeadline(datetime);
	};

	return (
		<div className="font-workSans h-screen flex flex-col justify-center items-center">
			<h1 className="text-6xl font-extrabold border-b-4 border-sky-600 mb-6">
				Countdown
			</h1>
			{!deadline && <Form onSaveData={addDeadlineHandler} />}
			{deadline && <Timer deadline={deadline} />}
		</div>
	);
}
