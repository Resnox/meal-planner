<script lang="ts">
	let {value = $bindable(), keyId = 'id', keyValue = 'value', loadOptions}: {value: unknown, keyId: string, keyValue: string, loadOptions: () => Promise<unknown[]>} = $props();
</script>

{#await loadOptions()}
	<span>Loading</span>
{:then options}
	<select bind:value>
		{#each options as option (option[keyId])}
			<option value={option}>{option[keyValue]}</option>
		{/each}
	</select>
{/await}