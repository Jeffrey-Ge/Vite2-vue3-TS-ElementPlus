import mitt from 'mitt'
import 'virtual:svg-icons-register' // Register icon sprite
import { createApp } from 'vue'
import App from './App.vue'
import { setupGlobalCom } from './components/index'
import { setupElementPlus } from './libs/element' // element UI
import router, { setupRouter } from './router' // 路由
import { setupStore } from './store' // 状态管理
import { setupDirectives } from './directives' // 状态管理

import './styles/index.scss'

const app = createApp(App)

setupRouter(app) // 引入路由

setupStore(app) // 引入状态管理

setupDirectives(app) // 自定义指令

setupElementPlus(app) // 引入element组件

setupGlobalCom(app) // 注册全局公用组件

app.config.globalProperties.mittBus = mitt()

// console.log('elementPlus---',elementPlus);

router.isReady().then(() => {
  app.mount('#app')
})
