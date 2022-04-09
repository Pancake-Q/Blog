/**
 * @Author       : Pancake
 * @Date         : 2022-04-05 19:20:15
 * @LastEditTime : 2022-04-09 20:41:26
 * @LastEditors  : Pancake
 * @FilePath     : \Pancake-Q\docs\.vuepress\config.js
 * @Description  : config 文件
 */
module.exports = {
	title: 'Pancake-Q',
	description: 'Pancake-Q 知识沉淀',
	// theme: 'reco',
	theme: 'reco',
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
	themeConfig: {
		subSidebar: 'auto',
		lastUpdated: '上次更新',
		vssueConfig: {
      platform: 'github',
      owner: 'Pancake-Q',
      repo: 'Pancake-Q.github.io',
      clientId: 'ca40fc8bfef71c29d4f9',
      clientSecret: 'c7d4884b4b19ef95c9b4ea891fb9e546dc295c31'
   },
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
	plugins: {
    // '@vssue/vuepress-plugin-vssue': {
    //   platform: 'github',
    //   owner: 'Pancake-Q',
    //   repo: 'Pancake-Q.github.io',
    //   clientId: 'ca40fc8bfef71c29d4f9',
    //   clientSecret: 'c7d4884b4b19ef95c9b4ea891fb9e546dc295c31',
    // },
  },
};
