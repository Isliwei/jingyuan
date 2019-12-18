<template>
  <div class="GroupIntroduction">
    <head-nav :class="{ 'isGroup': isNowPage }"></head-nav>
    <imgHead></imgHead>
    <group-body></group-body>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import imgHead from "../../components/publicCop/imgHead";
import GroupBody from "@/components/GroupBody";
import Foot from "@/Foot";

export default {
  components:{
     HeadNav,
     imgHead,
     GroupBody,
     Foot,
   },
  data(){
    return{
      isNowPage:true,
    }
  }
}
</script>
