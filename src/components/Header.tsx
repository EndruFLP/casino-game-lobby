import './Header.css';
import { Spade, RugbyBall, PlayingCardsFan, Bitcoin, ChevronDown, ArrowUpFromLine, Landmark } from 'lucide-react';
import NotificationsMenu from './NotificationsMenu';
import giftImage from '../assets/giftBox.png';
import avatarImage from '../assets/avatar.png';
import logoImage from '../assets/logo.png';

type HeaderProps = {
	isSidebarOpen: boolean;
	onMenuClick: () => void;
};

function Header({ isSidebarOpen, onMenuClick }: HeaderProps) {
	return (
		<header className="header">
			<button
				className="icon-button"
				type="button"
				onClick={onMenuClick}
				aria-label="Toggle sidebar"
				aria-controls="sidebar"
				aria-expanded={isSidebarOpen}
			>
				☰
			</button>
			<h1 className="brand">
				<img className="brand-logo" src={logoImage} alt="EndruBet" />
			</h1>
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

			<div className="header-actions">
				<button className="wallet-selector" type="button" aria-haspopup="listbox" aria-expanded="false">
					<Bitcoin size={16} />
					<span>$12,800</span>
					<ChevronDown size={12} />
				</button>

				<button className="header-action-button" type="button">
					<ArrowUpFromLine size={16} />
					Withdraw
				</button>

				<button className="header-action-button deposit-button" type="button">
					<Landmark size={16} />
					Deposit
				</button>

				<button className="profile-button" type="button" aria-label="Open profile">
					<img className="profile-avatar" src={avatarImage} alt="" />
				</button>

				<NotificationsMenu />
			</div>
		</header>
	);
}

export default Header;
