<script setup>
import { ref } from 'vue';
import VueTutorialComponent from '@/components/VueTutorialComponent.vue';

const greeting = ref('Hello from parent');
const childMsg = ref('No child msg yet');
</script>
<template>
    <p>{{childMsg}}</p>
    <VueTutorialComponent v-on:response="(msg) => childMsg = msg" :msg="greeting" />
</template>

