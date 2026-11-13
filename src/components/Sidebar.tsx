import './Sidebar.css';
import wheelImage from '../assets/sidebar/wheel.jpg';
import tasksImage from '../assets/sidebar/tasks.jpg';
import { Search, House, Gem, Heart, Clock3, Cherry, Flame, Gamepad2, Crown, Gift, Trophy, Coins } from 'lucide-react';
import { SiGooglepay, SiApplepay, SiVisa } from 'react-icons/si';
import cryptoEventImage from '../assets/sidebar/crypto-event.jpg';

type SidebarProps = {
	isOpen: boolean;
};

function Sidebar({ isOpen }: SidebarProps) {
	return (
		<div className={`sidebar-shell ${isOpen ? '' : 'sidebar-shell--closed'}`}>
			<aside className={`sidebar ${isOpen ? '' : 'sidebar--closed'}`} aria-hidden={!isOpen} id="sidebar">
				<div className="sidebar-shortcuts">
					<button className="shortcut-card" type="button">
						<img src={wheelImage} alt="" />
						<span>Wheel</span>
					</button>
					<button className="shortcut-card" type="button">
						<img src={tasksImage} alt="" />
						<span>Tasks</span>
					</button>
				</div>

				<label className="sidebar-search">
					<Search size={14} />
					<input type="search" />
				</label>

				<nav className="sidebar-nav" aria-label="Lobby navigation">
					<button className="sidebar-nav-item" type="button">
						<House size={14} />
						<span>Lobby</span>
					</button>
					<button className="sidebar-nav-item" type="button">
						<Gem size={14} />
						<span>Providers</span>
					</button>
					<button className="sidebar-nav-item" type="button">
						<Heart size={14} />
						<span>Favorites</span>
						<span className="nav-badge">12</span>
					</button>
					<button className="sidebar-nav-item" type="button">
						<Clock3 size={14} />
						<span>Recent</span>
					</button>
				</nav>

				<section className="sidebar-section">
					<h2 className="sidebar-section-title">ALL SLOTS</h2>
					<nav className="slots-nav" aria-label="Slots filters">
						<button className="sidebar-nav-item" type="button">
							<Cherry size={16} />
							<span>All</span>
						</button>
						<button className="sidebar-nav-item" type="button">
							<Flame size={16} />
							<span>Popular</span>
						</button>
						<button className="sidebar-nav-item" type="button">
							<Gamepad2 size={16} />
							<span>New Games</span>
						</button>
						<button className="sidebar-nav-item" type="button">
							<Crown size={16} />
							<span>VIP</span>
						</button>
						<button className="sidebar-nav-item" type="button">
							<Gift size={16} />
							<span>Buyback Bonuses</span>
						</button>
						<button className="sidebar-nav-item" type="button">
							<Trophy size={16} />
							<span>Events</span>
						</button>
						<button className="sidebar-nav-item" type="button">
							<Coins size={16} />
							<span>Jackpot</span>
						</button>
					</nav>
				</section>

				<button className="crypto-promo" type="button">
					<img src={cryptoEventImage} alt="" />
					<span className="crypto-promo-text">
						<small>Crypto Event!</small>
						<strong>Open Now!</strong>
					</span>
				</button>

				<div className="payment-methods" aria-label="Supported payment methods">
					<SiGooglepay aria-label="Google Pay" />
					<SiApplepay aria-label="Apple Pay" />
					<SiVisa aria-label="Visa" />
				</div>
				<button className="buy-crypto-button" type="button">
					Buy Crypto
				</button>
			</aside>
		</div>
	);
}

export default Sidebar;
