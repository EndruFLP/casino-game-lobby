import './WalletMenu.css';
import { ChevronDown } from 'lucide-react';
import { SiBitcoin, SiEthereum, SiTether, SiLitecoin, SiSolana } from 'react-icons/si';
import type { Wallet, WalletId } from '../types/wallet';
import type { IconType } from 'react-icons';
import { useState } from 'react';
import { mockWallets } from '../data/mock-wallets';

const walletIcons: Record<WalletId, IconType> = {
	btc: SiBitcoin,
	eth: SiEthereum,
	usdt: SiTether,
	ltc: SiLitecoin,
	sol: SiSolana,
};

function formatBallance(value: number) {
	return `${value.toLocaleString('en-US')}`;
}

function WalletMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedWallet, setSelectedWallet] = useState<Wallet>(mockWallets[0]);

	const SelectedIcon = walletIcons[selectedWallet.id];

	function toggleMenu() {
		setIsOpen((current) => !current);
	}
	function selectWallet(wallet: Wallet) {
		setSelectedWallet(wallet);
		setIsOpen(false);
	}

	return (
		<div className="wallet-menu">
			<button
				className="wallet-selector"
				type="button"
				onClick={toggleMenu}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				<span className={`wallet-icon wallet-icon--${selectedWallet.id}`}>
					<SelectedIcon size={16} />
				</span>
				<span>{formatBallance(selectedWallet.balance)}</span>
				<ChevronDown size={12} className={isOpen ? 'wallet-chevron wallet-chevron--open' : 'wallet-chevron'} />
			</button>

			{isOpen && (
				<ul className="wallet-panel" role="listbox">
					{mockWallets.map((wallet) => {
						const Icon = walletIcons[wallet.id];

						return (
							<li key={wallet.id}>
								<button
									className="wallet-option"
									type="button"
									role="option"
									aria-selected={wallet.id === selectedWallet.id}
									onClick={() => selectWallet(wallet)}
								>
									<span className={`wallet-icon wallet-icon--${wallet.id}`}>
										<Icon size={16} />
									</span>
									<span className="wallet-option-label">{wallet.label}</span>
									<span className="wallet-option-balance">{formatBallance(wallet.balance)}</span>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default WalletMenu;
