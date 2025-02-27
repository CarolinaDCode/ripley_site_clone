<template>
    <div v-if="productInfo ==null">
      <div class="text-center" style="height: 400px; display:flex; align-content: center; justify-content: center">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </div>
    </div>
    <v-container v-else class="pa-2">

      <!-- DE MD para arriba-->
      <div class="d-none d-md-flex">
        <v-row>
          <v-col
              sm="1"
              md="1"
          >
            <v-img
                height="100"
                width="100"
                :src="'data:image/png;base64,' + productInfo.getFoto()"
            ></v-img>
          </v-col>

          <v-col
              sm="7"
              md="6"
          >
            <v-img
                width="500"
                height="500"
                :src="'data:image/png;base64,' + productInfo.getFoto()"
            ></v-img>
          </v-col>

          <v-col
              sm="4"
              md="5"
          >
            <v-card
                width="490"
                elevation="0"
            >
              <v-card-title class="pl-0 pb-1">
                <h1 class="text--secondary font-weight-bold text-h5">
                  {{productInfo.getDescripcion()}}
                </h1>
              </v-card-title>
              <p class="text-button font-weight-regular grey--text lighten-1">SKU:PMP00002137450</p>
              <v-row class="mb-3">
                <v-icon class="ml-3">mdi-star-outline</v-icon>
                <v-icon>mdi-star-outline</v-icon>
                <v-icon>mdi-star-outline</v-icon>
                <v-icon>mdi-star-outline</v-icon>
                <v-icon class="mr-2">mdi-star-outline</v-icon>
                <p class="mb-0">Sin Calificaciones</p>
              </v-row>
              <h4 style="font-weight: normal">* Extra life: Maximiza la calidad de vida<br>* Con Glucosamina que evita el desgaste de las articulaciones<br>* Croquetas especiales que ayudan a controlar el sarro<br>* 100mm Tekbond</h4>
              <br>
              <v-row class="pt-0">
                <v-col cols="6">
                  <p class="mb-2">Normal</p>
                  <p class="mb-2"><strong>Internet</strong></p>
                  <p class="mb-2 purple--text"><strong>Tarjeta Ripley</strong></p>
                  <p>Descuento</p>
                </v-col>
                <v-col cols="6">
                  <p class="mb-2">S/{{productInfo.getPrecioUnitario()}}</p>
                  <p class="mb-2">S/{{productInfo.getPrecioInternet()}}</p>
                  <v-row class="mb-0 mt-2">
                    <v-icon class="mr-3">mdi-more</v-icon><p class="mb-0">s/{{productInfo.getPrecioFinal()}}</p>
                  </v-row>
                  <v-btn
                      class="mt-2"
                      depressed
                      color="error"
                  >
                    -{{productInfo.getDescuento()}}%
                  </v-btn>
                </v-col>
              </v-row>
              <div class="rounded" style="width: 360pt; height: 35pt; background-color: #E4E4E4">
                <v-row>
                  <v-col cols="7">
                    <p class="pl-4">Con tarjeta Ripley acumulas</p>
                  </v-col>
                  <v-col cols="5" style="text-align: right">
                    <p class="pr-4"><strong>81</strong> Ripley Puntos GO</p>
                  </v-col>
                </v-row>
              </div>
              <v-row class="mt-2">
                <v-col cols="1">
                  <v-btn
                      small
                      elevation="0"
                      class="mx-2"
                      fab
                      dark
                      color="green"
                  >
                    <v-icon dark>
                      mdi-home
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="10">
                  <div class="ml-4">
                    <p class="mb-0" style="font-size: 10pt; font-weight: bold">Despacho a Domicilio</p>
                    <p class="mb-2 green--text" style="font-size: 10pt; font-weight: bold">Disponible</p>
                  </div>
                </v-col>
              </v-row >
              <hr>
              <v-row class="mt-1">
                <v-col cols="1">
                  <v-btn
                      small
                      elevation="0"
                      class="mx-2"
                      fab
                      dark
                      color="#D5D4D4"
                  >
                    <v-icon dark>
                      mdi-shredder
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="10">
                  <div class="ml-4">
                    <p class="mb-0" style="font-size: 10pt; font-weight: bold; color: #D5D4D4">Pago contra entrega</p>
                    <p class="mb-2" style="font-size: 10pt; font-weight: bold; color: #D5D4D4">No Disponible</p>
                  </div>
                </v-col>
              </v-row>
              <hr class="mb-3">
              <p class="mb-0">Vendido por</p>
              <h3 class="mb-3" style="color: #9489BC">{{productInfo.getNombreMarca()}}</h3>
              <v-row class="mt-1 mb-3">
                <v-icon class="ml-2">mdi-calendar-question</v-icon>
                <p class="mb-0 ml-2">ver politicas de compra <strong>Marketplace Ripley.com</strong></p>
              </v-row>
              <hr>
              <v-row class="ml-0 mt-4 mb-10">
                <v-btn
                    outlined
                    elevation="0"
                    class="rounded-r-0"
                    color="#7A0D89"
                >
                  <v-icon>
                    mdi-heart-outline
                  </v-icon>
                </v-btn>
                <v-btn
                    elevation="0"
                    color="#7A0D89"
                    dark
                    class="rounded-l-0"
                >
                  Agregar a la Bolsa
                </v-btn>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- XS-->
      <div class="d-md-none">
        <div v-if="productInfo == null"></div>
        <v-row v-else>
          <v-col
            cols="12"
            class="d-flex justify-center   align-content-center"
          >
            <v-card
                elevation="0"
            >
              <v-card-title class="pl-0 pb-1">
                <h1 class="text--secondary font-weight-bold text-h5">
                  {{productInfo.getDescripcion()}}
                </h1>
              </v-card-title>
              <p class="text-button font-weight-regular grey--text lighten-1">SKU:PMP00002137450</p>
              <v-row class="mb-3">
                <v-icon class="ml-3">mdi-star-outline</v-icon>
                <v-icon>mdi-star-outline</v-icon>
                <v-icon>mdi-star-outline</v-icon>
                <v-icon>mdi-star-outline</v-icon>
                <v-icon class="mr-2">mdi-star-outline</v-icon>
                <p class="mb-0">Sin Calificaciones</p>
              </v-row>
              <h4 style="font-weight: normal">* Extra life: Maximiza la calidad de vida<br>* Con Glucosamina que evita el desgaste de las articulaciones<br>* Croquetas especiales que ayudan a controlar el sarro<br>* 100mm Tekbond</h4>
              <br>
            </v-card>
          </v-col>
          <v-col
              cols="12"
              center
              class="d-flex justify-center   align-content-center"
          >
            <v-img
                max-width="50"
                max-height="50"
                :src="'data:image/png;base64,' + productInfo.getFoto()"
            ></v-img>
          </v-col>

          <v-col
              cols="12"

          >
            <v-img
                :src="'data:image/png;base64,' + productInfo.getFoto()"
            ></v-img>
          </v-col>

          <v-col
              sm="12"
              lg="5"
              cols="12"
              class=" justify-center align-center align-content-center"
          >
            <v-row class="pt-0">
              <v-col cols="6">
                <p class="mb-2">Normal</p>
                <p class="mb-2"><strong>Internet</strong></p>
                <p class="mb-2 purple--text"><strong>Tarjeta Ripley</strong></p>
                <p>Descuento</p>
              </v-col>
              <v-col cols="6">
                <p class="mb-2">S/{{productInfo.getPrecioUnitario()}}</p>
                <p class="mb-2">S/{{productInfo.getPrecioInternet()}}</p>
                <v-row class="mb-0 mt-2">
                  <v-icon class="mr-3">mdi-more</v-icon><p class="mb-0">s/{{productInfo.getPrecioFinal()}}</p>
                </v-row>
                <v-btn
                    class="mt-2"
                    depressed
                    color="error"
                >
                  -{{productInfo.getDescuento()}}%
                </v-btn>
              </v-col>
            </v-row>
            <div class="rounded" style="width: 360pt; height: 35pt; background-color: #E4E4E4">
              <v-row>
                <v-col cols="7">
                  <p class="pl-4">Con tarjeta Ripley acumulas</p>
                </v-col>
                <v-col cols="5" style="text-align: right">
                  <p class="pr-4"><strong>81</strong> Ripley Puntos GO</p>
                </v-col>
              </v-row>
            </div>
            <v-row class="mt-2">
              <v-col cols="1">
                <v-btn
                    small
                    elevation="0"
                    class="mx-2"
                    fab
                    dark
                    color="green"
                >
                  <v-icon dark>
                    mdi-home
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10">
                <div class="ml-4">
                  <p class="mb-0" style="font-size: 10pt; font-weight: bold">Despacho a Domicilio</p>
                  <p class="mb-2 green--text" style="font-size: 10pt; font-weight: bold">Disponible</p>
                </div>
              </v-col>
            </v-row >
            <hr>
            <v-row class="mt-1">
              <v-col cols="1">
                <v-btn
                    small
                    elevation="0"
                    class="mx-2"
                    fab
                    dark
                    color="#D5D4D4"
                >
                  <v-icon dark>
                    mdi-shredder
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10">
                <div class="ml-4">
                  <p class="mb-0" style="font-size: 10pt; font-weight: bold; color: #D5D4D4">Pago contra entrega</p>
                  <p class="mb-2" style="font-size: 10pt; font-weight: bold; color: #D5D4D4">No Disponible</p>
                </div>
              </v-col>
            </v-row>
            <hr class="mb-3">
            <p class="mb-0">Vendido por</p>
            <h3 class="mb-3" style="color: #9489BC">{{productInfo.getNombreMarca()}}</h3>
            <v-row class="mt-1 mb-3">
              <v-icon class="ml-2">mdi-calendar-question</v-icon>
              <p class="mb-0 ml-2">ver politicas de compra <strong>Marketplace Ripley.com</strong></p>
            </v-row>
            <hr>
            <v-row class="ml-0 mt-4 mb-10">
              <v-btn
                  outlined
                  elevation="0"
                  class="rounded-r-0"
                  color="#7A0D89"
              >
                <v-icon>
                  mdi-heart-outline
                </v-icon>
              </v-btn>
              <v-btn
                  elevation="0"
                  color="#7A0D89"
                  dark
                  class="rounded-l-0"
              >
                Agregar a la Bolsa
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </div>

    </v-container>
</template>
<script lang="ts">
import {defineComponent, onMounted} from "@vue/composition-api/dist/vue-composition-api";
import {ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import ProductItemModel from "@/models/Category/ProductItemModel";
import {productServices} from "@/services/ProductServices";

export default defineComponent({
  name: 'product',

  setup(_, context){
    const productInfo : Ref<ProductItemModel|null> = ref(null)

    const router= context.root.$route;

    const getProduct = async () => {
      let response = await productServices.getProduct(parseInt(router.params.producto))
      productInfo.value = await new ProductItemModel(response)
    }

    onMounted(()=>{
      getProduct()
    })

    return{
      productInfo,
      getProduct
    }
  }
})
</script>