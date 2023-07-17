<template>
  <van-action-sheet
    v-model:show="showTools"
    :close-on-click-action="false"
    cancel-text="关闭"
  >
    <div>
      <van-cell-group>
        <van-cell size="large" @click="onSelect(item, index)" :title="item.name" v-for="(item, index) in options" :key="item.name">
          <template #right-icon>
            <van-switch v-model="item.checked" v-if="item.value === 'vconsole'"/>
            <van-icon name="replay" v-if="item.value === 'refresh'"/>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </van-action-sheet>
  <Mock v-model:show="showMock"/>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import Mock from './mock.vue';
const props = defineProps({
  showTools: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:showTools']);
const options = ref([
  { value: 'vconsole', name: 'VConsole', checked: false },
  { value: 'refresh', name: '重新加载', checked: false },
  { value: 'mock', name: 'Mock请求', checked: false },
]);
const showTools = computed({
  get() {
    return props.showTools;
  },
  set(val) {
    emit('update:showTools', val);
  }
})
const showMock = ref(false);

const script = document.createElement('script');
script.src = 'https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.1/vconsole.min.js';
document.body.appendChild(script);
const onSelect = (option: any, index: number) => {
  if (option.value === 'vconsole') {
    const checked = options.value[index].checked = !options.value[index].checked;
    if (checked && !window._VConsole) {
      window._VConsole = new window.VConsole();
    } else {
      window._VConsole?.destroy?.();
      window._VConsole = null;
    }
  } else if (option.value === 'refresh') {
    location.reload();
  } else if (option.value === 'mock') {
    showMock.value = true;
  }
}
</script>
<style lang="less" scoped>

</style>
