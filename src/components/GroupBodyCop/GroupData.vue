<template>
  <div class="GroupData" id="GroupData" v-html="this.$parent.menu3_v.rows[0].content">
  </div>
</template>

<script>
import ip from "../../assets/js/api.js"
export default {
  data(){
    return{ 
    	imgSources:''
    }
  },
}
</script>


<style scoped>
.GroupData{
  flex: 8;
  padding-bottom: 120px;
}
.tpKz{
  width: 96%;
  margin: auto;
  margin-top: 10px;
  height: 510px;
}
.Q{
  width: 70%;
  height: 500px;
  float: left;
}
.W{
  width: 28%;
  height: 240px;
  float: right;
}
.E{
  width: 28%;
  height: 240px;
  margin-top: 20px;
  float: right;
}
.bt{
  width: 96%;
  margin: auto;
  text-align: left;
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0 20px 25px;
}
.wb{
  width: 96%;
  margin: auto;
  position: relative;
  line-height: 25px;
}
.wb p{
  text-align: left;
}
img{
  width: 100%;
  height: 100%;
}

</style>