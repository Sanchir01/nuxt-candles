<script setup lang="ts">
const { params } = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(params.id);
</script>

<template>
	{{ params.id }}
    ho
    <NuxtLink :to="`/`">go home</NuxtLink>
</template>
