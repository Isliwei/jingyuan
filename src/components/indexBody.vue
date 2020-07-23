<template>
  <div class="indexBody">
    <div class="line-1">
      <News-Center></News-Center>
      <div class="copKz">
        <Group></Group>
        <Propaganda></Propaganda>
        <Djdt></Djdt>
      </div>
    </div>
    <Company></Company>
    <Service></Service>
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
    Service
  },
  data() {
    return {
      ip: ip.ip
    };
  },
  methods: {
    getMenu3(newsClassID, currentPage, pageSize) {
      var params = {
        newsClassID: newsClassID,
        currentPage: currentPage,
        pageSize: pageSize
      };
      var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url, params);
      this.total = data.total; //当前条数
      this.totalPages = data.totalPages; //总页数
      return data.rows;
    },
    getMenu2(m1) {
      //请求数据
      var url = ip.ip + "/Index/getParemtNavList";
      var params = { parentId: m1 };
      var data = ajaxSpringBeanCommonFunction(url, params);
      return data;
    }
  }
};
</script>

<style scoped>
.line-1 {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
}

.indexBody {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  box-sizing: border-box;
}
.copKz {
  flex-direction: row;
  width: 50%;
}
li {
  height: 26px;
}
</style>
