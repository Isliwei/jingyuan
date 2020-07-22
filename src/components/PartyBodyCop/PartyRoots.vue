<template>
  <div class="PartyRoots">
    <div class="PartyBt">
      <ul v-for="v in menu2" :key="v.i">
        <p>{{ v.ClassName }}</p>
        <router-link
          class="href-class link-news"
          :to="{
            name: 'News',
            query: { id: m1, m2: m2, m3: m2 }
          }"
        >
          查看更多
        </router-link>
      </ul>
    </div>

    <div class="newsCenterTest">
      <div v-for="v in menu3" :key="v.s" class="line-list">
        <div class="link-title">
          <router-link
            :to="{ name: 'content2', query: { id: m1, m2: m2, m3: v.id } }"
          >
            {{ v.title }}
          </router-link>
        </div>
        <div class="link-time">
          <router-link
            :to="{ name: 'content2', query: { id: m1, m2: m2, m3: v.id } }"
          >
            {{ v.publishDate.toString().substring(0, 10) }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ajaxSpringBeanCommonFunction } from "../../assets/js/util.js";
import ip from "../../assets/js/api.js";

export default {
  data() {
    return {
      ip: ip.ip,
      menu3: [],
      m1: "8abe94755f281266015f283c72a30001",
      m2: "8abe94755f766ecb015f767bf6de0000"
    };
  },
  created() {
    this.menu2 = this.$parent.getMenu2("8abe94755f281266015f283c72a30001");
    this.menu3 = this.$parent.getMenu3(this.m2, 1, 12);
    this.newmenu2();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    newmenu2() {
      this.menu2 = this.menu2.slice(1, 2);
    }
  }
};
</script>

<style scoped>
.PartyRoots {
  width: 40%;
  float: right;
  box-sizing: border-box;
  padding: 0 2%;
}
.PartyBt ul {
  height: 45px;
  line-height: 40px;
  border-bottom: 5px solid rgb(245, 245, 245);
  margin-bottom: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding-left: 5px;
}
.PartyBt ul p:nth-child(1) {
  position: relative;
  float: left;
  top: 5px;
  right: 5px;
  width: 90px;
  border-bottom: 5px solid rgb(174, 19, 47);
}
.PartyBt ul p:nth-child(2) {
  position: relative;
  top: 10px;
  color: #a0a0a0;
  font-size: 16px;
  float: right;
  text-align: right;
}
.Partytestli {
  width: 70%;
  float: left;
  font-size: 16px;
  color: #121212;
  text-align: left;
  line-height: 50px;
}
.Partytiemli {
  color: #a0a0a0;
  text-align: right;
  padding-right: 10px;
  display: inline-block;
  line-height: 50px;
}
.line-list {
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 4px 0;
}

.line-list .link-title a {
  color: #000;
  font-weight: 550;
}
.line-list .link-time a {
  color: rgb(160, 160, 160);
}
.link-title {
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.link-time {
  width: 30%;
  text-align: right;
}
</style>
