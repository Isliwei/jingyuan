<template>
  <div class="partyexample">
    <div class="PartyBt">
    <ul v-for="v in menu2" :key="v.i">
      <p>{{v.ClassName}}</p>
       <a style="float:right;" :href="'/news#/news?id='+m1+'&m2='+m2+'&m3='+m2" >查看更多</a>
    </ul>
    </div>

    <div class="newsCenterTest">
      <ul v-for="v in menu3" :key="v.s" class="Partytext">
        <img :src="ip+'/'+v.imgUrl"  style="flex:3;margin:4px;"/>
        <div style="flex:7">
          <a style="color:#000;" :href="'/content2#/content2?id='+m1+'&m2='+m2+'&m3='+m2"><p>{{ v.title }}</p></a>
          <a style="color:rgb(160,160,160);" :href="'/content2#/content2?id='+m1+'&m2='+m2+'&m3='+m2"><p style="font-size: 15px;">{{ v.describez }}</p> </a>
        </div>
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
      m1:"8abe94755f281266015f283c72a30001",
      m2:"8abe9c5a698e6ebc01698ebaba560005",   
    }
  },
  created(){
    this.menu2 = this.$parent.getMenu2("8abe94755f281266015f283c72a30001");
    this.menu3 = this.$parent.getMenu3(this.m2,1,3);
    this.newmenu2()
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  methods:{
    newmenu2(){
       this.menu2 = this.menu2.slice(6,7)
    }
     
  },
}
</script>

<style scoped>
.partyexample{
  width: 40%;
  float: right;
  height: 400px;
  margin-top: 70px;
  box-sizing: border-box;
  padding: 0 2%;
}
.PartyBt ul{
  height: 45px;
  line-height: 40px;
  border-bottom: 5px solid rgb(245,245,245);
  margin-bottom: 5px;
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  padding-left: 5px;
}
.PartyBt ul p{
  position: relative;
  float: left;
  top: 5px;
  right: 5px;
  width: 90px;
  line-height: 40px;
  border-bottom: 5px solid rgb(174,19,47);
}
.PartyBt ul a{
  position: relative;
  top: 10px;
  color: #A0A0A0;
  font-size: 16px;
  float: right;
  text-align: right;
}
.PartyBt ul a:hover{
  cursor:pointer;
}
.Partytext{
  display: flex;
}
.Partytext img{
  width: 40px;
  height: 110px;
}
.Partytext p{
  margin-top: 10px;
  text-align: left;
}
.Partytext p:nth-child(1){
  font-size: 18px;
}
.Partytext p:nth-child(2){
 color: #A0A0A0;
 font-size: 15px;
}
</style>
