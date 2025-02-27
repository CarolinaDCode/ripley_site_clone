<template>
    <v-container class="ma-0 pa-0">
        <v-row>
          <div v-if="categoryList == null">
            <div class="text-center loading" >
              <v-progress-circular
                  indeterminate
                  color="primary"
              ></v-progress-circular>
            </div>
          </div>
          <v-col
              v-else
              md="2"
              sm="4"
              class="pb-6"
              v-for="(categoria,i) in categoryList.getCategoryAllArray()"
              :key="i"
          >
            <v-card
                elevation="0"
                class="d-flex justify-center"
            >
              <v-avatar
                  width="200"
                  height="200"
              >
                <router-link :to="'/category/' + categoria.getIdCategoria()">
                  <v-img
                      contain
                      :src="'data:image/png;base64,' + categoria.getImage()">

                  </v-img>
                </router-link>
              </v-avatar>
              <v-card-title
                  class="  flex justify-center font-weight-bold text-center text-body-1"
                  style="position:absolute; top: 170px; word-break: break-word !important;">
                {{categoria.getNombreCategoria().toUpperCase()}}
              </v-card-title>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
</template>
<script lang="ts">
  import {computed, defineComponent, onMounted, PropType, Ref, ref} from "@vue/composition-api";
  import CategoryAllModel from "@/models/Category/CategoryAllModel";

  export default defineComponent({
    name: 'category',
    props:{
      categoryList:{
        type: Object as PropType<CategoryAllModel>
      }
    },
    setup(_,context){
      const vuetify = context.root.$vuetify

      //Set card width breakpoint
      const cardWidth = computed( () => {
            switch (vuetify.breakpoint.name) {
              case 'xs':
                return '125'
              case 'sm':
                return '100'
              case 'md':
                return '200'
              case 'lg':
                return '200'
              case 'xl':
                return '200'
            }
        }
      )

      //Set card height breakpoint
      const cardHeight = computed ( () =>{
          switch (vuetify.breakpoint.name) {
            case 'xs':
              return '125'
            case 'sm':
              return '100'
            case 'md':
              return '200'
            case 'lg':
              return '200'
            case 'xl':
              return '200'

          }
      })

      return {
        cardWidth,
        cardHeight
      }
    }
  })

</script>
<style>
.titlecardsXS{
  font-size: 11pt;
  position: absolute;
  top: 140px;
}
.loading{
  height: 300px;
  display:flex;
  align-content: center;
  justify-content: center
}
</style>