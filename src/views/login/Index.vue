<!-- <script setup> 中的代码会在每次组件实例被创建的时候执行。 -->
<script setup lang="ts">
import { ref, reactive, toRef } from 'vue';
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

const color = toRef(data, 'color');
</script>

<template>
  <div>login{{ count }}</div>
</template>

<style lang="scss" scoped></style>
