<template>
    <v-container>
      <v-row>
        <div v-if="!productList">
          <progress-bar/>
        </div>
        <v-col
            v-else
            md="4"
            sm="4"
            cols="6"
            v-for="(cat,i) in productList.getproductArray()"
            :key="i"
        >
          <v-card
              elevation="0"
              max-width="400"
              :to="'/productos/' + cat.getIdProduct()"
          >
            <v-app-bar
                height="40"
                flat
                color="transparent"
                class="d-flex justify-end"
            >
              <v-btn
                  v-if="cat.getDescuento() > 0"
                  color="red"
                  elevation="0"
                  dark
                  class="px-0 text-sm-body-2"
              >-{{ cat.getDescuento() }}%</v-btn>
            </v-app-bar>
            <v-img
                :src="'data:image/png;base64,' + cat.getFoto()"
                height="300"
            >
              <v-app-bar
                  height="40"
                  flat
                  color="transparent"
                  class="d-flex justify-end"
              >
                <v-btn
                    color="purple"
                    elevation="0"
                    class="px-2 fontSize6"
                    dark>
                  DELIVERY<br>
                  GRATIS
                </v-btn>
              </v-app-bar>
            </v-img>
            <v-card-title class="text-h6">
              {{ cat.getNombreMarca()}}
            </v-card-title>
            <v-card-text>
              {{ cat.getDescripcion()}}
            </v-card-text>
            <v-row class="mx-2">
              <div class="d-flex justify-center align-center">
                <v-rating
                    class="mr-4"
                    background-color="#D0D0D0"
                    dense
                    v-model="rating"
                    icon-label="custom icon label text {0} of {1}"
                ></v-rating>
                <span class="text-caption font-weight-bold grey--text">Sin Calificaciones</span>
              </div>
            </v-row>
            <v-row class="mx-1">
              <v-col
                  cols="12"
              >
                <p class="text-decoration-line-through ma-0">S/{{ cat.getPrecioUnitario()}}</p>
                <p class="font-weight-bold red--text text-h6">S/{{ cat.getPrecioFinal() }}</p>
              </v-col>
            </v-row>

          </v-card>
        </v-col>

      </v-row>
    </v-container>
</template>

<script lang="ts">
import { ref, Ref, defineComponent } from "@vue/composition-api";
import progressBar from '@/components/utils/progressBar.vue'

export default  defineComponent({
  name: 'products',
  components: {
    progressBar
  },
  props:{
    productList: {
      type: Object
    }
  },
  setup(){
    const rating : Ref<number> = ref(0);

    return{
      rating
    };

  }

})

</script>