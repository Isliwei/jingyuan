<template>
  <div class="InBody">
     <!-- <InBodyCop></InBodyCop> -->
     <!-- <menu2></menu2> -->
     <!-- <menu3></menu3> -->
     <div class="newsSidebarTest">
      <div class="newsSidebarTestBt">{{className}}</div>
      <div class="forTest">    
        <!-- <InKfCop></InKfCop> -->
      </div>  
    </div>

  </div>
</template>
<script>
import NewsCop from  "./NewsCenterCop/NewsCop"
import imgHead from  "./publicCop/imgHead"
import {ajaxSpringBeanCommonFunction} from "../assets/js/util.js"
import ip from "../assets/js/api.js"

export default {
  components:{
    imgHead,
    NewsCop,
    
  },
  data(){
    return{
      cnm: 'menu3',
      ip:ip.ip,
      menu3:[],
      classId: "",
      menu3_v:{}
    }
  },
  created(){
    if (this.$route.query.m2 != null)
      this.getMenu3(this.$route.query.m2);
  },
  methods:{
    getMenu3(newsClassID){
      //var newsClassID = this.$route.query.m2;
		  var currentPage = 1;
		  var pageSize = 999;
      
		  var params = {"newsClassID":newsClassID,"currentPage":currentPage,"pageSize":pageSize};
		  var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url,params);
      //console.log(JSON.stringify(data));
      var total = data.total;//当前页
      var totalPages = data.totalPages;//总页数
      this.menu3 = data.rows;
      
      var m3 = this.$route.query.m3;
      //alert(newsClassID);
      //判断其它模板
      if (newsClassID == "8abe94755ffc68f4015ffc77232b0005"){//网上看房
          this.cnm = "InKfCop";
      }
      // else if (newsClassID == ""){
         
      // }

      // if (typeof(m3) == "undefined"){
      //   if(this.menu3.length==1){
      //     this.$route.query.m3 = this.menu3[0].id;
      //     this.menu3_v = this.menu3[0];
      //     this.cnm = "content1";
      //     return;
      //   }
      // }else{
      //   for(var i=0;i<this.menu3.length;i++){
      //     if(this.menu3[i].id == m3){
      //       this.menu3_v = this.menu3[i];
      //       this.cnm = "content1";
      //       return;
      //     }
      //   }
      // }

    },
    
  }
  
}
</script>


<style scoped>
.InBody{
  width: 80%;
  margin: auto;
  min-width: 1440px;
  margin-top: 20px;
}
.newsSidebarTest{
  width: 79%;
  float: right;
  padding-bottom: 120px;
}
.newsSidebarTestBt{
  width: 100%;
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
  float: right;
  text-align: left;
  color: rgb(190,190,190);
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
</style>
