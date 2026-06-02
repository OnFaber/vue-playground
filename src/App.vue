<script setup>

</script>
<template>
    <p><span>Current route path:</span> {{ $route.fullPath }}</p>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/vue-tutorial">Vue tutorial</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style>
a {
    margin: .5rem;
}
</style>
