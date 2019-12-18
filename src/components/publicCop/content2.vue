<template>
  <div class="content2">
    <head-nav></head-nav>
    <imgHead></imgHead>
    <div class="NewsCop">
      <img src="../../assets/imgs/home.png">
      <p>
        <a :href="'/news#/news?id='+id+'&m2='+m2" @click="reload()" style="color:#000">列表</a>
      </p>
      <img src="../../assets/imgs/rightF.png">
      <p>详情</p>
      <div class="GroupData" id="GroupData" v-html="menu3_v.content"></div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import imgHead from "./imgHead"
import { ajaxSpringBeanCommonFunction } from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"

import HeadNav from "@/head";
import Foot from "@/Foot";

export default {
  components: {
    imgHead,
    HeadNav,
    Foot,
  },
  data () {
    return {
      ip: ip.ip,
      menu3_v: {},
      isNowPage: true,
      id: this.$route.query.id,
      m2: this.$route.query.m2,

    }
  },
  created () {
    this.getMenu3();
    console.log('牛牛牛牛牛牛牛牛牛牛牛牛牛牛');
  },
  methods: {
    getMenu3 () {
      var newsClassID = this.$route.query.m2;
      var currentPage = 1;
      var pageSize = 999;

      var params = { "newsClassID": newsClassID, "currentPage": currentPage, "pageSize": pageSize };
      var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url, params);

      //    console.log(JSON.stringify(data));
      var total = data.total;//当前页
      var totalPages = data.totalPages;//总页数
      var menu3 = data.rows;

      var m3 = this.$route.query.m3;
      for (var i = 0; i < menu3.length; i++) {
        if (menu3[i].id == m3) {
          this.menu3_v = menu3[i];
          break;
        }
      }
    },

  }

}
</script>

<style scoped>
.content2 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  widows: 100%;
  margin: auto;
}
img {
  width: 18px;
  height: 15px;
}
p {
  display: inline-block;
  position: relative;
  bottom: 2px;
}
.NewsCop {
  width: 80%;
  min-width: 1440px;
  margin: auto;
  margin-top: 20px;
  text-align: left;
  margin-bottom: 150px;
}
.GroupData {
  width: 80%;
  margin: auto;
}
</style>
