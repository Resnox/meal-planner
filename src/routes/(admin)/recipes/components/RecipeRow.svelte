<script lang="ts">
	import type { Recipe } from '$lib/types';

	let { recipe = $bindable() }: { recipe: Recipe } = $props();
</script>

<div>
	<span class="text-lg font-bold">
		Name
	</span>
	<span>
		{recipe.name}
	</span>
</div>