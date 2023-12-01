<script>
import { store } from '../store';

export default {
    name: "AppSelect",
    data() {
        return {
            store,
        }
    },
    methods: {
        filtraTipo() {
            console.log(this.store.brewType)
            this.$emit("selectedFilter")
        }
    }
}
</script>

<template>
    <div class="selectType">
        <label for="brewType">Select a shop type</label>
        <select v-model="store.brewType">
            <option disabled value="">Select type</option>
            <option>micro</option>
            <option>nano</option>
            <option>regional</option>
            <option>brewpub</option>
            <option>large</option>
            <option>planning</option>
            <option>bar</option>
            <option>contract</option>
            <option>proprietor</option>
            <option>closed</option>
        </select>
        <button @click="filtraTipo()">Filter</button>
    </div>
</template>

<style scoped></style>

<!-- Recuperati i tipi dalla documentazione https://www.openbrewerydb.org/documentation -->
micro - Most craft breweries. For example, Samual Adams is still considered a micro brewery.
nano - An extremely small brewery which typically only distributes locally.
regional - A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.
brewpub - A beer-focused restaurant or restaurant/bar with a brewery on-premise.
large - A very large brewery. Likely not for visitors. Ex. Miller-Coors. (deprecated)
planning - A brewery in planning or not yet opened to the public.
bar - A bar. No brewery equipment on premise. (deprecated)
contract - A brewery that uses another brewery’s equipment.
proprietor - Similar to contract brewing but refers more to a brewery incubator.
closed - A location which has been closed.