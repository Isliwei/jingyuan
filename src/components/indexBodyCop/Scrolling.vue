<template>
  <div class="scrolling">
    <swiper :options="swiperOption" ref="mySwiper">
      <div
        class="swiper-slide swiper-slide2"
        v-for="item in url"
        :key="item.id"
        :style="{backgroundImage: 'url(' + item + ')'}"
      ></div>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>-->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <!--<div class="">
			<p v-for="item in url" >{{item}}</p>
    </div>-->
    <!-- </div> -->
  </div>
</template>

<script>
import { ajaxSpringBeanCommonFunction } from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  name: 'mySwiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      //轮播配置
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        //loop:true使轮播图循环轮播
        loop: true,
        autoplay: true,
        speed: 2000,
      },
      url: [],
      json: {},

      burl: ip.ip + "/Carousel/getDataList",
      params: { 'newsClassID': '', 'zt': '1' },
    }
  },
  created () {
    this.postData()
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    //请求数据
    postData () {
      this.json = ajaxSpringBeanCommonFunction(this.burl, this.params);
      var sr = JSON.stringify(ip);
      for (var i = 0; i < this.json.rows.length; i++) {
        this.url[i] = ip.ip + "/" + this.json.rows[i].imgUrl;
        // console.log(this.json)
      }

      // console.log(ip.ip + this.json.rows[0].imgUrl);
      // 'http://10.62.28.218:8080/'

    },
  },

}
</script>

<style scoped>
.scrolling {
  width: 100%;
  min-width: 1470px;
  height: 530px;
}
.swiper-container {
  width: 100%;
  min-width: 1440px;
  height: 530px;
}
.swiper-slide {
  background-size: 100%;
  background-repeat: no-repeat;
}
.imgLbt {
  width: 100%;
  min-width: 1440px;
  height: 530px;
}
.scrollingAn {
  float: left;
  margin: 10px;
  position: relative;
  top: 230px;
  opacity: 0.3;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  font-size: 3em;
}
.scrollingAn:hover {
  opacity: 1;
  cursor: pointer;
}
.swiper-pagination-bullet {
  width: 25px;
  height: 4px;
}
img {
  opacity: 1;
  height: 33px;
  width: 28px;
  margin: auto;
  position: relative;
  bottom: 2px;
}
</style>
