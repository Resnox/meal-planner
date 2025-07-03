<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet, class?: string } = $props();
</script>

<tr class={twMerge("even:bg-gray-100", className)}>
	{@render children()}
</tr>