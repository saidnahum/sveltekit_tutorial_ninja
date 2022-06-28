<script>
	import '../../app.css';
	import Title from '../lib/Title.svelte';
</script>

<header class="bg-[#2f1c43] py-2">
	<div class="container mx-auto flex justify-between items-center">
		<Title title="Ninja Gaming Guides" />
		<nav class="flex justify-center space-x-5">
			<a class="border-b text-xl" href="/">Home</a>
			<a class="border-b text-xl" href="/about">About</a>
			<a class="border-b text-xl" href="/guides">Guides</a>
		</nav>
	</div>
</header>

<main class="container mx-auto mt-10">
	<slot />
</main>

<footer class="text-center mt-20">
	<p>Copyright 2022 Pixel Guides</p>
</footer>
