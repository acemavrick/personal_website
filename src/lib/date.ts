const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2025-09" -> "Sep 2025" */
const label = (month: string) => {
	const [year, m] = month.split('-');
	return `${MONTHS[Number(m) - 1]} ${year}`;
};

/** no `to` means a single month, not an open-ended range */
export function formatRange(date?: { from: string; to?: string }): string | undefined {
	if (!date) return undefined;
	if (!date.to || date.to === date.from) return label(date.from);

	const [fromYear] = date.from.split('-');
	const [toYear] = date.to.split('-');
	// "Sep – Dec 2025" rather than repeating the year
	if (fromYear === toYear) {
		const [, m] = date.from.split('-');
		return `${MONTHS[Number(m) - 1]} – ${label(date.to)}`;
	}
	return `${label(date.from)} – ${label(date.to)}`;
}
