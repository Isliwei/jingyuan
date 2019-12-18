<template>
  <div class="InXqCop">
    <div class="InXqCopDiv">
      <img src="../../assets/imgs/xz.jpg" />
      <div>
        <p>北京电影学院</p>
        <p>通讯地址:</p>
        <p>邮政编码:</p>
        <p>招生咨询电话:</p>
        <p>招生监察电话:</p>
        <p>电子邮件:</p>
        <p>学院网址:</p>    
      </div>
    </div>
    <div class="InXqCopDiv">
      <img src="../../assets/imgs/xz.jpg" />
      <div>
        <p>中国传媒大学</p>
        <p>通讯地址:</p>
        <p>邮政编码:</p>
        <p>招生咨询电话:</p>
        <p>招生监察电话:</p>
        <p>电子邮件:</p>
        <p>学院网址:</p>    
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
      
      console.log(JSON.stringify(data));
    },    
  }
}
</script>
<style>
.InXqCop{
  display: flex;
}
.InXqCopDiv{
  flex: 5;
}
.InXqCopDiv p:nth-child(1){
  font-size: 18px;
  font-weight: bold;
}
.InXqCop img{
  width: 90%;
  margin: auto;
  margin-right: 40px;
  margin-top: 20px;
}
.InXqCop p{
  width: 90%;
  margin: auto;
  text-align: left;
  line-height: 30px;
}
</style>

