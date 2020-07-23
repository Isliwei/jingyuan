<template>
  <div class="GroupBody">
    <my-Sidebar></my-Sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNowli: true
    };
  }
};
</script>

<style scoped>
.GroupBody {
  width: 80%;
  min-width: 1440px;
  margin: auto;
  margin-top: 20px;
}
</style>
