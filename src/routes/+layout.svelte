<script lang="ts">
	import '../app.css';
	import Header from '$src/components/Header.svelte';

	let { children } = $props();
</script>

<div class="container mx-auto">
	<Header />
	{@render children()}
</div>
