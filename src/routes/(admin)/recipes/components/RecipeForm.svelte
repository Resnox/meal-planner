<script lang="ts">
	import type { Product, Recipe } from '$lib/types';
	import TextInput from '$components/input/TextInput.svelte';
	import Button from '$components/Button.svelte';
	import { Color } from '$lib/color';
	import Select from '$components/input/Select.svelte';
	import { createProduct, createRecipe, getProducts } from '$lib/api';

	let recipe: Recipe = $state({id: undefined, name: '', ingredients: []});

	function addIngredient() {
		recipe.ingredients.push({id: undefined, product: { id: undefined, name: '', unit: undefined }, quantity: 1})
	}

	function create() {
		createRecipe(recipe);
	}

	async function saveIngredient(index: number)
	{
		recipe.ingredients[index].product = (await createProduct(recipe.ingredients[index].product))[0];
	}
</script>

<form>
	<TextInput name="name" bind:value={recipe.name}>Name</TextInput>
	<div class="flex flex-col gap-1">
		{#each recipe.ingredients as ingredient, index (index)}
			<div class="flex *:flex-1">
				{#if !ingredient.product.id}
					<div class="rounded shadow p-2 flex flex-col">
						<span class="font-bold">Add existing</span>
						<Select keyId="id" keyValue="name" loadOptions={getProducts} bind:value={ingredient.product}/>
					</div>
					<div class="rounded shadow p-2 flex flex-col">
						<span class="font-bold">Create new</span>
						<TextInput name="ingredient_name" bind:value={ingredient.product.name}>Name</TextInput>
						<TextInput name="ingredient_unit" bind:value={ingredient.product.unit}>Unit</TextInput>
						<Button color={Color.blue} onclick={() => saveIngredient(index)}>Add</Button>
					</div>
				{:else}
					<div class="flex *:flex-1">
						<div class="flex flex-col">
							<span class="text-gray-600">Product</span>
							<span class="italic">
								{ingredient.product.name}
							</span>
						</div>
						<TextInput bind:value={ingredient.quantity}>Quantity</TextInput>
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<Button color={Color.blue} onclick={addIngredient}>Add an ingredient</Button>
	<Button color={Color.green} onclick={create}>Create</Button>
</form>