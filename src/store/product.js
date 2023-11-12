import { defineStore } from "pinia";
import axios from "axios";

import { ref, computed } from "vue";
import { formToJSON } from "axios";

export const useProductStore = defineStore("useProductStore", () => {
  const products = ref([]);

  const input = ref('');

  const list_products = computed(() => products.value);
  const load_products = computed(() => products.value.length > 0);

  const fetch_products = async () => {
    await axios
      .get(`${import.meta.env.VITE_API}`)
      .then((reponse) => {
        // console.log(reponse.data);
        products.value = reponse.data;
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search_products = computed(() => {
    if (input.value.length < 3) return products.value;

    return products.value.filter((prd) => {
      if (
        prd.title.toLowerCase().includes(input.value.toLowerCase()) == false
      ) {
        return false;
      } else {
        return prd.title.toLowerCase().includes(input.value.toLowerCase());
      }
    });
  });

  return {
    products,
    fetch_products,
    list_products,
    load_products,
    input,
    search_products,
  };
});
