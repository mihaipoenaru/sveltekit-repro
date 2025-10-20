<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	const { value, ...others }: HTMLInputAttributes = $props();
	$inspect(others)
</script>

<div>
	<input class="border" {...others} />
	<div id="asdf" class="">{value}</div>
</div>
