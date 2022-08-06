const Card = ({ label, value }) => {
	return (
		<div className="p-6 w-36 flex flex-col justify-center items-center rounded-lg border border-gray-200 shadow-md">
			<div
				className={
					'mb-2 text-2xl font-bold tracking-tight' +
					(label === 'Seconds' && value <= 10
						? ' text-red-600'
						: ' text-gray-900')
				}
			>
				{value}
			</div>
			<div className="font-normal text-gray-700">
				{value > 1 && label}
				{value <= 1 && label.slice(0, -1)}
			</div>
		</div>
	);
};

export default Card;
