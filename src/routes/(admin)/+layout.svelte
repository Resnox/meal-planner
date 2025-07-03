<script lang="ts">
	import { page } from '$app/state';

	let { children } = $props();
</script>

{#if !page.data.session}
	<h1>Access Denied</h1>
{:else}
	{@render children()}
{/if}
