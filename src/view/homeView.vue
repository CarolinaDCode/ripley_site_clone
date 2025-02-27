<template>
  <div>
    <carousel/>
    <main-section :category-six="categorySix" :category-list="categoryList"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, PropType} from "@vue/composition-api";
import AppBar from "@/components/appBar.vue";
import carousel from '@/components/carousel.vue';
import MainSection from "@/components/MainSection.vue";
import Footer from '../components/Footer.vue'
import CategoryAllModel from "@/models/Category/CategoryAllModel";

export default defineComponent({
  name : 'home',
  components :{
    MainSection,
    carousel,
    Footer,
    AppBar
  },
  props:{
    categoryList:{
      type: Object as PropType<CategoryAllModel>
    },
    categorySix:{
      type: Object as PropType<CategoryAllModel>
    },
  },

  setup(){


    return {

    }
  }

})
</script>