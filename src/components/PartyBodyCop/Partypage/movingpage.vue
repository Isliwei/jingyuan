<template>
  <div class="movingpage">
    <head-nav></head-nav>
    <imgHead></imgHead>
    
    <div class="pageTest">
       <headDhdw></headDhdw>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "../../../head";
import imgHead from "../../publicCop/imgHead";
import headDhdw from "./headDhdw";
import Foot from "../../../Foot";


export default {
  components:{
    HeadNav,
    imgHead,
    headDhdw,
    Foot,
  },
  data(){
    return{
      msg:'据悉，本此培训课班培训时长为三天，深度学习了《深学笃用习近平新时代中国特色社会主义思想》、《坚定中国特色社会主义道路自信》、《坚定理想信念，共圆中国梦想》、《仁爱精神及其对党员干部的启示》、《基层党建工作实务》等课程，由渝北区委党校、渝北区城乡建委等相关负责人、讲师进行课程讲解。 ',
    }
  }
}
</script>

<style scoped>
.pageTest{
  width: 80%;
  margin: auto;
  margin-top: 20px;
  height: 50px;
}
.pageTest h3{
  line-height: 35px;
}
.pageTest p{
  width: 80%;
  margin: auto;
  text-align: left;
  line-height: 30px;
}
img{
  width: 700px;
  height: 350px;
}
</style>
