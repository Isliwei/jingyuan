<template>
  <div class="Company">
    <div class="CompanyBt">
      <p class="CnPbt">入驻企业</p>
      <p class="EgPbt" style="top:-10px;">SHI XIN WEN CHUANG</p>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <div class="swiper-slide" v-for="v in menu3" :key="v.i">
        <router-link
          class="Cnpbta"
          style="color: aliceblue;"
          :to="{ name: 'content2', query: { id: m1, m2: m2, m3: v.id } }"
        >
          <div
            class="CompanyTxO"
            :style="{ backgroundImage: 'url(' + ip + '/' + v.imgUrl + ')' }"
            @mouseover="selectStyle(v.id)"
            @mouseleave="cancelStyle"
          >
            <p
              style="line-height:56px;"
              :class="['CnPbt', isHover === v.id ? 'hoverShow' : 'hoverHide']"
            >
              {{ v.title }}
            </p>
            <li :class="[isHover === v.id ? 'hoverShow' : 'hoverHide']">
              {{ v.describez }}
            </li>
          </div>
        </router-link>
      </div>
    </swiper>
  </div>
</template>
<script>
import ip from "../../assets/js/api.js";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      isHover: "",
      //轮播配置
      swiperOption: {
        pagination: { el: ".swiper-pagination4" },
        //loop:true使轮播图循环轮播
        freeMode: true,
        loop: true,
        autoplay: false,
        speed: 500,
        slidesPerView: 3,
        centeredSlides: true
      },
      ip: ip.ip,
      menu3: [],
      m1: "8abe94755f7ad21b015f7ada53ed0001",
      m2: "8abe94755ffc68f4015ffc76f2ff0004"
    };
  },
  created() {
    this.menu3 = this.$parent.getMenu3(this.m2, 1, 10);
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name) {
        this.$router.push({ name: "F5" });
      }
      console.log("route", $route);
    }
  },
  methods: {
    reload() {
      window.location.reload();
    },
    selectStyle(id) {
      this.isHover = id;
      console.log("====", id);
    },
    cancelStyle() {
      this.isHover = "";
    }
  }
};
</script>

<style scoped>
.Company {
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  box-sizing: border-box;
}
.CompanyBt {
  width: 100%;
  height: 90px;
}
.CompanyBt p {
  text-align: center;
}
.CnPbt {
  margin: auto;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(18, 18, 18, 1);
  line-height: 26px;
  text-align: center;
}
.Cnpbta {
  position: relative;
  top: 10px;
}
.EgPbt {
  margin: auto;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(197, 185, 185, 0.3);
  line-height: 26px;
  letter-spacing: 1px;
  position: relative;
  bottom: 10px;
  top: -25px;
}
.CompanyTx {
  width: 100%;
  display: flex;
}
.CompanyTx div {
  width: 100%;
  height: 270px;
  background-size: 100%;
}
.CompanyTxO {
  width: 100%;
  width: 96%;
  margin-left: 2%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.CompanyTxO p:nth-child(1) {
  color: aliceblue;
}
li {
  width: 90%;
  text-align: center;
  margin: auto;
  color: aliceblue;
  font-size: 16px;
  line-height: 28px;
  margin-top: 30px;
}
.scrolling {
  width: 100%;
  height: 335px;
}
.swiper-container {
  width: 100%;
  height: 335px;
}
.swiper-slide {
  background-size: 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;
}
.imgLbt {
  width: 100%;
  min-width: 1440px;
}
.swiper-slide .swiper-slide-duplicate .swiper-slide-duplicate-active {
  min-width: 1440px;
  max-width: 1440px;
}
.hoverShow {
  visibility: visible;
}
.hoverHide {
  visibility: hidden;
}
</style>
