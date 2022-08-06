import useTimer from '../utils/useTimer';
import Card from './Card';

const Timer = ({ deadline }) => {
	const timer = useTimer(deadline);
	const date = new Date(deadline);

	return (
		<>
			<div className="flex flex-row justify-center items-center gap-4 mb-4">
				{timer.Seconds < 0 && (
					<h1 className="text-xl text-red-600 font-black mb-2">Times up!</h1>
				)}
				{timer.Seconds >= 0 &&
					Object.entries(timer).map(([key, value]) => {
						return <Card label={key} key={key} value={value} />;
					})}
			</div>
			{timer.Seconds >= 0 && (
				<p className="text-xl font-normal mb-2">
					Time until <span className="text-sky-600">{date.toDateString()}</span>
				</p>
			)}
		</>
	);
};

export default Timer;
