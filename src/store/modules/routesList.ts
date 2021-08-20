import { RootStateTypes, RoutesListState } from 'store/interface/index';
import { Module } from 'vuex';
import { AppRouteRecordRaw } from '../interface/index';
const routesListModule: Module<RoutesListState, RootStateTypes> = {
	namespaced: true,
	state: {
		routesList: [
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'el-icon-house ',
          isAffix: true,
          isHide: false,
          isKeepAlive: true,
          title: '首页',
          index: '1'
        },
        name: 'home',
        path: '/home'
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'el-icon-ice-cream-round',
          isAffix: false,
          isHide: false,
          isKeepAlive: true,
          title: 'demo',
          index: '2'
        },
        name: 'demo',
        path: '/demo'
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'el-icon-menu',
          isAffix: false,
          isHide: false,
          isKeepAlive: true,
          title: 'svg-icon',
          index: '3'
        },
        name: 'svgIcon',
        path: '/svgIcon'
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'el-icon-s-grid',
          isAffix: false,
          isHide: false,
          isKeepAlive: true,
          title: 'element-icon',
          index: '4'
        },
        name: 'elementIcon',
        path: '/elementIcon'
      }
    ],
	},
	mutations: {
		// 设置路由，菜单中使用到
		getRoutesList(state: any, data: Array<AppRouteRecordRaw>) {
			state.routesList = data;
		},
	},
	actions: {
		// 设置路由，菜单中使用到
		async setRoutesList({ commit }, data:Array<AppRouteRecordRaw>) {
			commit('getRoutesList', data);
		},
	},
};

export default routesListModule;
