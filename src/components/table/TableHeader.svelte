<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet, class?: string } = $props();
</script>

<thead class={twMerge("bg-gray-800 text-white", className)}>
	{@render children()}
</thead>