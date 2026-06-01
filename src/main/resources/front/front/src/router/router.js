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
import ExamPaper from '../pages/exam/examPaper'
import Exam from '../pages/exam/exam'
import ExamList from '../pages/exam/examList'
import ExamRecord from '../pages/exam/examRecord'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import ziliaoleixingList from '../pages/ziliaoleixing/list'
import ziliaoleixingDetail from '../pages/ziliaoleixing/detail'
import ziliaoleixingAdd from '../pages/ziliaoleixing/add'
import kechengziliaoList from '../pages/kechengziliao/list'
import kechengziliaoDetail from '../pages/kechengziliao/detail'
import kechengziliaoAdd from '../pages/kechengziliao/add'
import kechengleixingList from '../pages/kechengleixing/list'
import kechengleixingDetail from '../pages/kechengleixing/detail'
import kechengleixingAdd from '../pages/kechengleixing/add'
import kechengxinxiList from '../pages/kechengxinxi/list'
import kechengxinxiDetail from '../pages/kechengxinxi/detail'
import kechengxinxiAdd from '../pages/kechengxinxi/add'
import kechengbaomingList from '../pages/kechengbaoming/list'
import kechengbaomingDetail from '../pages/kechengbaoming/detail'
import kechengbaomingAdd from '../pages/kechengbaoming/add'
import zuoyexinxiList from '../pages/zuoyexinxi/list'
import zuoyexinxiDetail from '../pages/zuoyexinxi/detail'
import zuoyexinxiAdd from '../pages/zuoyexinxi/add'
import zuoyetijiaoList from '../pages/zuoyetijiao/list'
import zuoyetijiaoDetail from '../pages/zuoyetijiao/detail'
import zuoyetijiaoAdd from '../pages/zuoyetijiao/add'
import chengjixinxiList from '../pages/chengjixinxi/list'
import chengjixinxiDetail from '../pages/chengjixinxi/detail'
import chengjixinxiAdd from '../pages/chengjixinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusskechengziliaoList from '../pages/discusskechengziliao/list'
import discusskechengziliaoDetail from '../pages/discusskechengziliao/detail'
import discusskechengziliaoAdd from '../pages/discusskechengziliao/add'
import discusskechengxinxiList from '../pages/discusskechengxinxi/list'
import discusskechengxinxiDetail from '../pages/discusskechengxinxi/detail'
import discusskechengxinxiAdd from '../pages/discusskechengxinxi/add'

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
					path: 'examPaper',
					component: ExamPaper
				},
				{
					path: 'examList',
					component:ExamList
				},
				{
					path: 'examRecord/:type',
					component:ExamRecord
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'ziliaoleixing',
					component: ziliaoleixingList
				},
				{
					path: 'ziliaoleixingDetail',
					component: ziliaoleixingDetail
				},
				{
					path: 'ziliaoleixingAdd',
					component: ziliaoleixingAdd
				},
				{
					path: 'kechengziliao',
					component: kechengziliaoList
				},
				{
					path: 'kechengziliaoDetail',
					component: kechengziliaoDetail
				},
				{
					path: 'kechengziliaoAdd',
					component: kechengziliaoAdd
				},
				{
					path: 'kechengleixing',
					component: kechengleixingList
				},
				{
					path: 'kechengleixingDetail',
					component: kechengleixingDetail
				},
				{
					path: 'kechengleixingAdd',
					component: kechengleixingAdd
				},
				{
					path: 'kechengxinxi',
					component: kechengxinxiList
				},
				{
					path: 'kechengxinxiDetail',
					component: kechengxinxiDetail
				},
				{
					path: 'kechengxinxiAdd',
					component: kechengxinxiAdd
				},
				{
					path: 'kechengbaoming',
					component: kechengbaomingList
				},
				{
					path: 'kechengbaomingDetail',
					component: kechengbaomingDetail
				},
				{
					path: 'kechengbaomingAdd',
					component: kechengbaomingAdd
				},
				{
					path: 'zuoyexinxi',
					component: zuoyexinxiList
				},
				{
					path: 'zuoyexinxiDetail',
					component: zuoyexinxiDetail
				},
				{
					path: 'zuoyexinxiAdd',
					component: zuoyexinxiAdd
				},
				{
					path: 'zuoyetijiao',
					component: zuoyetijiaoList
				},
				{
					path: 'zuoyetijiaoDetail',
					component: zuoyetijiaoDetail
				},
				{
					path: 'zuoyetijiaoAdd',
					component: zuoyetijiaoAdd
				},
				{
					path: 'chengjixinxi',
					component: chengjixinxiList
				},
				{
					path: 'chengjixinxiDetail',
					component: chengjixinxiDetail
				},
				{
					path: 'chengjixinxiAdd',
					component: chengjixinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusskechengziliao',
					component: discusskechengziliaoList
				},
				{
					path: 'discusskechengziliaoDetail',
					component: discusskechengziliaoDetail
				},
				{
					path: 'discusskechengziliaoAdd',
					component: discusskechengziliaoAdd
				},
				{
					path: 'discusskechengxinxi',
					component: discusskechengxinxiList
				},
				{
					path: 'discusskechengxinxiDetail',
					component: discusskechengxinxiDetail
				},
				{
					path: 'discusskechengxinxiAdd',
					component: discusskechengxinxiAdd
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
		{
			path: '/exam',
			component: Exam
		}
	]
})
