<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // this.$router.push("/shaozi");
  }
};
</script>
<style>
   
#app{
  box-sizing: border-box;
}
.layout-row {
  display: flex;
  flex-direction: row;
}
.layout-col {
  display: flex;
  flex-direction: column;
}
</style>
