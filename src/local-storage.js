export const LOCAL_STORAGE_KEY = 'combinations-store';

export function loadState () {
	try {
		const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
		const state = JSON.parse(serializedState);
		return state || undefined;
	} catch (err) {
		return undefined;
	}
}

export function saveState (state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(LOCAL_STORAGE_KEY, serializedState);
	} catch (err) {
		// Fail silently
	}
}
