<template>
  <div class="index">
    <head-nav :class="{ isIndex: isNowPage }"></head-nav>
    <Scrolling></Scrolling>
    <Index-Body></Index-Body>
    <!-- <Company></Company> -->
    <Foot></Foot>
  </div>
</template>

<script>
import HeadNav from "@/head";
import Scrolling from "@/components/indexBodyCop/scrolling";
import IndexBody from "@/components/indexBody";
// import Company from "@/components/indexBodyCop/Company";
// import Service from "../../components/indexBodyCop/Service";
import Foot from "@/Foot";

export default {
  components: {
    HeadNav,
    Scrolling,
    IndexBody,
    // Company,
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
