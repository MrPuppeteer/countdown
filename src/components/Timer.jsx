import useTimer from '../utils/useTimer';
import Card from './Card';

const Timer = ({ deadline }) => {
	const timer = useTimer(deadline);
	const date = new Date(deadline);
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	};

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
				{timer.Seconds < 0 && (
					<h2 className="text-xl text-red-600 font-black mb-2">Times up!</h2>
				)}
				{timer.Seconds >= 0 &&
					Object.entries(timer).map(([key, value]) => {
						return <Card label={key} key={key} value={value} />;
					})}
			</div>
			{timer.Seconds >= 0 && (
				<p className="text-base sm:text-xl text-center font-normal mb-2">
					Time until{' '}
					<span className="text-sky-600">
						{date.toLocaleString('en-UK', options)}
					</span>
				</p>
			)}
		</>
	);
};

export default Timer;
