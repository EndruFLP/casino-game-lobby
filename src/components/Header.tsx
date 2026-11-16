import './Header.css';
import { Spade, RugbyBall, PlayingCardsFan, ArrowUpFromLine, Landmark } from 'lucide-react';
import NotificationsMenu from './NotificationsMenu';
import giftImage from '../assets/giftBox.png';
import avatarImage from '../assets/avatar.png';
import logoImage from '../assets/logo.png';
import type { MainSection } from '../types/main-section';
import WalletMenu from './WalletMenu';
import BonusCountdown from './BonusCountdown';

type HeaderProps = {
	isSidebarOpen: boolean;
	onMenuClick: () => void;
	activeSection: MainSection;
	onSectionChange: (section: MainSection) => void;
	onOpenWithdraw: () => void;
	onOpenDeposit: () => void;
};

function Header({
	isSidebarOpen,
	onMenuClick,
	activeSection,
	onSectionChange,
	onOpenWithdraw,
	onOpenDeposit,
}: HeaderProps) {
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
				<div className="bonus-gift-wrap">
					<span className="bonus-gift-glow" aria-hidden="true" />
					<img src={giftImage} alt="" className="bonus-gift" />
				</div>
				<div className="bonus-text">
					<strong>Claim Bonus</strong>
					<BonusCountdown />
				</div>
			</div>

			<div className="header-actions">
				<WalletMenu />

				<button className="header-action-button withdraw-button" type="button" onClick={onOpenWithdraw}>
					<ArrowUpFromLine size={16} />
					Withdraw
				</button>

				<button className="header-action-button deposit-button" type="button" onClick={onOpenDeposit}>
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
