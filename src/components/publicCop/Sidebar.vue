<template>
  <div class="Sidebar">
    <div class="SidebarBody">
      <div v-for="item in bT" :key="item.s">
        <ul
          class="SidebarBodyUl"
          v-if="item.ID != '8abe94755f766ecb015f76c83c8a0001'"
          @click="getMenu3(item.ID);"
        >
          <div>{{item.ClassName}}</div>
          <img id="imgFz" src="../../assets/imgs/transition.png">
        </ul>
        <transition>
          <div v-if="classId == item.ID && item.ID != '8abe94755f766ecb015f76c83c8a0001'">
            <span v-for="v in menu3" :key="v.s">
              <li
                @click="getProduce(v.ID)"
                :title="v.ClassName"
                :class="v.ID==isClick ? 'newsSiBt_click':''"
              >{{v.ClassName}}</li>
            </span>
          </div>
        </transition>
      </div>
      <div v-for="item in bT" :key="item.ID">
        <a
          style="color: black;"
          v-if="item.ID == '8abe94755f766ecb015f76c83c8a0001'"
          :href="'/gIT#/gIT?id='+m1+'&m2='+item.ID"
          @click="reload()"
        >
          <p class="Xcpp" :class="item.ID==m2 ? 'newsSiBt_click  ' :''">{{item.ClassName}}</p>
        </a>
      </div>
    </div>
    <div class="SidebarTest">
      <component :is="cnm"></component>
    </div>
  </div>
</template>

<script>
import { ajaxSpringBeanCommonFunction } from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
import GroupData from '../GroupBodyCop/GroupData'

export default {
  components: {
    GroupData
  },
  data () {
    return {
      bT: [],
      menu3: [],
      cnm: 'my-Jy',
      classId: "",
      isNowPage: true,
      menu3_v: {},
      m1: this.$route.query.id,
      m2: this.$route.query.m2,
      m3: this.$route.query.m3,
      alist: [],
      isClick: ''
    }
  },
  created () {
    this.getMenu2();
    // console.log('ssss',this.$route);
  },
  methods: {
    reload () {
      window.location.reload();
    },
    getProduce (theID) {
      var url = ip.ip + "/news/getDataList";
      var params = {
        "newsClassID": theID,
        "currentPage": 1,
        "pageSize": 999
      };
      var data = ajaxSpringBeanCommonFunction(url, params);
      data.rows[0].content = data.rows[0].content.slice(0, 15) + ip.ip + data.rows[0].content.slice(15);
      this.menu3_v = data;
      this.cnm = "GroupData";
      this.isClick = theID;
      //    console.log('data',data);
    },
    getMenu2 () {   //请求数据
      var url = ip.ip + "/Index/getParemtNavList";
      var params = { "parentId": this.$route.query.id };
      var data = ajaxSpringBeanCommonFunction(url, params);
      this.bT = data;
      if (data.length > 0) {
        if (this.m2 == null) {
          this.getMenu3(data[0].ID);
        } else {
          this.getMenu3(this.m2);
        }

      }
    },
    getMenu3 (newsClassID) {
      this.classId = newsClassID;
      var currentPage = 1;
      var pageSize = 999;

      //		  var params = {"newsClassID":newsClassID,"currentPage":currentPage,"pageSize":pageSize};
      var params = { "parentId": newsClassID };
      var data = ajaxSpringBeanCommonFunction(`${ip.ip}/Index/getParemtNavList`, params);
      //    var total = data.total;//当前页
      //    var totalPages = data.totalPages;//总页数
      // console.log(data)
      this.menu3 = data;
      if (data.length > 0) {
        if (this.m3 == null) {
          this.location(newsClassID, this.menu3[0].ID, data);
        } else {
          this.location(newsClassID, this.m3, data);
        }
      }
    },
    location (id, m3, menu3) {
      if (id == '8abe94755f766ecb015f76c83c8a0001') {//宣传片
        this.cnm = 'my-Xcp';
      } else {
        for (var i = 0; i < menu3.length; i++) {
          if (menu3[i].id == m3) {
            this.menu3_v = menu3[i];
          }
        }
        this.cnm = 'my-Jy';
      }


    }


  }
}

</script>


<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.Sidebar {
  width: 100%;
}
.SidebarBody {
  width: 20%;
  float: left;
  margin: auto;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.SidebarTest {
  width: 80%;
  float: right;
  margin-bottom: 120px;
}
.SidebarBodyUl {
  width: 80%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
}
ul {
  width: 80%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
}
li {
  width: 80%;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: auto;
  background-color: rgb(243, 243, 243);
  color: black;
}
.Xcpp {
  width: 90%;
  height: 40px;
  background-color: rgb(255, 255, 255);
  font-size: 18px;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
}
li:hover {
  /*color: aliceblue;*/
  /*background-color: rgb(209,52,59);*/
  background-color: #dfe6e9;
}
.newsSiBt_click {
  color: aliceblue;
  background-color: rgb(209, 52, 59);
}
img {
  width: 15px;
  height: 15px;
  background-size: 100%;
  float: right;
  margin: -20px 0 0 0;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
</style> 


