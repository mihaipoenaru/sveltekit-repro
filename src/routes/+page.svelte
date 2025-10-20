<script lang="ts">
	import { reproRemote } from './repro.remote';
	import ReproComp from '$lib/ReproComp.svelte';

	const { value, ...others } = reproRemote.fields.surname.as('text');
</script>

<form {...reproRemote}>
	<ReproComp {...reproRemote.fields.name.as('text')} class="border" />

	<p>with value removed: {value}</p>
	<ReproComp {...others} class="border" />
</form>
