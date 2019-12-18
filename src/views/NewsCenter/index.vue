<template>
  <div class="NewsCenter">
    <head-nav></head-nav>
    <NewsBody></NewsBody>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import NewsBody from "@/components/NewsBody"
import Foot from "@/Foot";

export default {
  components:{
     HeadNav,
     NewsBody,
     Foot,
   },
  data(){
    return{
      isNowPage:true,
    }
  }
}
</script>
