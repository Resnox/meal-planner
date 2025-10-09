<script lang="ts">
	import Breadcrumb from '$components/breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from '$components/breadcrumb/BreadcrumbItem.svelte';
	import Table from '$components/table/Table.svelte';
	import TableHeader from '$components/table/TableHeader.svelte';
	import TableRow from '$components/table/TableRow.svelte';
	import TableHeaderCell from '$components/table/TableHeaderCell.svelte';
	import TableBody from '$components/table/TableBody.svelte';
	import TableBodyCell from '$components/table/TableBodyCell.svelte';
	import Icon from '@iconify/svelte';
	import Button from '$components/Button.svelte';
	import { Color } from '$lib/color';
	import TextInput from '$components/input/TextInput.svelte';
	import type { Product } from '$lib/types';
	import ProductRow from '$src/routes/(admin)/products/components/ProductRow.svelte';

	let { data } = $props();

	let products: Product[] = $state(data.products);
	let tmpProduct: Product = $state({id: undefined, name: '', unit: undefined});
</script>

<Breadcrumb>
	<BreadcrumbItem home href="/">Home</BreadcrumbItem>
	<BreadcrumbItem>Products</BreadcrumbItem>
</Breadcrumb>

<Table>
	<TableHeader>
		<TableRow>
			<TableHeaderCell>Name</TableHeaderCell>
			<TableHeaderCell>Actions</TableHeaderCell>
		</TableRow>
	</TableHeader>
	<TableBody>
		{#each products as product, index (product.id)}
			<ProductRow {product} onDelete={() => products = products.toSpliced(index, 1)}/>
		{/each}
		<TableRow>
			<TableBodyCell>
				<TextInput name="name" bind:value={tmpProduct.name} />
			</TableBodyCell>
			<TableBodyCell class="flex justify-end gap-1">
				<Button color={Color.blue} onclick={() => createProduct(tmpProduct)} disabled={tmpProduct.name === ''}>
					Create <Icon icon="mdi:plus" />
				</Button>
			</TableBodyCell>
		</TableRow>
	</TableBody>
</Table>