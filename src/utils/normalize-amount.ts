export function normalizeAmountInput(raw: string) {
	let value = raw.replace(/,/g, '.').replace(/[^\d.]/g, '');
	const dot = value.indexOf('.');
	if (dot !== -1) {
		value = value.slice(0, dot + 1) + value.slice(dot + 1).replace(/\./g, '');
		if (value.length > dot + 3) {
			value = value.slice(0, dot + 3);
		}
	}
	return value;
}

export function finalizeAmountOnBlur(amount: string) {
	if (!amount) return '';
	const n = Number.parseFloat(amount);
	return Number.isFinite(n) ? n.toFixed(2) : amount;
}