<template>
  <div class="main-page">
    <div class="sidebar">
    <SidbarApp/>
    </div>
    <div class="router-view">
    <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
  import SidbarApp from './components/SidebarApp/SidbarApp.vue';
</script>

<style  scoped>
   .main-page{
    display: flex;
    gap: 30px;
   }
  .sidebar{
    width: 25%;
    background-color: aliceblue;
    height: 100vh;
    position: sticky;
    top: 0;
  }
  .router-view{
    width: 80%;
  }
</style>