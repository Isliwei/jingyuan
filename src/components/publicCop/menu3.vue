<template>
  <div class="newsSidebar newsSidebarTest">
        
    <div>
      <!-- <div class="newsSidebarTestBt">{{className}}</div> -->
      <div class="forTest" v-for="v in $parent.menu3" :key="v.s">    
        <a :href="'/content2#/content2?id='+id+'&m2='+m2+'&m3='+v.id" @click="reload()" v-html="v.content">
          <!--<img :src="ip+'/'+v.imgUrl" />-->
        </a>
        <ul>
          <p><a style="width: 100%;max-width: 680px;color:#000;" :href="'/content2#/content2?id='+id+'&m2='+m2+'&m3='+v.id" @click="reload()">{{v.title}}</a></p>
          <li class="zyText" v-html="v.describez.replace(/\n/g, '<br/>')"></li>
          <li style="margin-top:20px;">{{v.publishDate.toString().substring(0,10)}}</li>
        </ul>
      </div>
    </div>
       <div class="Fyl">
        <pagebar></pagebar>
       </div>  
  </div>
</template>
<script>
import ip from "../../assets/js/api.js"
import pagebar from  "./Fy"


export default {
  components:{
      pagebar,
  },
  data(){
    return{
      ip:ip.ip,
      menu3: this.$parent.menu3,
      id:this.$route.query.id,
      m2:this.$route.query.m2,
    }
  },
  created(){
      
  },
  methods:{
    reload(){
      window.setTimeout(function (){
        window.location.reload();
      },40);
    },
  }
}
</script>



<style scoped>

.newsSidebar{
  width: 100%;
}
.newsSidebarBody{
  width: 20%;
  float: left;
}
.newsSidebarTest{
  width: 79%;
  float: right;
  padding-bottom: 120px;
}
.newsSidebarTestBt{
  width: 100%;
  max-width: 680px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 10px;
}
.newsSidebarTest img{
  width: 35%;
  height: 230px;
  float: left;
}
.newsSidebarTest li{
  width: 63%;
  max-width: 680px;
  float: left;
  text-align: left;
  color: rgb(190,190,190);
  padding-left: 25px;
}
.Fyl{
  width: 70%;
  min-width: 1236px;
  height: 60px;
  /* position: absolute; */
  bottom: 12%;
  margin: auto;
}
.zyText{
  min-height:170px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
  width: 63%;
}
.forTest{
  width: 100%;
  height: 260px;
}
.newsSidebarTest p{
  font-size: 18px;
  font-weight: bold;
  float:left;
  padding-left:24px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 63%;
  text-align: left;
}
.newsSiBt ul{
  width: 80%;
  height: 40px;
  background-color: rgb(255,255,255);
  font-size: 18px;
  text-align: left;
  float: right;
  padding-left: 20px;
  padding-top: 15px;
}
.newsSiBt ul:hover{
  background-color: rgb(209,52,59);
  color: aliceblue;
}
</style>
