import './CashModal.css';
import { X } from 'lucide-react';
import { useState } from 'react';
import { finalizeAmountOnBlur, normalizeAmountInput } from '../utils/normalize-amount';

type DepositModalProps = {
	onClose: () => void;
};

function DepositModal({ onClose }: DepositModalProps) {
	const [amount, setAmount] = useState('');

	return (
		<div className="cash-modal-backdrop" role="presentation">
			<div
				className="cash-modal"
				role="dialog"
				aria-modal="true"
				aria-labelledby="deposit-modal-title"
			>
				<div className="cash-modal-top">
					<h2 id="deposit-modal-title">Deposit</h2>
					<button
						className="cash-modal-close"
						type="button"
						onClick={onClose}
						aria-label="Close deposit"
					>
						<X size={18} />
					</button>
				</div>
				<div className="cash-modal-body">
					<p className="cash-modal-subtitle">Mock — no real payment is processed.</p>
					<div className="cash-modal-fields">
						<label className="cash-modal-field">
							<span className="cash-modal-label">Amount (USD)</span>
							<div className="cash-modal-amount-wrap">
								<span className="cash-modal-amount-prefix" aria-hidden>
									$
								</span>
								<input
									className="cash-modal-amount-input"
									type="text"
									inputMode="decimal"
									autoComplete="off"
									placeholder="0.00"
									value={amount}
									onChange={(event) => setAmount(normalizeAmountInput(event.target.value))}
									onBlur={() => setAmount(finalizeAmountOnBlur(amount))}
								/>
							</div>
						</label>
						<label className="cash-modal-field">
							<span className="cash-modal-label">Payment method</span>
							<input type="text" placeholder="Card, crypto, or bank transfer" />
						</label>
					</div>
					<button type="button" className="cash-modal-submit" onClick={onClose}>
						Confirm deposit
					</button>
				</div>
			</div>
		</div>
	);
}

export default DepositModal;