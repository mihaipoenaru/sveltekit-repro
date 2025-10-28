<script lang="ts">
    import {func} from "../repro.remote";

    const b = $derived(func())
</script>

Sub-route: {(await b).success}