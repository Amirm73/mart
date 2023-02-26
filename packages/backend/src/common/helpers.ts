export function removeEmptyProperties(obj) {
	debugger;
	return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
}