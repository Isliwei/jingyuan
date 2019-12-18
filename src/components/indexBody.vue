<template>
  <div class="indexBody">
    <News-Center></News-Center>
    <div class="copKz">
      <Group></Group>
      <Propaganda></Propaganda>
      <Djdt></Djdt>
    </div>
    <div class="copKz2">
      <Company></Company>
      <Service></Service>
    </div>
  </div>
</template>
<script>
import { ajaxSpringBeanCommonFunction } from "../assets/js/util.js";
import ip from "../assets/js/api.js";
import NewsCenter from "./indexBodyCop/NewsCenter";
import Group from "./indexBodyCop/Group";
import Propaganda from "./indexBodyCop/Propaganda";
import Djdt from "./indexBodyCop/Djdt";
import Company from "./indexBodyCop/Company";
import Service from "./indexBodyCop/Service";

export default {
  components: {
    NewsCenter,
    Group,
    Propaganda,
    Djdt,
    Company,
    Service,
  },
  data () {
    return {
      ip: ip.ip,
    }
  },
  created () {

  },
  methods: {
    getMenu3 (newsClassID, currentPage, pageSize) {

      var params = { "newsClassID": newsClassID, "currentPage": currentPage, "pageSize": pageSize };
      var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url, params);
      // console.log(JSON.stringify(data));
      this.total = data.total;//当前条数
      this.totalPages = data.totalPages;//总页数
      return data.rows;

    },
    getMenu2 (m1) {   //请求数据

      var url = ip.ip + "/Index/getParemtNavList";
      var params = { "parentId": m1 };
      var data = ajaxSpringBeanCommonFunction(url, params);
      return data;

    },

  },

}
</script>

<style scoped>
.indexBody {
  width: 80%;
  min-width: 1440px;
  margin: auto;
  display: flex;
  margin-top: 35px;
  flex-direction: column;
}
.copKz {
  flex-direction: row;
  width: 50%;
  float: right;
  position: relative;
  bottom: 405px;
  left: 750px;
}
.copKz2 {
  margin-top: -390px;
  flex-direction: column;
}
li {
  height: 26px;
}
</style>
