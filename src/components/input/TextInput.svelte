<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, name, placeholder, value = $bindable() }: { children?: Snippet, name: string, placeholder?: string, value: string } = $props();
</script>

<div class="flex flex-col">
	<label for={name} class="text-gray-600">{@render children?.()}</label>
	<input type="text" name={name} class="rounded-lg shadow border border-gray-300 p-1" bind:value {placeholder}/>
</div>