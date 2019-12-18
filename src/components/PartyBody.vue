<template>
  <div class="PartyBody">

    <div class="PartyBodykz">
    <!-- 党建动态 -->
    <Partymoving></Partymoving>
    </div>
    <!-- 基层党建 -->
    <Party-Roots></Party-Roots>

    <!-- 新闻切换 -->
    <div class="PartyBodykz2">
    <PartyNews></PartyNews>
    </div>

    <!-- 先进典型 -->
    <partyexample></partyexample>

  </div>
</template>
<script>
import {ajaxSpringBeanCommonFunction} from "../assets/js/util.js"
import ip from "../assets/js/api.js"
import Partymoving from "./partyBodyCop/Partymoving";
import PartyRoots from "./partyBodyCop/PartyRoots";
import PartyNews from "./partyBodyCop/PartyNews";
import partyexample from "./partyBodyCop/partyexample";


export default {
  components:{
    Partymoving,
    PartyRoots,
    PartyNews,
    partyexample,
  },
  data(){
    return{
      ip:ip.ip,
    }
  },
  created(){
  },
  methods:{
    getMenu2(m1){   //请求数据

      var url = ip.ip + "/Index/getParemtNavList";
      var params = {"parentId":m1};
      var data = ajaxSpringBeanCommonFunction(url,params);
      return data;

    },
    getMenu3(newsClassID,currentPage,pageSize){
      
		  var params = {"newsClassID":newsClassID,"currentPage":currentPage,"pageSize":pageSize};
		  var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url,params);
      // console.log(JSON.stringify(data));
      this.total = data.total;//当前条数
      this.totalPages = data.totalPages;//总页数
      return data.rows;
      
    },
  },
}
</script>



<style scoped>
.PartyBody{
  flex-direction: column;
  width: 80%;
  min-width: 1440px;
  margin: auto;
  margin-top: 20px;
}
.PartyBodykz{
  width: 60%;
  float: left;
}
.PartyBodykz2{
  float: left;
  width: 72%;
  margin-top: 70px;
  padding-bottom: 120px;
}
</style>