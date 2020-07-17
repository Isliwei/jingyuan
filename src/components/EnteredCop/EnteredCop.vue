<template>
  <div class="newsSidebar">
    <div class="newsSidebarBody">

      <div class="newsSiBt" v-for="item in bT" :key="item.s">
          <ul @click="getMenu3(item)">
            <div>{{item.ClassName}}</div>
          </ul>
          
      </div>

    </div>
    
    <div class="newsSidebarTest">
      <div class="newsSidebarTestBt">{{className}}</div>
      <div class="forTest" v-for="v in menu3" :key="v.s">    
        <img :src="ip+'/'+v.imgUrl" />
        <ul>
          <p>{{v.title}}</p>
          <li class="zyText">{{v.describez}}</li>
          <li style="margin-top:20px;">{{v.publishDate}}</li>
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
      className:"",
      ip:ip.ip,
      bT:[],
      menu3:[],
      cnm: 'my-Jy',
      classId: "",
      isNowPage:true,
      menu3_v:{}
    }
  },
  created(){
    this.getMenu2()
  },
  methods:{
    getMenu2(){   //请求数据
      var url = ip.ip + "/Index/getParemtNavList";
      var params = {"parentId":this.$route.query.id};
      var data = ajaxSpringBeanCommonFunction(url,params);
      this.bT = data;
      //console.log(JSON.stringify(data));
      if(data.length>0){
        this.getMenu3(data[0]);
        
      }
    },
    getMenu3(v){
      var newsClassID = v.ID;
      this.classId = newsClassID;
      this.className = v.ClassName;

		  var currentPage = 1;
		  var pageSize = 999;
      
		  var params = {"newsClassID":newsClassID,"currentPage":currentPage,"pageSize":pageSize};
		  var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url,params);
      var total = data.total;//当前页
      var totalPages = data.totalPages;//总页数
      this.menu3 = data.rows;
      
      // console.log(JSON.stringify(data));
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
