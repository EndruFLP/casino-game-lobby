import './Header.css';
import { Spade, RugbyBall, PlayingCardsFan } from 'lucide-react';
import giftImage from '../assets/giftBox.png';

function Header() {
	return (
		<header className="header">
			<button className="icon-button" type="button">
				☰
			</button>
			<h1>EndruBet</h1>
			<nav className="main-nav">
				<button className="nav-pill  active" type="button">
					<Spade size={16} />
					Casino
				</button>
				<button className="nav-pill" type="button">
					<RugbyBall size={16} />
					Sports
				</button>
				<button className="nav-pill" type="button">
					<PlayingCardsFan size={16} />
					Live Casino
				</button>
			</nav>

			<div className="bonus">
				<img src={giftImage} alt="" className="bonus-gift" />
				<div className="bonus-text">
					<strong>Claim Bonus</strong>
					<span>02 : 38 : 04</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
