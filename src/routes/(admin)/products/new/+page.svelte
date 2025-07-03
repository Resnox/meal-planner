<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import Breadcrumb from '$components/breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from '$components/breadcrumb/BreadcrumbItem.svelte';
	import TextInput from '$components/input/TextInput.svelte';

	let { data } = $props();

	const { form } = superForm(data.form);
</script>

<Breadcrumb>
	<BreadcrumbItem home href="/">Home</BreadcrumbItem>
	<BreadcrumbItem href="/products">Products</BreadcrumbItem>
	<BreadcrumbItem>New</BreadcrumbItem>
</Breadcrumb>

<form method="POST">
	<TextInput bind:value={$form.name} name="name">Name</TextInput>

	<div><button>Submit</button></div>
</form>