<script lang="ts">
	import TextInput from '$components/input/TextInput.svelte';
	import type { Product } from '$lib/types';
	import TableBodyCell from '$components/table/TableBodyCell.svelte';
	import Button from '$components/Button.svelte';
	import Icon from '@iconify/svelte';
	import { Color } from '$lib/color';
	import TableRow from '$components/table/TableRow.svelte';

	let { product = $bindable(), onUpdate = undefined, onDelete = undefined }: { product: Product, onUpdate?: () => void, onDelete?: () => void } = $props();
	let edit = $state(false);

	async function updateProduct(): Promise<Product> {
		const updatedProduct = await fetch(`/api/products/${product.id}`, { method: 'POST', body: JSON.stringify(product) }).then(response => response.json());
		onUpdate?.();
		return updatedProduct;
	}

	async function deleteProduct(): Promise<void> {
		await fetch(`/api/products/${product.id}`, { method: 'DELETE' });
		onDelete?.();
	}
</script>

<TableRow>
	<TableBodyCell>
		{#if edit}
			<TextInput name="name" bind:value={product.name}/>
		{:else}
			<span>{product.name}</span>
		{/if}
	</TableBodyCell>
	<TableBodyCell class="flex justify-end gap-1">
		{#if edit}
			<Button color={Color.green} onclick={updateProduct}>
				<Icon icon="mdi:pencil" />
			</Button>
		{:else}
			<Button color={Color.blue}>
				<Icon icon="mdi:pencil" />
			</Button>
			<Button color={Color.red} onclick={deleteProduct}>
				<Icon icon="mdi:close" />
			</Button>
		{/if}
	</TableBodyCell>
</TableRow>