import type { Product, Recipe } from '$lib/types';

export async function createProduct(product: Product): Promise<Product> {
	return await fetch(`/api/products`, { method: 'POST', body: JSON.stringify(product) }).then(
		(response) => response.json()
	);
}

export async function getProducts(): Promise<Product[]> {
	return await fetch(`/api/products`).then((r) => r.json());
}

export async function createRecipe(recipe: Recipe): Promise<Recipe> {
	return await fetch(`/api/recipes`, { method: 'POST', body: JSON.stringify(recipe) }).then(
		(response) => response.json()
	);
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
	return await fetch(`/api/recipes/${recipe.id}`, { method: 'POST', body: JSON.stringify(recipe) }).then(response => response.json());
}

export async function deleteRecipe(recipe: Recipe): Promise<void> {
	await fetch(`/api/recipes/${recipe.id}`, { method: 'DELETE' });
}