<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet, class?: string } = $props();
</script>

<td class={twMerge("px-2 py-1 border border-gray-200", className)}>
	{@render children?.()}
</td>