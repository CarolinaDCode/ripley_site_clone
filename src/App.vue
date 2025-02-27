<template>
  <v-app>
    <app-bar :category-all="categoryAll"/>
    <div class="d-flex d-sm-none
                d-none d-sm-flex
                d-none d-md-flex
                d-lg-none d-none
                d-lg-flex" style="height: 78px">
    </div>
    <v-main>
      <router-view :key="$route.fullPath"
                   :category-list="categoryList"
                   :category-six="categorySix"
      />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, Ref} from "@vue/composition-api";
import AppBar from "@/components/appBar.vue";
import Footer from "@/components/Footer.vue";
import {categoriaServices} from "@/services/CategoriaServices";
import CategoryAllModel from "@/models/Category/CategoryAllModel";

export default defineComponent({
  name: 'App',
  components: {
    AppBar,
    Footer
  },

   setup (){
     const categoryAll : Ref<CategoryAllModel|null> = ref(null)
     const categoryList : Ref<CategoryAllModel|null> = ref(null)
     const categorySix : Ref<CategoryAllModel|null> = ref(null)

     const getCategories = async () => {
       let response = await categoriaServices.getAllCategories();
       categoryList.value = new CategoryAllModel(response.slice(6,response.length - 1))
       categorySix.value  = new CategoryAllModel(response.slice(0,6));

       categoryAll.value = new CategoryAllModel(response)
     }

     onMounted( () => {
       getCategories()
       //getAllCategory()
     })

     return {
       getCategories,
       categoryAll,
       categoryList,
       categorySix

     }
   },

})
</script>
