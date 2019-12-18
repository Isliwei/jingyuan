<template>
  <div class="InJrCop">
    <div class="InJrCopDiv">
      <img src="../../assets/imgs/xz.jpg" />
      <div>
        <p>中国银行信贷产品</p>
        
      </div>
    </div>
    <div class="InJrCopDiv">
      <img src="../../assets/imgs/xz.jpg" />
      <div>
        <p>中国银行信贷产品</p>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>
<style>
.InJrCop{
  display: flex;
}
.InJrCopDiv{
  flex: 5;
}
.InJrCopDiv p:nth-child(1){
  font-size: 18px;
  font-weight: bold;
}
.InJrCopDiv img{
  width: 90%;
  margin: auto;
  margin-right: 40px;
  margin-top: 20px;
}
.InJrCopDiv p{
  width: 90%;
  margin: auto;
  text-align: left;
  line-height: 30px;
}
</style>

