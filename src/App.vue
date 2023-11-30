<script>
/* JS App */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
  data() {
    return {
      /* Richiama store per utilizzare il file store.js come state management */
      store,
    }
  },
  mounted() {
    /* All'avvio dell'app lancia tali funzioni */
    this.getBrewShop();
  },
  methods: {

    /* Funzione che interroga l'API e mostra il risultato data all'interno della console  */
    getBrewShop() {
      axios.get(this.store.brewApi).then(result => {
        console.log(result.data)
        this.store.brewShops = result.data
      });
    },

  }
}
</script>

<template>
  <!-- HTML App -->
  <h1>Vite + Vue Template</h1>
</template>

<style scoped>
/* CSS App */
</style>
