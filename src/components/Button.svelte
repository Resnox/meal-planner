<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Color } from '$lib/color';

	let {children, href, color, onclick = () => {}}: {children: Snippet, href?: string, color: Color, onclick?: () => void} = $props();

	const colorClasses: Record<Color, string> = {
		[Color.red]: 'bg-red-500 hover:bg-red-700',
		[Color.orange]: 'bg-orange-500 hover:bg-orange-700',
		[Color.amber]: 'bg-amber-500 hover:bg-amber-700',
		[Color.yellow]: 'bg-yellow-500 hover:bg-yellow-700',
		[Color.lime]: 'bg-lime-500 hover:bg-lime-700',
		[Color.green]: 'bg-green-500 hover:bg-green-700',
		[Color.emerald]: 'bg-emerald-500 hover:bg-emerald-700',
		[Color.teal]: 'bg-teal-500 hover:bg-teal-700',
		[Color.cyan]: 'bg-cyan-500 hover:bg-cyan-700',
		[Color.sky]: 'bg-sky-500 hover:bg-sky-700',
		[Color.blue]: 'bg-blue-500 hover:bg-blue-700',
		[Color.indigo]: 'bg-indigo-500 hover:bg-indigo-700',
		[Color.violet]: 'bg-violet-500 hover:bg-violet-700',
		[Color.purple]: 'bg-purple-500 hover:bg-purple-700',
		[Color.fuchsia]: 'bg-fuchsia-500 hover:bg-fuchsia-700',
		[Color.pink]: 'bg-pink-500 hover:bg-pink-700',
		[Color.rose]: 'bg-rose-500 hover:bg-rose-700',
		[Color.slate]: 'bg-slate-500 hover:bg-slate-700',
		[Color.gray]: 'bg-gray-500 hover:bg-gray-700',
		[Color.zinc]: 'bg-zinc-500 hover:bg-zinc-700',
		[Color.neutral]: 'bg-neutral-500 hover:bg-neutral-700',
		[Color.stone]: 'bg-stone-500 hover:bg-stone-700',
	}
</script>

<a class="p-1 {colorClasses[color]} shadow transition-colors text-white rounded-lg inline-flex items-center gap-1" {href} {onclick}>
	{@render children?.()}
</a>