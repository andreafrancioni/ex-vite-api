import { reactive } from 'vue'

export const store = reactive({
    brewApi: "https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=10"
});