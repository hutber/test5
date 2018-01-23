export const START_CALL = 'START_CALL';
export const FINISHED_CALL = 'FINISHED_CALL';

export function getClothes() {
	return {
		type: START_CALL,
		inApiCall: true
	}
}

export function resolvedGetClothes(data) {
	return {
		type: FINISHED_CALL,
		data: data
	}
}
