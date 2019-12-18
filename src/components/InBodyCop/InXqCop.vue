<template>
  <div class="newsSidebar">
    <div class="newsSidebarTest">
      <div class="newsSidebarTestBt">{{menu3[0].className}}</div>
      <div class="select">
        <div
          class="select-tabs"
          :class="{ 'select-tabs-selected': ifShow === index }"
          v-for="(v, index) in menu3"
          :key="index"
          @click="ifShow = index"
        >{{v.title}}</div>
      </div>
      <div v-html="menu3[ifShow].content" class="forTest"></div>
    </div>
  </div>
</template>
<script>

import ip from "../../assets/js/api.js"
import pagebar from "../publicCop/Fy"

export default {
  components: {
    pagebar,
  },
  data () {
    return {
      ip: ip.ip,
      menu3: this.$parent.menu3.reverse(),
      id: this.$route.query.id,
      m2: this.$route.query.m2,
      ifShow: 0,
    }
  },
  methods: {
    reload () {
      window.location.reload();
    }
  }
}
</script>

<style scoped>
.select {
  width: 18%;
  height: 25px;
  position: relative;
  left: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
  font-size: 18px;
}
.select-tabs {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-size: 16px;
  font-weight: bold;
}
.select-tabs-selected {
  border-bottom: 2px solid red;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
}
.newsSidebar {
  width: 100%;
}
.newsSidebarBody {
  width: 20%;
  float: left;
}
.newsSidebarTest {
  width: 79%;
  float: right;
  padding-bottom: 120px;
}
.newsSidebarTestBt {
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
  margin-top: 20px;
}
.Fyl {
  width: 80%;
  height: 60px;
  /* position: absolute; */
  bottom: 110px;
  margin: auto;
}
.newsSidebarTest img {
  width: 98%;
  height: 310px;
  float: left;
}
.newsSidebarTest li {
  width: 63%;
  float: left;
  text-align: left;
  margin-left: 25px;
  margin-top: 30px;
  color: rgb(190, 190, 190);
}
.zyText {
  min-height: 170px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
  width: 63%;
}
.forTest {
  width: 96%;
  float: left;
  margin-top: 10px;
  text-indent: 2em;
}
.newsSidebarTest p {
  font-size: 18px;
  font-weight: bold;
  float: left;
  padding-left: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 63%;
  text-align: left;
}
.newsSiBt ul {
  width: 80%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: left;
  float: right;
  padding-left: 20px;
  padding-top: 15px;
}
.newsSiBt ul:hover {
  background-color: rgb(209, 52, 59);
  color: aliceblue;
}
</style>
