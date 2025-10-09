import { products } from './product';
import { recipes } from './recipe';
import { recipeIngredient, recipeRelations, productsRelations } from './recipes_ingredient';

export default {
	products,
	recipes,
	recipeRelations,
	productsRelations,
	recipeProducts: recipeIngredient
};
