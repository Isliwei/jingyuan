<template>
    <div class="newsSidebarBody">
      <div v-for="item in bT" :key="item.s" class="newsSiBt">
          <ul :class="item.ID==m2 ? 'newsSiBt_click':''" >

            <a :href="'/'+m1+'#/'+m1+'?id='+m1+'&m2='+item.ID" @click="reload()">
              <div>{{item.ClassName}}</div>
            </a>
            <img id="imgFz" src="../../assets/imgs/transition.png"/>
          </ul>
      </div>
      <transition>
        <div v-if="classId == item.ID && item.ID != '8abe94755f766ecb015f76c83c8a0001'" :class="{ 'isSidebar': isNowPage }">
 
          <li v-for="v in menu3" :key="v.s" @click.prevent="location(item.ID,v)" :title="v.title">{{v.title}}</li>
        </div>
      </transition>
    </div>
</template>
<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"

export default {
  
  data(){
    return{
      ip:ip.ip,
      bT:[],
      menu3:[],
      cnm: 'my-Jy',
      m1:"",
      m2: "",
      isNowPage:true,
      menu3_v:{}
    }
  },
  created(){
    this.getMenu2();
  },
  methods:{
    reload(){
      window.location.reload();
    },
    getMenu2(){   //请求数据
      this.m1 = this.$route.query.id;
      this.m2 = this.$route.query.m2;

      var url = ip.ip + "/Index/getParemtNavList";
      var params = {"parentId":this.$route.query.id};
      var data = ajaxSpringBeanCommonFunction(url,params);
      this.bT = data;
      //console.log(JSON.stringify(data));
      if (this.m2 == null){
        if(data.length>0){
          this.getMenu3(data[0].ID);
        }
      }else{
        getMenu3(m2);
      }

    },
    getMenu3(newsClassID){
      this.m2 = newsClassID;

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
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.v-enter-active,
.v-leave-active {
  
  transition: all 0.5s ease;
}
.Sidebar{
  width: 100%;
}
.SidebarBody{
  width: 20%;
  float: left;
  margin: auto;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.SidebarTest{
  width: 80%;
  float: right;
  margin-bottom: 120px;
}
ul{
  width: 80%;
  height: 40px;
  background-color: rgb(255,255,255);
  font-size: 18px;
  text-align: left;
  padding-left: 20px;
  padding-top: 15px;
}
li{
  width: 80%;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: auto;
  background-color: rgb(243,243,243);
}
li:hover{
  color: aliceblue;
  background-color: rgb(209,52,59);
}
.isSidebar :nth-child(1){background-color: rgb(209,52,59);color: aliceblue;} 
img{
  width: 15px;
  height: 15px;
  background-size: 100%;
  float: right;
  margin: -20px 0 0 0;
  transform:rotate(180deg);
  -ms-transform:rotate(180deg); 	/* IE 9 */
  -moz-transform:rotate(180deg); 	/* Firefox */
  -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
  -o-transform:rotate(180deg); 	/* Opera */
}
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
.newsSiBt ul a{
  width: 80%;
  height: 40px;
  font-size: 18px;
  text-align: left;
  float: right;
  padding-left: 20px;
  padding-top: 15px;
  text-decoration:none;
}
a{
  color: #000;
}
.newsSiBt ul a:hover{
  background-color: rgb(209,52,59);
  color: aliceblue;
}
.newsSiBt_click{
  background-color: rgb(209,52,59);
  color: aliceblue;
}
.newsSiBt_click a{
  background-color: rgb(209,52,59);
  color: aliceblue;
}
</style>