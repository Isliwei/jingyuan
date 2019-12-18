<template>
  <div class="PartyNews">

    <div class="PartyBt">
    <ul class="PartyBtul">
      <li v-for="v in menu2" :key="v.i" class="PartyBtli" >
        
       <a @click="menu3 = $parent.getMenu3(v.ID,1,8);m2=v.ID" :class="v.ID==m2 ? 'newsSiBt_click':'PartyBta'" >{{v.ClassName}}</a>

        
      </li>
      <a style="float:right;margin-top:7px;font-size:16px;color: #A0A0A0;" :href="'/news#/news?id='+m1+'&m2='+m2+'&m3='+m2" >查看更多</a>
      <li class="PartyBtliFot"></li> 
    </ul>
    </div>
    


     <div>
       
      <div class="JJJC" >
        <div v-for="v in menu3" :key="v.s">
          <img :src="ip+'/'+v.imgUrl">
        </div>  
        <ul style="width:60%;" >
            
            <li v-for="v in menu3" :key="v.s" >
            <p class="JJLb" style="float:left;">
              <a style="color:#000;" :href="'/news#/news?id='+m1+'&m2='+m2+'&m3='+m2" > 
                {{v.title}} 
              </a>
            </p>
            <p>
              <a style="color:#000;" :href="'/news#/news?id='+m1+'&m2='+m2+'&m3='+m2">
              {{v.publishDate.toString().substring(0,10)}}
              </a>
            </p>
            </li>

        </ul>
      </div>
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
      menu2:[],
      m1:"8abe94755f281266015f283c72a30001",
      m2:"8abe9975608b41aa01608b56ec020001"

  
    }
  },
  created(){
    this.menu2 = this.$parent.getMenu2("8abe94755f281266015f283c72a30001");
    this.menu3 = this.$parent.getMenu3(this.m2,1,8);
    this.newmenu2()
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  methods:{
     newmenu2(){
       this.menu2 = this.menu2.slice(2,6)
     },
     
  },
}
</script>


<style scoped>
.PartyNews{
  width: 100%;
  height: 400px;
}
.PartyBtul{
  width: 100%;
  height: 45px;
  line-height: 40px;
  border-bottom: 5px solid rgb(245,245,245);
  margin-bottom: 5px;
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  padding-left: 5px;
}
.PartyBtli{
  margin-right: 20px;
  position: relative;
  float: left;
  top: 5px;
  right: 5px;
  width: 90px;
  line-height: 40px;
  cursor:pointer;
}
.PartyBtli li:nth-child(1){
  border-bottom: 5px solid rgb(174,19,47);
}
.PartyBtliFot{
  color: #A0A0A0;
  font-size: 16px;
  float: right;
  text-align: right;
  border: none;
  position: relative;
  top: 11px;
  cursor:pointer;
}
.JJJC{
  display: flex;
}
.JJJC div{
  margin: 10px 0 0 0;
  width: 40%;
  height: 330px;
}
.JJJC div img{
  width: 100%;
  height: 330px;
}
.JJJC ul{
  margin: 10px 0 0 10px;
}
.JJJC ul p:nth-child(even){
  float: right;
  color: rgb(220, 220,220);
  line-height: 40px;
}
.JJLb{
  display: inline-block;
  line-height: 40px;
  text-align: left;
  width: 450px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.newsSiBt_click{
  padding-bottom: 8px;
  border-bottom: 5px solid rgb(174,19,47);
}
.PartyBta:hover{
  padding-bottom: 8px;
  border-bottom: 5px solid rgb(174,19,47);
}
</style>
