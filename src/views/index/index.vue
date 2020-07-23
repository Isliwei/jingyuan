<template>
  <div class="index">
    <head-nav :class="{ isIndex: isNowPage }"></head-nav>
    <Scrolling></Scrolling>
    <Index-Body></Index-Body>
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import Scrolling from "@/components/indexBodyCop/scrolling";
import IndexBody from "@/components/indexBody";
// import Service from "../../components/indexBodyCop/Service";
import Foot from "@/Foot";

export default {
  components: {
    HeadNav,
    Scrolling,
    IndexBody,
    //  Service,
    Foot
  },
  data() {
    return {
      isNowPage: true
    };
  }
};
</script>
<style></style>
