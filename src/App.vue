<!-- JS App -->
<script>
/* Import package */
import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

/* Import components */
import AppCard from './components/AppCard.vue';
import AppSelect from './components/AppSelect.vue';

export default {
  components: {
    AppCard,
    AppSelect
  },

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
      /* Verifico, se la variabile brewType dentro store è popolata allora aggiungo la query all'api, altrimenti la richiamo senza aggiungere niente */

      let apiUrl = this.store.brewApi

      if (this.store.brewType != "") {
        apiUrl += `&by_type=${this.store.brewType}`;
      }
      axios.get(apiUrl).then(result => {
        console.log(result.data)
        this.store.brewShops = result.data
      });
    },

  }
}
</script>

<!-- HTML App -->
<template>
  <header>
    <!-- Richiama il componente AppSelect che va a richiamare la funzione getBrewShop quando si verifica l'evento emit selectedFilter -->
    <AppSelect @selectedFilter="getBrewShop" />
  </header>
  <main>
    <div class="container">
      <div class="brewShops">
        <!-- Per ogni shop nell'array mi genera un AppCard passandogli i dati con i props dall'array -->
        <AppCard v-for="brewSingleShop in this.store.brewShops" :shop="brewSingleShop" />
      </div>
    </div>
  </main>
</template>

<!-- CSS App -->
<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
}

.brewShops {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
