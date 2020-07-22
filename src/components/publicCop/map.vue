<template>
  <div class="newsSidebar newsSidebarTest">
    <div>
      <div class="forTest" v-for="v in $parent.menu3" :key="v.s">
        <!-- <a
          :href="'/content2#/content2?id=' + id + '&m2=' + m2 + '&m3=' + v.id"
          @click="reload()"
          v-html="v.content"
        > -->
          <img :src="ip + '/' + v.imgUrl">
        <!-- </a> -->
        <div class="content">
          <p class="mapName">
            <a
              style="width: 100%;max-width: 680px;color:#000;"
              :href="
                '/content2#/content2?id=' + id + '&m2=' + m2 + '&m3=' + v.id
              "
              @click="reload()"
            >{{ v.title }}</a>
          </p>
          <li class="zyText" v-html="v.content.replace(/\n/g, '<br/>')"></li>
          <li>{{v.publishDate.toString().substring(0,10)}}</li>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import ip from "../../assets/js/api.js";
export default {
  data () {
    return {
      ip: ip.ip,
      menu3: this.$parent.menu3,
      id: this.$route.query.id,
      m2: this.$route.query.m2
    };
  },
  methods: {
    reload () {
      window.setTimeout(function () {
        window.location.reload();
      }, 40);
    }
  }
};
</script>

<style scoped>
.newsSidebar {
  width: 100%;
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
  width: 500px;
  height: 300px;
}
.newsSidebarTest li {
  width: 100%;
  max-width: 680px;
  float: left;
  text-align: left;
  color:#A0A0A0;
  font-size: 14px;
}

.zyText {
  min-height: 160px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
  width: 63%;
}

.forTest {
  width: 100%;
  height: 200px;
  display: inline-flex;
  box-sizing: border-box;
  margin-bottom:16px;
}

.forTest img{
  width: 30%;
  height: 200px;
}

.forTest .content{
  width: 70%;
  box-sizing: border-box;
  padding: 2px 20px;
}

.newsSidebarTest p {
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 20%;
  text-align: left;
}
</style>
