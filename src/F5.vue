<template>
  <div></div>
</template>

<script>
export default {
  name: "f5",
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (from.name) {
        vm.$nextTick(() =>
          vm.$router.push({ name: from.name, query: from.query })
        );
      }
    });
  }
};
</script>

<style>
</style>