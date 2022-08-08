import Timer from './components/Timer';
import '@fontsource/work-sans';

export function App() {
	return (
		<div className="font-workSans h-screen flex flex-col justify-center items-center">
			<h1 className="text-6xl font-extrabold border-b-4 border-sky-600 mb-6">
				Countdown
			</h1>
			<Timer deadline="2022-08-08 09:30:00 GMT+07:00" />
		</div>
	);
}
