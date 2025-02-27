<template>
  <div class="mt-10">
    <div v-if="productList == null">
      <div class="text-center" style="height: 300px; display:flex; align-content: center; justify-content: center">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </div>
    </div>
    <v-container v-else>
      <!--Cantidad de resultados de busquedas-->
      <v-row class="pa-2">
        <v-col
            cols="9"
            class="d-flex align-content-center justify-space-between align-center">
          <span>
            {{ productList.getproductArray().length }} Resultados en {{$route.params.nompro}}
          </span>
        </v-col>
        <v-col cols="3">
          <v-select
              v-model="modelPrecio"
              :items="txtprecio"
              item-text="state"
              persistent-hint
              return-object
              outlined
              hide-selected
              hide-details
              dense
          ></v-select>
        </v-col>
        <v-divider/>
      </v-row>
      <hr class="mb-6">
      <br>
      <v-row>
        <!-- FILTROS -->
        <v-col
            md="3"
            cols="12"
            sm="12"
            class="hidden-sm-and-down"
        >
          <div class="px-3" style="width: 200pt; height: 600pt; background-color: #f4f4f4">
            <v-row class="px-6 pt-4 pb-3">
              <v-icon class="pr-3"> mdi-vector-square</v-icon>
              <h3><span class="text--secondary " style="font-weight: lighter">FILTROS</span></h3>
            </v-row>
            <template>
              <v-expansion-panels class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Marca</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field></v-text-field>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

              <v-expansion-panels class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Precio</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

              <v-expansion-panels  class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Tipo de Producto</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

              <v-expansion-panels class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Tipo de Mascota</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

              <v-expansion-panels class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Tamaño Raza</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

              <v-expansion-panels class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Etapa</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

              <v-expansion-panels class="whithoutShadow">
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">Colores</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
            <v-btn>
              Aplicar filtros
            </v-btn>
          </div>
        </v-col>
        <v-col
            sm="12"
            md="9"
        >
          <!--CARDS-->
          <product-card :product-list="productList"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from "@vue/composition-api/dist/vue-composition-api";
import {ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import {productServices} from "@/services/ProductServices";
import ProductModel from "@/models/Category/ProductModel";
import productCard from "@/view/product/ProductCard.vue";

export default defineComponent({
  name: 'searchProduct',
  components:{
    productCard
  },
  setup(_, context){
    /**para el slider de subcategorias **/
    const categoryMascota: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/1.png',
        title: 'Alimentos y Snacks'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/2.png',
        title: 'Casas y camas'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/3.png',
        title: 'Farmarcia'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/4.png',
        title: 'Higiene'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/5.png',
        title: 'Juguetes'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/6.png',
        title: 'Accesorios'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/banner_catalogo/BC_22_DogLover/img/hover/7.png',
        title: 'Ropa'
      }
    ]);

    const modelPrecio: Ref<string> = ref('Recomendados');

    const txtprecio: Ref<Array<any>> = ref ([
          { state: 'Recomendados'},
          { state: 'Menor Precio'},
          { state: 'Mayor Precio'}
        ]
    )

    const productList : Ref<ProductModel|null> = ref(null)

    const route  = context.root.$route;

    const getCategory = async () =>{
        let response = await productServices.getSearchProduct(route.params.nompro)
        productList.value =  new ProductModel(response)
    }

    onMounted( () => {
      getCategory()
    })
    return{
      productList,
      getCategory,
      categoryMascota,
      modelPrecio,
      txtprecio

    };

  }

})
</script>
<style>
.transparent {
  background-color: transparent !important;
}
.whithoutShadow {
  z-index: unset;
}

</style>