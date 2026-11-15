import type { ApiGame } from '../types/game';
import './GameCard.css';

type GameCardProps = {
	game: ApiGame;
};

function getThumbnailUrl(game: ApiGame): string | undefined {
	const portrait = game.images.find((img) => img.type === 'THUMBNAIL_PORTRAIT');
	const thumb = game.images.find((img) => img.type === 'THUMBNAIL');
	return portrait?.url ?? thumb?.url ?? game.images[0]?.url;
}

function GameCard({ game }: GameCardProps) {
	const thumbnailUrl = getThumbnailUrl(game);
	const providerName = game.providers[0]?.providerName ?? 'Unknown';
	return (
		<article className="game-card">
			<div className="game-card-media">
				{thumbnailUrl ? (
					<img src={thumbnailUrl} alt={game.gameName} loading="lazy" />
				) : (
					<div className="game-card-placeholder">No Image</div>
				)}
				<div className="game-card-overlay">
					<h3>{game.gameName}</h3>
					<p>{providerName}</p>
				</div>
			</div>
		</article>
	);
}

export default GameCard;
