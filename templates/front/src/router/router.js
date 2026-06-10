import VueRouter from 'vue-router'
//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Forum from '../pages/forum/list'
import ForumAdd from '../pages/forum/add'
import ForumDetail from '../pages/forum/detail'
import MyForumList from '../pages/forum/myForumList'
import Storeup from '../pages/storeup/list'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import gequleixingList from '../pages/gequleixing/list'
import gequleixingDetail from '../pages/gequleixing/detail'
import gequleixingAdd from '../pages/gequleixing/add'
import gequxinxiList from '../pages/gequxinxi/list'
import gequxinxiDetail from '../pages/gequxinxi/detail'
import gequxinxiAdd from '../pages/gequxinxi/add'
import gequpaixingbangList from '../pages/gequpaixingbang/list'
import gequpaixingbangDetail from '../pages/gequpaixingbang/detail'
import gequpaixingbangAdd from '../pages/gequpaixingbang/add'
import discussgequxinxiList from '../pages/discussgequxinxi/list'
import discussgequxinxiDetail from '../pages/discussgequxinxi/detail'
import discussgequxinxiAdd from '../pages/discussgequxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'forum',
					component: Forum
				},
				{
					path: 'forumAdd',
					component: ForumAdd
				},
				{
					path: 'forumDetail',
					component: ForumDetail
				},
				{
					path: 'myForumList',
					component: MyForumList
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'gequleixing',
					component: gequleixingList
				},
				{
					path: 'gequleixingDetail',
					component: gequleixingDetail
				},
				{
					path: 'gequleixingAdd',
					component: gequleixingAdd
				},
				{
					path: 'gequxinxi',
					component: gequxinxiList
				},
				{
					path: 'gequxinxiDetail',
					component: gequxinxiDetail
				},
				{
					path: 'gequxinxiAdd',
					component: gequxinxiAdd
				},
				{
					path: 'gequpaixingbang',
					component: gequpaixingbangList
				},
				{
					path: 'gequpaixingbangDetail',
					component: gequpaixingbangDetail
				},
				{
					path: 'gequpaixingbangAdd',
					component: gequpaixingbangAdd
				},
				{
					path: 'discussgequxinxi',
					component: discussgequxinxiList
				},
				{
					path: 'discussgequxinxiDetail',
					component: discussgequxinxiDetail
				},
				{
					path: 'discussgequxinxiAdd',
					component: discussgequxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
