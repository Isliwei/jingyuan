// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResourse from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResourse);

//引入公共JS
import jquery from "./assets/js/jquery-2.1.1.min"
Vue.prototype.jquery = jquery
Vue.config.proautionTip = false

import util from "./assets/js/util"
Vue.prototype.util = util
Vue.config.proautionTip = false


//全局组件
import Sidebar from './components/publicCop/Sidebar'
Vue.component('my-Sidebar',Sidebar)

import GroupData from './components/GroupBodyCop/GroupData'
Vue.component('my-Jy',GroupData)

import GroupXcp from './components/GroupBodyCop/GroupXcp'
Vue.component('my-Xcp',GroupXcp)

import menu2 from './components/publicCop/menu2'
Vue.component('menu2',menu2)

import menu3 from './components/publicCop/menu3'
Vue.component('menu3',menu3)

import menu3_1 from './components/publicCop/menu3_1'
Vue.component('menu3_1',menu3_1)

import content1 from './components/publicCop/content1'
Vue.component('content1',content1)

import content2 from './components/publicCop/content2'
Vue.component('content2',content2)

import InKfCop from './components/InBodyCop/InKfCop'
Vue.component('InKfCop',InKfCop)

import InXqCop from './components/InBodyCop/InXqCop'
Vue.component('InXqCop',InXqCop)

import pagebar from './components/publicCop/Fy'
Vue.component('page-bar',pagebar)

import Map from './components/publicCop/map'
Vue.component('Map',Map)

//轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
//视频播放控件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)


// require('videojs-contrib-hls/dist/videojs-contrib-hls');
// Vue.use(require)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
