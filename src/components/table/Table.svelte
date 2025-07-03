<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet, class?: string } = $props();
</script>

<table class={twMerge("shadow w-full", className)}>
	{@render children()}
</table>