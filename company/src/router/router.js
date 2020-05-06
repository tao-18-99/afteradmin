import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
	routes: [
		// 动态路径参数 以冒号开头
		{
			path: '*',
			redirect: '/login',
			meta: {
				title: '首页'
			}
		},
		{
			path: '/login',
			component:()=>import('../views/Login/login'),
			name: 'login',
			meta: {
				title: '登录'
			}
		},
		{
			path: '/shaozi',
			component:()=>import('../views/index'),
			name: 'shaozi',
			meta: {
				title: '我的工作台'
			},
			children: [
				{
					path: 'news',
					component:()=>import('../views/Personal/news'),
					name: 'news',
					meta: {
						title: '我的消息'
					}
				},
				{
					path: 'home',
					component:()=>import('../views/Personal/home'),
					name: 'home',
					meta: {
						title: '个人主页'
					}
				},
				{
					path: 'data',
					component:()=>import('../views/Personal/data'),
					name: 'data',
					meta: {
						title: '我的资料'
					}
				},
				{
					path: 'security',
					component:()=>import('../views/Personal/set'),
					name: 'set',
					meta: {
						title: '安全设置'
					}
				},
				{
					path: 'information',
					component:()=>import('../views/Administration/information'),
					name: 'information',
					meta: {
						title: '企业信息'
					}
				},
				{
					path: 'member',
					component:()=>import('../views/Administration/member'),
					name: 'member',
					meta: {
						title: '分组成员'
					}
				},
				{
					path: 'Grouping',
					component:()=>import('../views/Lesson/Grouping'),
					name: 'Grouping',
					meta: {
						title: '课程分类'
					}
				},
				{
					path: 'lesson',
					component:()=>import('../views/Lesson/lesson'),
					name: 'lesson',
					meta: {
						title: '企业课'
					}
				},
				{
					path: 'task',
					component:()=>import('../views/Report/task'),
					name: 'task',
					meta: {
						title: '任务列表'
					}
				},
				{
					path: 'memberData',
					component:()=>import('../views/Report/memberData'),
					name: 'memberData',
					meta: {
						title: '成员数据'
					}
				},
				{
					path: 'GroupingData',
					component:()=>import('../views/Report/GroupingData'),
					name: 'GroupingData',
					meta: {
						title: '分组数据'
					}
				}
			]
		},
	],
	mode: 'history',
});
router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
})
export default router;
