export interface Product {
	id: number | null;
	name: string;
	unit: string | null;
}

export interface Recipe {
	id: number | null;
	name: string;
	ingredients: RecipeIngredient[];
}

export interface RecipeIngredient {
	id: number | null;
	product: Product;
	quantity: number;
}