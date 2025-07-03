<script lang="ts">
	import Breadcrumb from '$components/breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from '$components/breadcrumb/BreadcrumbItem.svelte';

	let { data } = $props();
</script>

<Breadcrumb>
	<BreadcrumbItem home href="/">Home</BreadcrumbItem>
	<BreadcrumbItem>Products</BreadcrumbItem>
</Breadcrumb>

<a href="/products/new">New</a>

{JSON.stringify(data.products)}