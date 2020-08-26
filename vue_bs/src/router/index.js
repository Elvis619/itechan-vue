import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from "../views/Home";
import App from '../App'
import UserList from "../views/user/UserList";
import UserAdd from "../views/user/UserAdd";
import UserEdit from "../views/user/UserEdit";
import GoodsList from "../views/goods/GoodsList";
import GoodsAdd from "../views/goods/GoodsAdd";
import GoodsEdit from "../views/goods/GoodsEdit";
import Order from "../views/order/Order";
import fa from "element-ui/src/locale/lang/fa";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {name : "Login"}
  },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/home',
      name: 'Home',
      component: App,
      children:[
        {
          path: 'user',
          name: '用户管理',
          component: Home,
          icon:'el-icon-user-solid' ,
          children:[
            {
              path: '/userList',
              name: '用户列表',
              component: UserList,
            },
            {
              path: '/userEdit',
              name: '修改用户',
              show: false,
              component: UserEdit,
            },
            {
              path: '/userAdd',
              name: '添加用户',
              component: UserAdd,
            }
          ]
        },{
          path: 'home',
          name: '商品管理',
          component: Home,
          icon: 'el-icon-s-goods',
          children:[
            {
              path: '/goodsList',
              name: '商品列表',
              component: GoodsList
            },{
              path: '/goodsAdd',
              name: '添加商品',
              component: GoodsAdd
            },
            {
              path: '/goodsEdit',
              name: '修改商品',
              component: GoodsEdit
            }

          ]
        },{
          path: 'home',
          name: '订单管理',
          component: Home,
          icon: 'el-icon-s-order',
          children:[
            {
              path: '/order',
              name: '订单详情',
              component: Order,
            }
          ]
        },{
          path: 'home',
          name: '数据统计',
          component: Home,
          icon: 'el-icon-data-analysis',
          children:[
            {
              path: 'home',
              name: '用户列表',
              component: Home,
            }
          ]
        },
      ]
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
