<script>
	import '../app.css';
	import Title from './lib/Title.svelte';
</script>

<header class="mt-10">
	<Title title='Ninja Gaming Guides'/>
</header>

<main class="container mx-auto mt-10">
	<slot />
</main>

<footer class="text-center mt-20">
	<p>Copyright 2022 Pixel Guides</p>
</footer>