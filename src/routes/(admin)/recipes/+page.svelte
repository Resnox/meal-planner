<script lang="ts">
	import Breadcrumb from '$components/breadcrumb/Breadcrumb.svelte';
	import BreadcrumbItem from '$components/breadcrumb/BreadcrumbItem.svelte';
	import type { Recipe } from '$lib/types';
	import RecipeRow from './components/RecipeRow.svelte';
	import RecipeForm from './components/RecipeForm.svelte';

	let { data } = $props();

	let recipes: Recipe[] = $state(data.recipes);
</script>

<Breadcrumb>
	<BreadcrumbItem home href="/">Home</BreadcrumbItem>
	<BreadcrumbItem>Recipes</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-xl font-bold">Recipes</h1>

<div class="rounded-md border-1 border-neutral-200 shadow p-4">
	<span>New recipe</span>
	<RecipeForm/>
</div>

<div class="rounded-md border-1 border-neutral-200 shadow p-4">
	<span>My recipes</span>
	{#each recipes as recipe (recipe.id)}
		<RecipeRow {recipe}/>
	{/each}
</div>