/**
 * @Author       : Pancake
 * @Date         : 2022-04-05 19:20:15
 * @LastEditTime : 2022-04-07 17:50:14
 * @LastEditors  : Pancake
 * @FilePath     : \Pancake-Q\docs\.vuepress\config.js
 * @Description  : config 文件
 */
module.exports = {
	locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
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
