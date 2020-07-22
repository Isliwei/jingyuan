<template>
  <div class="newsCenter">
    <div class="newsCenterImg">
      <div class="scrolling">
        <swiper :options="swiperOption" ref="mySwiper">
          <div
            class="swiper-slide"
            v-for="v in menu3"
            :key="v.index"
            :style="{backgroundImage: 'url(' + ip+'/'+v.imgUrl + ')'}"
          >
            <div class="newsImgMs">
              <div class="newsImgMst">
                <li>
                  <a
                    style="color:#FAFAFA;"
                    :href="'/content2#/content2?id='+m1+'&m2='+m2+'&m3='+v.id"
                  >{{v.title}}</a>
                </li>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="newsCenterTest">
      <ul v-for="v in menu3" :key="v.s">
        <li class="newsTestli">
          <router-link
            :to="{ name: 'NewsCenter', query:{ id:m1,m2:m2,m3:v.id} }"
            style="color:#000;"
          >{{v.title}}22</router-link>
        </li>
        <li class="newsDatali">
          <router-link
            :to="{ name: 'NewsCenter', query:{ id:m1,m2:m2,m3:v.id} }"
            style="color:#000;"
          >{{v.inPutTime.toString().substring(0,10)}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ajaxSpringBeanCommonFunction } from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      ip: ip.ip,
      menu3: [],
      m1: "8abe94755f281266015f283cc9910002",
      m2: "8abe94755f56398f015f564a731a0001",
      //轮播配置
      swiperOption: {
        pagination: { el: ".swiper-pagination" },
        //loop:true使轮播图循环轮播
        loop: true,
        autoplay: false,
        speed: 2000,
      },
    }
  },
  created () {
    this.menu3 = this.$parent.getMenu3(this.m2, 1, 7);
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>


<style scoped>
.newsCenter {
  width: 48%;
  height: 480px;
  flex-direction: column;
  margin-right: 2%;
}
.newsCenterImg {
  width: 100%;
  height: 480px;
}
.newsImgMst {
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  position: relative;
  top: 358px;
  z-index: 2;
}

.newsCenterImg li {
  text-align: left;
  color: aliceblue;
  font-size: 14px;
}
.newsCenterTest {
  color: #121212;
  font-size: 16px;
  width: 96%;
  flex-direction: row;
  position: relative;
  bottom: 130px;
}
.newsTestli {
  width: 65%;
  float: left;
  font-size: 16px;
  color: #121212;
  text-align: left;
  padding-left: 15px;
  line-height: 30px;
  position: relative;
  top: 35px;
}
.newsDatali {
  width: 30%;
  color: #a0a0a0;
  text-align: right;
  padding-right: 10px;
  display: inline-block;
  line-height: 30px;
  position: relative;
  top: 35px;
}
.scrolling {
  width: 100%;
  height: 390px;
}
.swiper-container {
  width: 100%;
  height: 390px;
}
.swiper-slide {
  background-size: 100%;
  background-repeat: no-repeat;
}
.imgLbt {
  width: 100%;
  min-width: 1440px;
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
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal.swiper-pagination-bullets {
  bottom: 13px;
  left: 570px;
  z-index: 10;
  opacity: 1;
  width: 20%;
}
.swiper-pagination-bullet {
  width: 15px !important;
  height: 15px !important;
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
