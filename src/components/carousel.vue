<template>
  <v-carousel
      cycle
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover
      v-model="modelCarousel"
  >
    <v-carousel-item
        v-for="(item, n) in itemsCarousel"
        :key="n"
        :src="item.src"
        :href="item.link"

    >
      <v-row
          class="fill-height"
          align="center"
          justify="center"
      >
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import {defineComponent, ref, Ref} from "@vue/composition-api";

export default defineComponent({
    name: "Carousel",

    setup: function () {
      const modelCarousel: Ref<number> = ref(0);

      const itemsCarousel : Ref<Array<any>> = ref([
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/13/webp/1.webp',
          link:'https://simple.ripley.com.pe/mujer/ropa-mujer/ver-todo'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/13/webp/2.webp',
          link:'https://simple.ripley.com.pe/hogar/ropa-de-cama/edredones-y-sets-de-cama-deco'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/09/webp/3.webp',
          link:'https://simple.ripley.com.pe/infantil/jugueteria/todo-juguetes'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/09/webp/4.webp',
          link:'https://simple.ripley.com.pe/calzado/marcas-destacadas/barbados'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/11/webp/5.webp',
          link:'https://simple.ripley.com.pe/tecnologia/computacion/laptops'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/11/webp/6.webp',
          link:'https://simple.ripley.com.pe/dormitorio/ofertas2/especial-juegos-de-dormitorio'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/09/webp/7.webp',
          link:'https://simple.ripley.com.pe/tecnologia/apple/todo-apple'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/11/webp/8.webp',
          link:'https://simple.ripley.com.pe/electrohogar/ofertas/samsung-lavadora'
        },
        {
          src:'https://home.ripley.com.pe/minisitios/home/huincha/22/07/13/webp/9.webp',
          link:'https://simple.ripley.com.pe/otras-categorias/internacional/relojes'
        }
      ])
      return {
        modelCarousel,
        itemsCarousel
      }
    }



})


</script>
