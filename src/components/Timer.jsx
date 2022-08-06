import useTimer from '../utils/useTimer';
import Card from './Card';

const Timer = ({ deadline }) => {
	const timer = useTimer(deadline);

	return (
		<>
			<div className="flex flex-row justify-center items-center gap-4 mb-4">
				{timer.Seconds < 0 && <h1>Times up!</h1>}
				{timer.Seconds >= 0 &&
					Object.entries(timer).map(([key, value]) => {
						return <Card label={key} key={key} value={value} />;
					})}
			</div>
			<p className="text-xl font-normal mb-6">
				Time until {new Date(deadline).toDateString()}
			</p>
		</>
	);
};

export default Timer;
