//- Created by hutber on 23/01/18.  */
export const formatMoney = function (money) {
	return `£${Number(money.toFixed(1)).toLocaleString()}`;
}
