<template>
  <div class="Group">
    <!--<a :href="'/news#/news?id='+'8abe94755f281266015f283bd72e0000'">
    <div class="GroupImg">
      <p class="CnPbt">集团简介</p>
      <p class="EgPbt">GROUP INTRODUCTIONG</p>
    </div>
    </a>-->
    
    <router-link 
    	:to="{ name: 'NewsCenter', query:{ id:'8abe94755f281266015f283bd72e0000'} }"
    	>
      <div class="GroupImg">
      	<p class="CnPbt">集团简介</p>
      	<p class="EgPbt">GROUP INTRODUCTIONG</p>
    	</div>
    </router-link >
  </div>
</template>

<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"

export default {
  data(){
    return{

    }
  },
  created(){

  },
}
</script>



<style scoped>
.Group{
  width: 100%;
  max-width: 100%;
  height: 240px;
  background-repeat:no-repeat;
}
.GroupImg{
  width: 100%;
  height: 240px;
  background-image: url(../../assets/imgs/233.jpg);
  background-size: 100%;
  float: right;
}
.GroupImg p{
	text-align: center;
}
.CnPbt{
  margin: auto;
  font-size:20px;
  font-weight: bold;
  font-family:MicrosoftYaHei;
  color:rgba(255,255,255,1);
  line-height:26px;
  margin-top: 90px;
}
.EgPbt{
  margin: auto;
  font-size:20px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(255,255,255,0.3);
  line-height:26px; 
  letter-spacing:1px;
  position: relative;
  bottom: 10px;
}


</style>