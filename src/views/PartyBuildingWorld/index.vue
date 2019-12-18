<template>
  <div class="PartyBuildingWorld">
    <head-nav :class="{ 'isParty': isNowPage }"></head-nav>
    <imgHead></imgHead>
    <PartyBody></PartyBody>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import imgHead from "../../components/publicCop/imgHead";
import PartyBody from "@/components/PartyBody";
import Foot from "@/Foot";

export default {
  components:{
     HeadNav,
     imgHead,
     PartyBody,
  
     Foot,
   },
  data(){
    return{
      isNowPage:true,
    }
  }
}
</script>
