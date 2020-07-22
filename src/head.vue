<template>
  <div class="head">
    <div class="headTb">
      <img src="./assets/imgs/logo.png" />
    </div>
    <div class="headDh">
      <router-link to="/" tag="li">首页</router-link>
      <li v-for="v in nav" :key="v.ID">
        <router-link
          v-if="v.ID == '8abe94755f281266015f283c72a30001'"
          :class="{ isNews: v.ID == $route.query.id }"
          :to="{ name: 'PartyBuildingWorld', query: { id: v.ID } }"
          @click.native="reload()"
          >{{ v.ClassName }}</router-link
        >
        <router-link
          v-else-if="v.ID == '8abe94755f281266015f283bd72e0000'"
          :to="{ name: 'GroupIntroduction', query: { id: v.ID } }"
          :class="{ isNews: v.ID == $route.query.id }"
          @click.native="reload()"
          >{{ v.ClassName }}</router-link
        >
        <router-link
          v-else
          :to="{ name: 'NewsCenter', query: { id: v.ID } }"
          :class="{ isNews: v.ID == $route.query.id }"
          @click.native="reload()"
          >{{ v.ClassName }}</router-link
        >
      </li>
    </div>
  </div>
</template>
<script>
import { ajaxSpringBeanCommonFunction } from "./assets/js/util.js";
import ip from "./assets/js/api.js";

export default {
  data() {
    return {
      nav: []
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === from.name) {
        this.$router.push({ name: "F5" });
      }
    }
  },
  created() {
    this.postData();
  },
  methods: {
    postData() {
      //请求数据
      var data = ajaxSpringBeanCommonFunction(ip.ip + "/Index/getNav", {});
      this.nav = data;
    }
  }
};
</script>
<style scoped>
.head {
  width: 100%;
  height: 100px;
  top: 0;
  margin: 0;
  display: flex;
  display: -webkit-flex; /* Safari */
}
.headTb {
  flex: 6;
  min-width: 700px;
}
.headDh {
  flex: 4;
  min-width: 650px;
  display: flex;
  align-items: center;
}
img {
  margin: auto;
  max-width: 520px;
  max-height: 80px;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  margin-right: 250px;
}
li {
  float: left;
  margin-right: 15px;
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(18, 18, 18, 1);
  cursor: pointer;
  text-align: center;
  line-height: 25px;
  margin-top: 10px;
  border-right: 1px solid #cccccc;
  padding-right: 10px;
}
li:last-child {
  border-right: none;
}
/*li:hover{
  border-bottom: 3px solid red;
}*/
a {
  font-size: 20px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(18, 18, 18, 1);
  text-decoration: none;
  padding-bottom: 25px;
}

.isNews {
  border-bottom: 5px solid rgb(209, 52, 59);
}
</style>
