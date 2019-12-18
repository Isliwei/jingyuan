<template>
  <div class="NewsBody">
    <imgHead></imgHead>
    <div class="NewsCop">
      <menu2 :m2Id.sync="m2Id"></menu2>
      <component :is="cnm" :m2Id="m2Id"></component>
    </div>
  </div>
</template>

<script>
import NewsCop from "./NewsCenterCop/NewsCop"
import imgHead from "./publicCop/imgHead"
import { ajaxSpringBeanCommonFunction } from "../assets/js/util.js"
import ip from "../assets/js/api.js"

export default {
  components: {
    imgHead,
    NewsCop,
  },
  data () {
    return {
      cnm: 'menu3',
      ip: ip.ip,
      menu3: [],
      classId: "",
      menu3_v: {},
      currentPage: 1,
      pageSize: 2,
      total: 0,
      totalPages: 0,
      m2Id: ''
    }
  },
  watch: {
    m2Id (newVal) {
      // console.log('m2Id', newVal);
      this.getMenu3(newVal, this.currentPage, this.pageSize)
    }
  },
  created () {
    if (this.$route.query.m2 != null)
      this.getMenu3(this.$route.query.m2, this.currentPage, this.pageSize);
  },
  methods: {
    getMenu3 (newsClassID, currentPage, pageSize) {
      // console.log('newsClassID', newsClassID)
      //判断其它模板
      if (newsClassID == "8abe94755ffc68f4015ffc77232b0005") {//网上看房
        pageSize = 4;
        this.cnm = "InKfCop";
      } else if (newsClassID == "8abe94755ffc68f4015ffc718b480002") {//通知公告
        pageSize = 16;
        this.cnm = "menu3_1";
      } else if (newsClassID == "8abe9c5a698e6ebc01698fc257d90006") {//物业服务
        this.cnm = "InXqCop";
      } else if (newsClassID == "8abe9c5a698e6ebc01698fc669780007") {//校企合作
        this.cnm = "InXqCop";
      } else if (newsClassID == "8abe9c5a698e6ebc01698fc6e02d0008") {//金融服务
        this.cnm = "InXqCop";
      } else if (newsClassID == "8abe94755f281266015f283bd72e0000") {//集团简介

      }
      else if (newsClassID == "8abe9c5a698e6ebc01698fc7c126000a") {//园区地图
        this.cnm = "Map";
      }
      else {
        //this.cnm = "menu3";	
        this.cnm = "Map";//园区地图
      }
      if (newsClassID == "8abe9c5a698e6ebc01698fc7c126000a") {
        var params = { "newsClassID": "8abe9bed6d7c117f016d8124f1ad0007", "currentPage": currentPage, "pageSize": pageSize };
        var url = ip.ip + "/news/getDataList";
        var data = ajaxSpringBeanCommonFunction(url, params);
      } else {
        var params = { "newsClassID": newsClassID, "currentPage": currentPage, "pageSize": pageSize };
        var url = ip.ip + "/news/getDataList";
        var data = ajaxSpringBeanCommonFunction(url, params);
      }
      this.total = data.total;//当前条数
      this.totalPages = data.totalPages;//总页数
      console.log(111111, data);
      data.rows.map(item => {
        item.content = item.content.replace(/<img src="/g, `<img src=\"${ip.ip}`);
      })
      this.menu3 = data.rows;

      var m3 = this.$route.query.m3;
      if (typeof (m3) == "undefined") {
        if (this.menu3.length == 1 && currentPage == 1) {
          this.$route.query.m3 = this.menu3[0].id;
          this.menu3_v = this.menu3[0];
          this.cnm = "content1";
          return;
        }
      } else {
        for (var i = 0; i < this.menu3.length; i++) {
          if (this.menu3[i].id == m3) {
            this.menu3_v = this.menu3[i];
            this.cnm = "content1";
            return;
          }
        }
      }
    },

  }

}
</script>

<style scoped>
.NewsCop {
  width: 80%;
  min-width: 1440px;
  margin: auto;
  margin-top: 20px;
}
</style>

