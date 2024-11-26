<script setup lang="ts">
console.log("header");
</script>

<template>
	<header class="h-[90px] py-5 sticky top-0">
		<NuxtLayout name="container">
			<nav class="">
				<ul class="flex gap-2">
					<li><NuxtLink to="/" class="">About</NuxtLink></li>
					<li><NuxtLink to="/">Post 1</NuxtLink></li>
					<li><NuxtLink to="/">Post 2</NuxtLink></li>
				</ul>
			</nav>
		</NuxtLayout>
	</header>
	<slot />
	<footer>
		<p>Footer</p>
	</footer>
</template>

<style scoped></style>
