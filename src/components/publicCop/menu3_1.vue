<template>
  <div class="newsSidebar newsSidebarTest">
    <div style="min-height:510px;max-height:510px;">
      <!-- <div class="newsSidebarTestBt">{{className}}</div> -->
      <div class="forTest" v-for="v in menu3" :key="v.s">
        <router-link
          class="link-style"
          :to="{ name: 'content2', query: { id: id, m2: m2, m3: v.id } }"
        >
          <!-- <a :href="'/content2#/content2?id='+id+'&m2='+m2+'&m3='+v.id" @click="reload()">
          <img :src="ip+'/'+v.imgUrl" />
        </a> -->
          <div>{{ v.title }}</div>
          <!-- <li class="zyText" v-html="v.describez.replace(/\n/g, '<br/>')"></li> -->
          <div>{{ v.publishDate.toString().substring(0, 10) }}</div>
        </router-link>
      </div>
    </div>
    <div class="Fyl">
      <pagebar style="min-width:200px;"></pagebar>
    </div>
  </div>
</template>
<script>
import ip from "../../assets/js/api.js";
import pagebar from "./Fy";

export default {
  components: {
    pagebar
  },
  data() {
    return {
      ip: ip.ip,
      menu3: this.$parent.menu3,
      id: this.$route.query.id,
      m2: this.$route.query.m2
    };
  },
  methods: {
    reload() {
      window.setTimeout(function() {
        window.location.reload();
      }, 40);
    }
  }
};
</script>

<style scoped>
.link-style {
  color: #000;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding-right: 4%;
}
.link-style div:first-child {
  font-weight: 550;
}
.newsSidebar {
  width: 100%;
}
.newsSidebarBody {
  width: 20%;
  float: left;
}
.newsSidebarTest {
  width: 82%;
  float: right;
  padding-bottom: 120px;
}
.newsSidebarTestBt {
  width: 100%;
  max-width: 680px;
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
  width: 30%;
  max-width: 680px;
  float: right;
  text-align: left;
  color: #666;
}
.Fyl {
  width: 70%;
  min-width: 1236px;
  height: 60px;
  bottom: 12%;
  margin: auto;
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
  line-height: 30px;
  cursor: pointer;
}

.forTest:hover {
  background: #f6f6f6;
}

.newsSidebarTest p {
  color: #121212;
  font-size: 16px;
  font-weight: bold;
  float: left;
  padding-left: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 65%;
  max-width: 850px;
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
