<template>
  <div class="GroupBody">
    <my-Sidebar></my-Sidebar>
    <!-- <menu2></menu2> -->
    <!-- <menu3></menu3> -->
  
  </div>
</template>

<script>
import menu2 from  "./publicCop/menu2"
import menu3 from  "./publicCop/menu3"


export default {
  components:{
    menu2,
    menu3,

   },
   data(){
     return{
       isNowli:true,
     }
   }
}
</script>

<style scoped>
.GroupBody{
  width: 80%;
  min-width: 1440px;
  margin: auto;
  margin-top: 20px;
}
</style>