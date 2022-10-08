<!-- <script setup> 中的代码会在每次组件实例被创建的时候执行。 -->
<script setup lang="ts">
import { ref, reactive, toRef, onMounted } from 'vue';
import ljRequest from '../../request';
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
    });
};

const color = toRef(data, 'color');

onMounted(() => {
  doRequest();
});
</script>

<template>
  <div>home{{ count }}</div>
</template>

<style lang="scss" scoped></style>
