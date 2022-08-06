import { useState, useEffect } from 'preact/hooks';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const useTimer = deadline => {
	const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());

	useEffect(() => {
		const intervalId = setInterval(
			() => setTimespan(new Date(deadline) - Date.now()),
			1000
		);

		return () => clearInterval(intervalId);
	}, [deadline]);

	return {
		Days: Math.floor(timespan / DAY),
		Hours: Math.floor((timespan / HOUR) % 24),
		Minutes: Math.floor((timespan / MINUTE) % 60),
		Seconds: Math.floor((timespan / SECOND) % 60),
	};
};

export default useTimer;
