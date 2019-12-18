<template>
  <div class="newsCenter">
     <ul v-for="v in menu2" :key="v.i" >
      <li>{{v.ClassName}}</li>
      <li><a style="float:right;margin-top:-2px;font-size:16px;color: #A0A0A0;" :href="'/news#/news?id='+m1+'&m2='+m2+'&m3='+m2" >查看更多</a></li>
    </ul>
    <div class="newsCenterImg">

        <div class="scrolling">
    
         <swiper :options="swiperOption" ref="mySwiper">
 
         <div class="swiper-slide" v-for="v in menu3" :key="v.index" :style="{backgroundImage: 'url(' + ip+'/'+v.imgUrl + ')'}">
          <div class="newsImgMs">
              <div class="newsImgMst">
                <li>
                  <a style="color:#FAFAFA;" :href="'/content2#/content2?id='+m1+'&m2='+m2+'&m3='+v.id">{{v.title}}</a>
                </li>
              </div>
          </div>
         </div>


         <div class="swiper-pagination"  slot="pagination"></div>
         
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
         </swiper>

<!-- </div> -->
        </div>


    </div>

  </div>
</template>
<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components:{
    swiper,
    swiperSlide
  }, 
  data(){
    return{
      ip:ip.ip,
      menu3: [],
      m1:"8abe94755f281266015f283c72a30001",
      m2:"8abe94755ffc68f4015ffc7051b70001",
      //轮播配置
      swiperOption: {
          pagination:{el:".swiper-pagination"},
			    //loop:true使轮播图循环轮播
		     	loop:true,
		    	autoplay:true,
		    	speed:2000,
      },
      
    }
  },
  created(){
    this.menu2 = this.$parent.getMenu2("8abe94755f281266015f283c72a30001");
    this.menu3 = this.$parent.getMenu3(this.m2,1,7);
    this.newmenu2()
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  methods:{
    newmenu2(){
       this.menu2 = this.menu2.slice(0,1)
    }
     
  },
}
</script>


<style scoped>
ul{
  height: 45px;
  line-height: 40px;
  border-bottom: 5px solid rgb(245,245,245);
  margin-bottom: 20px;
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  padding-left: 5px;
}
ul li:nth-child(1){
  position: relative;
  float: left;
  top: 5px;
  right: 5px;
  width: 90px;
  line-height: 40px;
  border-bottom: 5px solid rgb(174,19,47);
}
ul li:nth-child(2){
  position: relative;
  top: 10px;
  color: #A0A0A0;
  font-size: 16px;
  float: right;
  text-align: right;
}
.newsCenter{
  width: 100%;
  height: 440px;
  flex-direction:column;
  position: relative;
}
.newsCenterImg{
  width: 100%;
  height: 420px;
}
.newsImgMst{
  display: flex;
  background-color:rgba(0, 0, 0, 0.5);
  padding: 15px;
  position: relative;
  top: 373px;
  z-index: 2;
}
.newsCenterImg li{
  display: inline-block;
  text-align: left;
  color: aliceblue;
  font-size: 14px;
  flex: 6;
}
.newsCenterTest{
  color: #121212;
  font-size: 16px;
  width: 100%;
  flex-direction:row;
  position: relative;
  bottom: 110px; 
}
.newsTestli{
  width: 65%;
  float: left;
  font-size: 16px;
  color: #121212;
  text-align: left;
  padding-left: 20px;
  line-height: 30px;
}
.newsDatali{
  width: 30%;
  color: #A0A0A0;
  text-align: right;
  padding-right: 10px;
  display: inline-block;
  line-height: 30px;
}
/* li{
  width: 50%;
} */

.scrolling{
  width: 100%;

  height: 420px;
}
.swiper-container {
  width: 100%;

  height: 420px;
}
.swiper-slide{
  background-size: 100%;
  background-repeat:no-repeat;
}
.imgLbt{
  width: 100%;
  min-width: 1440px;
}
.scrollingAn{
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
.scrollingAn:hover{
  opacity: 1;
  cursor:pointer;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 14px;
  left: 720px;
  z-index: 998;
  opacity: 999;
  width: 20%;
}
.swiper-pagination-bullet{
    width: 15px !important;
    height: 15px !important;
}
img{
  opacity: 1;
  height: 33px;
  width: 28px;
  margin: auto;
  position: relative;
  bottom: 2px;
}
</style>
