<!-- <script setup> 中的代码会在每次组件实例被创建的时候执行。 -->
<script setup lang="ts">
import { ref, reactive, toRef, onMounted, onBeforeUnmount } from 'vue';
import ljRequest from '../../request';
import bus from '@/libs/bus';
import Toast from '@/libs/Toast';
interface Props {
  msg?: string;
  labels?: string[];
}

withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
});

// 变量
const count = ref(0);

const data = reactive({
  color: 'black',
});

const doRequest = () => {
  ljRequest
    .get({
      url: '/api/example',
    })
    .then((res) => {
      console.log(res);
    })
    .finally(() => {
      bus.emit('requestOk', {
        ok: true,
      });
    });
};

const color = toRef(data, 'color');
const requestOk = (params: any) => {
  Toast(JSON.stringify(params));
};
onMounted(() => {
  bus.on('requestOk', requestOk);
  doRequest();
});
onBeforeUnmount(() => {
  bus.off('requestOk', requestOk);
});
</script>

<template>
  <div>home{{ count }}</div>
  <svg-icon name="like"> </svg-icon>
  <svg-icon name="unLike"> </svg-icon>
</template>

<style lang="scss" scoped></style>
