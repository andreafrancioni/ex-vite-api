<!-- JS App -->
<script>
/* Import package */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

/* Import components */
import AppCard from './components/AppCard.vue';

export default {
  data() {
    return {
      /* Richiama store per utilizzare il file store.js come state management */
      store,
      AppCard,
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

<!-- HTML App -->
<template>
  <h1>Vite + Vue Template</h1>
</template>

<!-- CSS App -->
<style scoped></style>
