<template>
  <div>
    <div class="newsSidebarBody">
      <div v-for="(item, index) in bT" :key="item.s" class="newsSiBt">
        <!-- <ul :class="item.ID == m2Id ? 'newsSiBt_click' : ''"> -->
        <div
          :class="['menulist_left', isclick == item.ID ? 'newsSiBt_click' : '']"
          @click="reload(item, index)"
        >
          <div>{{ item.ClassName }}</div>
          <div :class="['cur-icon', isclick == item.ID ? '' : 'cur-black']">
            &gt;
          </div>
        </div>
        <!-- <router-link
            :to="{ name: 'Map', query:{ id:m1,m2:item.ID} }"
            v-for="(cItem, cIndex) in item.childList"
            :key="`${cIndex}-childItem`"
            class="newsSiBt-child"
            @click.native="reload(cItem,index)"
          >{{ cItem.ClassName }}999</router-link> -->
        <!-- </ul> -->
      </div>
    </div>
  </div>
</template>
<script>
import { ajaxSpringBeanCommonFunction } from "../../assets/js/util.js";
import ip from "../../assets/js/api.js";

export default {
  props: {
    m2Id: String
  },
  data() {
    return {
      bT: [],
      m1: "",
      m2: "",
      isclick: ""
      // m2Id: ''
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
    this.getMenu2();
    this.isclick = this.$route.query.m2;
  },
  methods: {
    reload(item, index) {
      this.isclick = index;
      this.$emit("update:m2Id", item.ID);
      if (item.ClassName === "园区地图") {
        var url = ip.ip + "/Index/getParemtNavList";
        var params = { parentId: item.ID };
        var data = ajaxSpringBeanCommonFunction(url, params);
        item.childList = data;
        // this.$router.push({ name: 'NewsCenter', query: { id: this.m1, m2: data.length > 0 ? data[0].ID : '' } })
      } else {
        this.$router.push({
          name: "NewsCenter",
          query: { id: this.m1, m2: item.ID }
        });
      }
    },
    getMenu2() {
      //请求数据
      this.m1 = this.$route.query.id;
      this.m2 = this.$route.query.m2;
      var url = ip.ip + "/Index/getParemtNavList";
      var params = { parentId: this.$route.query.id };
      var data = ajaxSpringBeanCommonFunction(url, params);
      this.bT = data;
      if (this.m2 == null) {
        if (data.length > 0) {
          this.m2 = data[0].ID;
          this.$route.query.m2 = this.m2;
          this.$parent.getMenu3(
            this.m2,
            this.$parent.currentPage,
            this.$parent.pageSize
          );
        }
      }
    }
  }
};
</script>

<style scoped>
.menulist_left {
  width: 80%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  display: inline-flex;
  position: relative;
  left: 20%;
  overflow: hidden;
}
.menulist_left div:first-child {
  position: relative;
  left: 20px;
}
.cur-icon {
  position: absolute;
  right: 20px;
}
.cur-icon::after {
  content: "";
  width: 20px;
  height: 20px;
  border: 1px dashed #fff;
  position: absolute;
  left: -6px;
  top: 8px;
}

.cur-black::after {
  border: 1px dashed #999;
}

.newsSidebar {
  width: 100%;
}
.newsSidebarBody {
  width: 16%;
  float: left;
  margin-bottom: 200px;
  overflow: hidden;
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
  margin-bottom: 10px;
  padding-left: 10px;
}
.newsSidebarTest img {
  width: 35%;
  height: 230px;
  float: left;
}
.newsSidebarTest li {
  width: 63%;
  float: right;
  text-align: left;
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
  width: 100%;
  height: 260px;
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
.newsSiBt ul a {
  width: 80%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: left;
  float: right;
  padding-left: 20px;
  text-decoration: none;
  cursor: pointer;
}
a {
  color: #000;
}
.newsSiBt ul a:hover {
  background-color: rgb(209, 52, 59);
  color: aliceblue;
}
.newsSiBt_click {
  box-sizing: border-box;
  background-color: rgb(209, 52, 59);
  color: aliceblue;
}
.newsSiBt_click a {
  background-color: rgb(209, 52, 59);
  color: aliceblue;
}

.newsSiBt-child {
  background-color: rgb(243, 243, 243) !important;
  color: black !important;
  cursor: pointer;
}

.newsSiBt-child:hover {
  background-color: rgb(209, 52, 59) !important;
  color: aliceblue !important;
}
</style>
