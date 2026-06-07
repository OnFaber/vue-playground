<script setup lang="ts">
import { useSidebar } from './utils';

const { state, toggleSidebar } = useSidebar();

const props = defineProps<{
    brandUrl?: string,
    brandTitle?: string,
}>();

</script>
<template>
    <div class="header" :class="[`header__${state}`]">
        <div class="brand">
            <img alt="" :src="props.brandUrl" />
        </div>
        <h2>{{ brandTitle }}</h2>
        <button @click="toggleSidebar">
            <i class="pi pi-chevron-right"></i>
        </button>
    </div>
</template>
<style scoped lang="scss">
.header {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    &__collapsed h2 {
        opacity: 0;
        overflow: hidden;
    }

    &__expanded .pi-chevron-right {
        transform: rotate(180deg);
    }

}

.brand {
    padding: 0 6px;
    margin-right: 1.5rem;
}

h2 {
    white-space: nowrap;
    line-height: calc(1.75 / 1.25);
    font-size: 1.25rem;
    font-weight: 600;
    opacity: 1;
    transition: opacity .5s ease;
}

button {
    position: absolute;
    top: 15px;
    right: -28px;
    width: 25px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #1a1c23;
    background-color: #DFE278;
    cursor: pointer;
    appearance: none;
    outline: none;

    & .pi-chevron-right {
        transition: transform 0.5s ease;
        font-size: 1rem;
        color: #1a1c23;

    }
}
</style>
