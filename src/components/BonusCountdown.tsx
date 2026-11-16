import { useEffect, useState } from 'react';

const INITIAL_SECONDS = 2 * 3600 + 38 * 60 + 4;

function formatCountdown(totalSeconds: number) {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	return [hours, minutes, seconds].map((part) => String(part).padStart(2, '0')).join(' : ');
}

function BonusCountdown() {
	const [secondsLeft, setSecondsLeft] = useState(INITIAL_SECONDS);

	useEffect(() => {
		const intervalId = window.setInterval(() => {
			setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);

		return () => window.clearInterval(intervalId);
	}, []);

	return <span className="bonus-timer">{formatCountdown(secondsLeft)}</span>;
}

export default BonusCountdown;
