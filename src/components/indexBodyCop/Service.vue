<template>
  <div class="Service">
    <div class="ServiceBt">
      <p class="CnPbt">招商服务大厅</p>
      <p class="EgPbt">SETTLED ENTERPRISE</p>
    </div>
    
    <div class="ServiceTx">
      
      <div v-for="v in menu2" :key="v.i" class="Tx Txdiv1">
<!--        <a :href="'/news#/news?id='+'8abe94755ffc68f4015ffc74d3de0003'+'&m2='+v.ID" @click="reload()">-->
	        <router-link 
	        	:to="{ name: 'NewsCenter', query:{ id:'8abe94755ffc68f4015ffc74d3de0003',m2:v.ID} }">
        		<h2>{{v.ClassName}}</h2>
        	</router-link>
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
      menu2:[],
    }
  },
  created(){
    this.menu2 = this.$parent.getMenu2("8abe94755ffc68f4015ffc74d3de0003");
  },
  watch: {
  	$route (to, from) {
  		if (to.name === from.name) {
  			this.$router.push({ name: 'F5' });
  		}
  	}
  },
  methods:{
    reload(){
      window.setTimeout(function (){
        window.location.reload();
      },50);
    },

  },
}
</script>

<style scoped>
.Service{
  width: 100%;
  min-width: 1440px;
  margin: auto;
  display: flex;
  margin-top: 30px;
  flex-direction:column;
  padding-bottom: 120px;
}
.ServiceBt{
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
}
.ServiceBt p{
  text-align: center;
}
.CnPbt{
  margin: auto;
  font-size:20px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color:rgba(18,18,18,1);
  line-height:26px;
  margin-top: 35px;
}
.EgPbt{
  margin: auto;
  font-size:20px;
  font-family:MicrosoftYaHei-Bold;
  font-weight:bold;
  color: rgba(197, 185, 185, 0.3);
  line-height:26px; 
  letter-spacing:1px;
  position: relative;
  bottom: 10px;
}
.ServiceTx{
  width: 100%;
  display: flex;
  margin-left: 10px;
}
.Tx{
  flex: 1;
  width: 13%;
  margin: 10px;
  height: 110px;
  background-size: 100%;
  background-image: url(../../assets/imgs/xz.jpg);
  filter: opacity(95%);
}
.Tx:hover{
  filter: opacity(100%)
}
.Txdiv1{
  margin-left: 0;
}
.Txdiv7{
  margin-right: 0;
}
h2{
  font-size: 19px;
  color: aliceblue;
  margin-top: 40px;
  text-align: center;
}
</style>