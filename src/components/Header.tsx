import './Header.css';
import { Spade, RugbyBall, PlayingCardsFan, ArrowUpFromLine, Landmark } from 'lucide-react';
import NotificationsMenu from './NotificationsMenu';
import giftImage from '../assets/giftBox.png';
import avatarImage from '../assets/avatar.png';
import logoImage from '../assets/logo.png';
import type { MainSection } from '../types/main-section';
import WalletMenu from './WalletMenu';

type HeaderProps = {
	isSidebarOpen: boolean;
	onMenuClick: () => void;
	activeSection: MainSection;
	onSectionChange: (section: MainSection) => void;
};

function Header({ isSidebarOpen, onMenuClick, activeSection, onSectionChange }: HeaderProps) {
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
				<button
					className={`nav-pill ${activeSection === 'casino' ? 'active' : ''} `}
					type="button"
					onClick={() => onSectionChange('casino')}
				>
					<Spade size={16} />
					Casino
				</button>
				<button
					className={`nav-pill ${activeSection === 'sports' ? 'active' : ''} `}
					type="button"
					onClick={() => onSectionChange('sports')}
				>
					<RugbyBall size={16} />
					Sports
				</button>
				<button
					className={`nav-pill ${activeSection === 'live-casino' ? 'active' : ''} `}
					type="button"
					onClick={() => onSectionChange('live-casino')}
				>
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
				<WalletMenu />

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
