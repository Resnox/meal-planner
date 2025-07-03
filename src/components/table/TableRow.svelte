<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet, class?: string } = $props();
</script>

<tr class={twMerge("even:bg-gray-100 border-y border-gray-200", className)}>
	{@render children()}
</tr>