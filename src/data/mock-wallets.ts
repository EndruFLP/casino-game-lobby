import type { Wallet } from '../types/wallet';

export const mockWallets: Wallet[] = [
	{ id: 'btc', label: 'Bitcoin', balance: 12800 },
	{ id: 'eth', label: 'Ethereum', balance: 8420 },
	{ id: 'usdt', label: 'Tether', balance: 5200 },
	{ id: 'ltc', label: 'Litecoin', balance: 3100 },
	{ id: 'sol', label: 'Solana', balance: 2750 },
];
