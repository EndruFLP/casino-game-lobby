import type { MainSection } from '../types/main-section';
import type { ApiGameResponse } from '../types/game';
import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import './MainContent.css';

type MainContentProps = {
	activeSection: MainSection;
};

const RANDOM_GAMES_URL = '/api/v1/games/random?pageSize=40';

function MainContent({ activeSection }: MainContentProps) {
	const titles = {
		casino: 'Casino',
		sports: 'Sports',
		'live-casino': 'Live Casino',
	};
	const [games, setGames] = useState<ApiGameResponse['data']>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (activeSection !== 'casino') {
			return;
		}

		let cancelled = false;

		async function loadGames() {
			setIsLoading(true);
			setError(null);

			try {
				const response = await fetch(RANDOM_GAMES_URL);
				if (!response.ok) {
					throw new Error('Failed to load games!');
				}
				const json: ApiGameResponse = await response.json();

				if (!cancelled) {
					setGames(json.data);
				}
			} catch {
				if (!cancelled) {
					setError('Could not load games!');
				}
			} finally {
				if (!cancelled) {
					setIsLoading(false);
				}
			}
		}

		loadGames();

		return () => {
			cancelled = true;
		};
	}, [activeSection]);

	return (
		<main className="main-content">
			<h2>{titles[activeSection]}</h2>
			{activeSection === 'casino' && isLoading && <p>Loading games...</p>}
			{activeSection === 'casino' && error && <p>{error}</p>}
			{activeSection === 'casino' && !isLoading && !error && (
				<div className="game-grid">
					{games.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			)}
		</main>
	);
}

export default MainContent;
