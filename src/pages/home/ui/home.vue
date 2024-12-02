<script setup lang="ts">
import { useAllCandles } from "~/shared/hooks/useAllCandles";
const { data, isLoading, isError, isPlaceholderData, suspense } =
	useAllCandles();
console.log("candles", data);
await suspense();
</script>

<template>
	<div v-if="isPlaceholderData || isLoading">Loading...</div>
	<div v-else-if="isError" class="">ошибка во время загрузки данных</div>
	<ul v-else>
		<ul v-for="todo in data" :key="todo.id">
			<NuxtLink :to="`/catalog/${todo.id}`">{{ todo.title }}</NuxtLink>
		</ul>
	</ul>
</template>
