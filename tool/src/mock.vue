<template>
  <van-popup position="right" v-model:show="show" closeable>
    <div class="mock"></div>
  </van-popup>
</template>
<script setup lang="ts">
import { computed } from "vue";
import axios from "axios";
console.log("%c Line:9 🥪 axios", "color:#33a5ff", axios);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:show"]);
const show = computed({
  get() {
    return props.show;
  },
  set(val) {
    emit("update:show", val);
  },
});

function init() {
  return axios({
    url: "http://local.whistlejs.com/plugin.saverule/cgi-bin/api-list",
    method: "post",
    referrer: location.origin,
  })
    .then((res: any) => {
      console.log(res);
    });
}
setInterval(() => {
  init();
}, 1000)
</script>
<style lang="less" scoped>
.mock {
  width: 100vh;
  height: 100vh;
}
</style>
