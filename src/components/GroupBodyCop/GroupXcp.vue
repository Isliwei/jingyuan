<template>
  <div class="GroupXcp">
     <!-- <p class="bt">宣传片</p> -->
     <div class="GroupXcp2">
       <video controls autobuffer style="margin: auto; width: 98%; max-width: 98%; max-height: 500px;;min-height: 500px;">
         <source :src="videoUrl1" type="video/mp4"> 
       </video>
     </div>
     <div class="GroupXcp3">
       <video controls autobuffer style="margin: auto; width: 98%; max-width: 98%; max-height: 400px;min-height: 400px;">
         <source :src="videoUrl2" type="video/mp4"> 
       </video>
     </div>
     <div class="GroupXcp4">
       <video controls autobuffer style="margin: auto; width: 98%; max-width: 98%; max-height: 400px;min-height: 400px;">
         <source :src="videoUrl3" type="video/mp4"> 
       </video>
     </div>
  </div>
</template>

<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
import { videoPlayer } from 'vue-video-player'
import video from "../../assets/js/Video.js"


export default {
  data(){
    return{
      ip:ip.ip,
      m2:"8abe94755f766ecb015f76c83c8a0001",
      videoUrl1:"",
      videoUrl2:"",
      videoUrl3:"",
    }
  },
  created(){
    var menu3 = this.getMenu3(this.m2,1,3);
    if (menu3.length>0){
      this.videoUrl1 = this.ip+ "/"+menu3[0].videoUrl;
      if(menu3[0].mediaType == "2"){
        this.videoUrl1 = menu3[0].videoOutUrl;
      }
    }
    if (menu3.length>1){
      this.videoUrl2 = this.ip+ "/"+menu3[1].videoUrl;
      if(menu3[1].mediaType == "2"){
        this.videoUrl2 = menu3[1].videoOutUrl;
      }
    }
    if (menu3.length>2){
      this.videoUrl3 = this.ip+ "/"+menu3[2].videoUrl;
      if(menu3[2].mediaType == "2"){
        this.videoUrl3 = menu3[2].videoOutUrl;
      }
    }
    

  },
  methods:{
    getMenu3(newsClassID,currentPage,pageSize){
      
		  var params = {"newsClassID":newsClassID,"currentPage":currentPage,"pageSize":pageSize};
		  var url = ip.ip + "/news/getDataList";
      var data = ajaxSpringBeanCommonFunction(url,params);
      // console.log(JSON.stringify(data));
      return data.rows;
      
    }
  }


}
</script>


<style scoped>
.GroupXcp{
  flex: 8;
  widows: 100px;
  height: 100px;
  padding-bottom: 120px;
}
.bt{
  width: 96%;
  margin: auto;
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0 20px 25px;
}
.GroupXcp2{
  width: 100%;
  height: 500px;
  background-size: 100%;
}
.GroupXcp3{
  width: 49%;
  margin-top: 20px;
  height: 400px;
  float: left;
  background-size: 100%;
}
.GroupXcp4{
  width: 49%;
  margin-top: 20px;
  height: 400px;
  float: right;
  background-size: 100%;
}


</style>