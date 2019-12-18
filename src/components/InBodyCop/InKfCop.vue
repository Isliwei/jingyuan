<template>
  <div class="InKfCop">
    <div class="block" v-for="v in menu3" :key="v.s">
      <a :href="'/content2#/content2?id='+id+'&m2='+m2+'&m3='+v.id">
        <img :src="ip+'/'+v.imgUrl" id="img2">
      </a>
      <p style="float:left;padding-left:5px;">{{ v.title }}</p>
      <p>{{ v.describez }}</p>
    </div>
    <div class="Fyl">
      <pagebar></pagebar>
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
  props: {
    m2Id: String
  },
  data () {
    return {
      ip: ip.ip,
      menu3: this.$parent.menu3,
      id: this.$route.query.id,
      m2: this.$route.query.m2,
    }
  },
  created () {

  },
  methods: {
    reload () {
      window.location.reload();
    },

  }
}
</script>

<style scoped>
.InKfCop {
  float: right;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 180px;
}
.Fyl {
  width: 80%;
  height: 60px;
  bottom: -200px;
  margin: auto;
}
.block {
  width: 46%;
  /*min-width: 30%;*/
  min-width: 40%;
  margin: 0 15px 15px 10px;
  height: 300px;
  box-sizing: border-box;
  background-image: url(../../assets/imgs/233.jpg);
  background-size: 100% 100%;
}
.block img {
  width: 100%;
  min-width: 100%;
  min-height: 300px;
  height: 300px;
}
.block p {
  width: 100px;
  height: 20px;
  float: right;
  color: aliceblue;
  position: relative;
  bottom: 30px;
  overflow: hidden;
}
</style>
