import { createSelector } from 'reselect';

//- Created by hutber on 23/01/18.  */
const clothesSelector = state => state.clothesAPI.clothes;
const currentItemOfClothingSelector = state => state.clothes;

const getClothes = (clothes, currentItemOfClothingIds) => {
	return clothes.filter(item => {
		const clothIds = Object.keys(currentItemOfClothingIds);
		return clothIds.length > 0 ? clothIds.includes(item.code) : false;
	});
}

export default createSelector(
	clothesSelector,
	currentItemOfClothingSelector,
	getClothes
)
