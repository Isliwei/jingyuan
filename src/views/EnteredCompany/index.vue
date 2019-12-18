<template>
  <div class="EnteredCompany">
    <head-nav :class="{ 'isEntered': isNowPage }"></head-nav>
    <imgHead></imgHead>
    <EnteredBody></EnteredBody>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import imgHead from "@/components/publicCop/imgHead"
import EnteredBody from "@/components/EnteredBody"
import Foot from "@/Foot";

export default {
  components:{
     HeadNav,
     imgHead,
     EnteredBody,
     Foot,
   },
  data(){
    return{
      isNowPage:true,
    }
  }
}
</script>
