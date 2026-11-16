export type WalletId = 'btc' | 'eth' | 'usdt' | 'ltc' | 'sol';

export type Wallet = {
	id: WalletId;
	label: string;
	balance: number;
};
