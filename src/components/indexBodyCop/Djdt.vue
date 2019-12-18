<template>
  <div class="Djdt">
    <div class="newsCenterImg">
    <p>党建动态</p>
    </div>

    <div class="newsCenterTest">
      <ul v-for="v in menu3" :key="v.s">
        <li class="newsTestli">
          <a style="color:#000;" :href="'/content2#/content2?id='+m1+'&m2='+m2+'&m3='+v.id">{{v.title}}</a>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"

export default {

  data(){
    return{
      ip:ip.ip,
      menu3: [],
      m1:"8abe94755f281266015f283cc9910002",
      m2:"8abe94755ffc68f4015ffc7051b70001",   
    }
  },
  created(){
    this.menu3 = this.$parent.getMenu3(this.m2,1,7);
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  methods:{
    
     
  },
}
</script>

<style scoped>
.Djdt{
  width: 50%;
  height: 220px;
  padding-left: 15px;
  float: right;
}
p{
  height:24px;
  font-size:18px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(18,18,18,1);
  line-height:24px;
  text-align: left;
  padding: 8px;
  margin-bottom: 5px;
}
li{
  color: #121212;
  font-size: 16px;
  text-align: left;
  padding-left: 10px;
  line-height: 32px;
  font-weight: 500;
}
.newsCenterTest{
  margin-top: -10px;
}

</style>