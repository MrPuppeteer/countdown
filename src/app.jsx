import Timer from './components/Timer';
import '@fontsource/work-sans';

export function App() {
	return (
		<div className="font-workSans h-screen flex flex-col justify-center items-center">
			<h1 className="text-6xl font-extrabold mb-6">Countdown</h1>
			<Timer deadline="2022-08-07" />
		</div>
	);
}
