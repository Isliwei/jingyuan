<template>
  <div class="InvestmentServiceHall">
    <head-nav :class="{ 'isHall': isNowPage }"></head-nav>
    <imgHead></imgHead>
    <InBody></InBody>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import imgHead from "@/components/publicCop/imgHead.vue";
import InBody from "@/components/InBody";
import Foot from "@/Foot";

export default {
  components:{
     HeadNav,
     imgHead,
     InBody,
     Foot,
   },
  data(){
    return{
      isNowPage:true,
    }
  }
}
</script>
