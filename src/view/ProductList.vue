<template>
  <div class="mt-10">
    <div v-if="!categoryInfo">
      <div class="d-flex justify-center align-center text-center" height="300">
        <v-progress-circular
            indeterminate
            color="primary"
        ></v-progress-circular>
      </div>
    </div>
    <v-container v-else>
      <v-row>
        <v-img
            :src="'data:image/png;base64,' + categoryInfo.getImageBanner()"></v-img>
      </v-row>
      <!-- Silder de Subcategorias de la categorias de mascotas--><!--Solo con imagenes, luego cambiará a slider-->
      <v-row  class="justify-center pt-4 hidden-sm-and-down">
        <v-col
            cols="1"
            class="imgContent"
            v-for="(cat, c) in categoryMascota"
            :key="c"
        >
          <v-img :src="cat.src"></v-img>
          <h5 class="pt-3 text-center">{{cat.title}}</h5>
        </v-col>
      </v-row>

      <!--Cantidad de resultados de busquedas-->
      <v-row class="pa-2">
        <v-col
            cols="9"
            class="d-flex align-content-center justify-space-between align-center">
          <span>
            {{ categoryInfo.getproductArray().length }} Resultados en {{categoryInfo.getNombreCategoria()}}
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
          <div class="px-3 filtrosGris"
               width="200px"
               height="600px">
            <v-row class="px-6 pt-4 pb-10">
              <v-icon class="pr-3"> mdi-vector-square</v-icon>
              <h3><span class="text--secondary font-weight-bold">FILTROS</span></h3>
            </v-row>
            <template>
              <v-expansion-panels
                v-for="(filtro,n) in filtros"
                :key="n"
              >
                <v-expansion-panel class="transparent">
                  <v-expansion-panel-header>
                    <strong><h3 class="text--secondary">{{filtro.title}}</h3></strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div v-if="filtro.title == 'Marca'" class="heightMarca">
                      <v-text-field
                          elevation="0"
                          label="Buscar"
                          placeholder="Buscar"
                          solo
                      ></v-text-field>
                    </div>
                  </v-expansion-panel-content>
                    <v-expansion-panel-content class="pb-0  heightEP"
                        v-for="(content,i) in filtro.contenido"
                        :key="i"
                    >
                        <v-checkbox
                            v-model="filtros"
                            :label="`${content.toString()}`">
                        <!-- {{content}} -->
                        </v-checkbox>
                    </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <hr class="mb-4 ml-3" width="220pt">

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
          <ProductCard :product-list="categoryInfo"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted} from "@vue/composition-api/dist/vue-composition-api";
import {ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import {categoriaServices} from "@/services/CategoriaServices";
import CategoryItemModel from "@/models/Category/CategoryItemModel";
import ProductCard from "@/view/product/ProductCard.vue";

export default defineComponent({
  name: 'products',
  components: {
    ProductCard
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

    const filtros = ref([
      {
        title : 'Marca',
        contenido: {
          0: 'Accecan',
          1:'Advance',
          2:'Allkjoy',
          3:'Barker',
          4:'Boss',
          5:'Bravery',
          6:'Brit',
          7:'Canbo',
          8:'Chicopee',
          9:'Cookiedo',
          10:'Cookiedo'
        }
      },
      {
        title: 'Precio',
        contenido:{
          0:'Perros',
          1:'Gatos'
        }
      },
      {
        title: 'Mascota',
        contenido:{
          0:'Perros',
          1:'Gatos'
        }
      },
      {
        title: 'Mascota',
        contenido:{
          0:'Perros',
          1:'Gatos'
        }
      },
      {
        title: 'Mascota',
        contenido:{
          0:'Perros',
          1:'Gatos'
        }
      },
      {
        title: 'Mascota',
        contenido:{
          0:'Perros',
          1:'Gatos'
        }
      }
    ])

    const modelPrecio: Ref<string> = ref('Recomendados');
    const txtprecio: Ref<Array<any>> = ref ([
          { state: 'Recomendados'},
          { state: 'Menor Precio'},
          { state: 'Mayor Precio'}
        ]
    )

    const categoryInfo : Ref<CategoryItemModel|null> = ref(null)
    const route  = context.root.$route;

    const getCategory = async () =>{
        let response = await categoriaServices.getProductsAndCategory(parseInt(route.params.nompro))
        categoryInfo.value =  new CategoryItemModel(response)

    }

    onMounted( () => {
      getCategory()
    })

    return{
      filtros,
      categoryInfo,
      getCategory,
      categoryMascota,
      modelPrecio,
      txtprecio,
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

.v-expansion-panel::before,
.v-input__slot {
 box-shadow: none !important;
}

.heightMarca{
  height: 50px;
}

.heightEP {
  height: 30px;
}

.filtrosGris {
  background-color: #f4f4f4;
}

.fontSize6 {
  font-size: 6pt !important;
}

.imgContent {
  max-width: fit-content;
}
</style>