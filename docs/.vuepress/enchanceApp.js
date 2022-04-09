/**
 * @Author       : Pancake
 * @Date         : 2022-04-05 22:57:53
 * @LastEditTime : 2022-04-09 12:46:15
 * @LastEditors  : Pancake
 * @FilePath     : \Pancake-Q\docs\.vuepress\enchanceApp.js
 * @Description  :
 */

 export default ({ router }) => { 
	router.beforeEach((to, from, next) => {
		if (typeof _hmt !== "undefined") {
			if (to.path) {
				_hmt.push(["_trackPageview", to.fullPath]);
			}
		}
		next();
	});
};