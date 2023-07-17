<template>
  <van-floating-bubble icon="setting-o" axis="xy" magnetic="x" teleport="body" @click="showTools = !showTools"/>
  <ToolList v-model:showTools="showTools"/>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ToolList from './ToolList.vue';
const showTools = ref(false)
</script>
<style lang="less" scoped>
</style>
