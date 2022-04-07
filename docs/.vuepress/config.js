/**
 * @Author       : Pancake
 * @Date         : 2022-04-05 19:20:15
 * @LastEditTime : 2022-04-08 00:28:51
 * @LastEditors  : Pancake
 * @FilePath     : \Pancake-Q\docs\.vuepress\config.js
 * @Description  : config 文件
 */
module.exports = {
	locales: {
		'/': {
			lang: 'zh-CN',
		},
	},
	head: [
		[
			'script', {}, `
			var _hmt = _hmt || [];
			(function() {
  		var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?01ad287e8bbb67b8be0849586a15ac4b";
  		var s = document.getElementsByTagName("script")[0]; 
  		s.parentNode.insertBefore(hm, s);
			})();       
			`
		]
	],
	title: 'Pancake-Q',
	description: 'Pancake-Q 知识沉淀',
	theme: 'reco',
	themeConfig: {
		subSidebar: 'auto',
		lastUpdated: '上次更新',
		nav: [
			{ text: '首页', link: '/' },
			{
				text: 'Pancake-Q',
				items: [
					{ text: 'Github', link: 'https://github.com/mqyqingfeng' },
					{
						text: '掘金',
						link: 'https://juejin.cn/user/712139234359182/posts',
					},
				],
			},
		],
	},
};
