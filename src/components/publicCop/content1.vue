<template>
  <div class="GroupData" v-html="this.$parent.menu3_v.content">
  </div>
</template>
<script>
import {ajaxSpringBeanCommonFunction} from "../../assets/js/util.js"
import ip from "../../assets/js/api.js"
</script>

<style scoped>

.GroupData{
  width: 82%;
  float: right;
}

</style>
