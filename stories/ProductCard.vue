<template>
  <v-container>
    <v-row>
      <v-col
          md="4"
          sm="4"
          cols="6"
      >
        <v-card
            elevation="0"
            max-width="400"
        >
          <v-app-bar
              height="40"
              flat
              color="transparent"
              class="d-flex justify-end"
          >
            <v-btn
                color="red"
                elevation="0"
                dark
                class="px-0 text-sm-body-2"
            >-{{ Descuento }}%</v-btn>
          </v-app-bar>
          <v-img
              src="https://picsum.photos/id/11/500/300"
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
            {{ textNombreDMarca }}
          </v-card-title>
          <v-card-text>
            {{ textNombreDescripcion }}
          </v-card-text>
          <v-row class="mx-2">
            <div class="d-flex justify-center align-center">
              <span class="text-caption font-weight-bold grey--text">Sin Calificaciones</span>
            </div>
          </v-row>
          <v-row class="mx-1">
            <v-col
                cols="12"
            >
              <p class="text-decoration-line-through ma-0">S/{{ PrecioUnitario }}</p>
              <p class="font-weight-bold red--text text-h6">S/{{ PrecioFinal }}</p>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
  import { defineComponent } from "@vue/composition-api";

  export default defineComponent ({
    name: 'ProductCard',
    props: {
      Descuento: {
        type: Number
      },
      textNombreDMarca: {
        type: String
      },
      textNombreDescripcion: {
        type: String
      },
      PrecioUnitario: {
        type: Number
      },
      PrecioFinal: {
        type: Number
      }
    }
  })
</script>
<style scoped></style>