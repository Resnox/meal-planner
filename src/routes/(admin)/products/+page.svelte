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
	import type { CreateProduct, UpdateProduct } from '$lib/types';
	import Product from '$src/routes/(admin)/products/components/ProductRow.svelte';

	let { data } = $props();

	let tmpProduct: CreateProduct = {};

	async function createProduct(product: CreateProduct) {
		const newProduct = await fetch(`/api/products/`, { method: 'POST', body: JSON.stringify(product) }).then(response => response.json());
		data.products = [...data.products, newProduct];
	}

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
		{#each data.products as product(product.id)}
			<Product {product}/>
		{/each}
		<TableRow>
			<TableBodyCell>
				<TextInput name="name" bind:value={tmpProduct.name} />
			</TableBodyCell>
			<TableBodyCell class="flex justify-end gap-1">
				<Button color={Color.blue} onclick={() => createProduct(tmpProduct)}>
					<Icon icon="mdi:plus" />
				</Button>
			</TableBodyCell>
		</TableRow>
	</TableBody>
</Table>

<Button color={Color.blue} href="/products/new">
	<Icon icon="mdi:plus" />
	Create
</Button>