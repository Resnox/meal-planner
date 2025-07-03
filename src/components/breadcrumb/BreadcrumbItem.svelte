<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from '@iconify/svelte';

	let { children, href, home = false }: { children?: Snippet, href?: string, home?: boolean } = $props();
</script>

{#snippet content(child_content: undefined | Snippet)}
	{#if href}
		<a {href} class="flex gap-1 items-center">
			{@render child_content?.()}
		</a>
	{:else}
		<div class="flex gap-1 items-center">
			{@render child_content?.()}
		</div>
	{/if}
{/snippet}

{#if home}
	<div class="flex gap-1 items-center">
		{#snippet home_content()}
			<Icon icon="mdi:home"/>
			{@render children?.()}
		{/snippet}

		{@render content(home_content)}
	</div>
{:else}
	<Icon icon="mdi:chevron-right" class="text-gray-500"/>

	{@render content(children)}
{/if}