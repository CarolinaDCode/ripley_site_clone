<template>
  <v-app-bar
      color="#1a1a1a"
      flat
      :height="cardHeight"
      :width="cardWidth"
      fixed
      elevate-on-scroll
  >
    <v-container fluid
    >
      <!--MENU SM-->
      <v-row no-gutters class="px-3">
        <!--MENU SMALL-->
        <v-col
            cols="2"
            class="d-flex d-sm-none d-none d-sm-flex d-md-none"
        >
          <router-link to="/">
            <v-img
                class="mr-10"
                src="https://home.ripley.com.pe/pets/ripley-pets.gif"
                max-width="50"
                width="50"
                max-height="50"
            />
          </router-link>
        </v-col>
        <v-col
            cols="8"
            class="d-flex d-sm-none d-none d-sm-flex d-md-none">
          <v-divider vertical color="white"></v-divider>
          <v-row>
            <v-col cols="4" class="d-flex justify-center">
              <v-btn text dark class="px-4">
                <v-icon>mdi-magnify mdi-36px</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center">
              <v-btn text dark class="px-4">
                <v-icon>mdi-account-box mdi-36px</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center">
              <v-btn text dark class="px-4">
                <v-icon>mdi-purse-outline mdi-36px</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-divider vertical color="white"></v-divider>
        </v-col>
        <v-col
            cols="2"
            class="d-flex d-sm-none d-none d-sm-flex d-md-none d-flex justify-end"
            width="0"

        >
          <v-btn
              text
              dark
          >
            <v-icon>mdi-menu mdi-36px</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!--MENU NORMAL-->
      <div
          class="d-none d-md-flex
                 d-none d-lg-flex">
        <v-row no-gutters class="px-3 centrarMenuLg">
          <v-col
              cols="2"
              class="d-flex"
          >
            <router-link to="/">
              <v-img
                  src="https://home.ripley.com.pe/pets/ripley-pets.gif"
                  max-width="50"
                  width="50"
                  max-height="50"
              />
            </router-link>

            <v-menu offset-y max-width="100%" content-class="elevation-0 rounded-0 mt-3">
              <template v-slot:activator="{ on, attrs }">
                <div class="d-flex justify-center  align-content-center mx-8">
                  <v-btn
                      color="#70578b"
                      class="mr-4 mt-1"
                      fab
                      dark
                      width="38"
                      height="38"
                      v-bind="attrs"
                      v-on="on"
                  >
                    <v-icon>mdi-menu mdi-32px</v-icon>
                  </v-btn>
                  <div>
                    <span class="text-md-caption white--text font-weight-bold">
                      <p class="mb-0 mt-2 heightletter">{{ $t('menu') }}</p>
                      <p class="mb-0">{{ $t('categorias') }}</p>
                    </span>
                  </div>
                </div>
              </template>
              <v-list width="100vw" height="100%" elevator="0" class="py-0">
                <v-row class="d-flex justify-center  align-content-center ml60">
                  <v-col cols="4" class="bg-width">
                    <div v-if="categoryAll == null">
                      <progress-bar/>
                    </div>
                    <v-list-item
                        v-else
                        v-for="(category, index) in categoryAll.getCategoryAllArray()"
                        :key="index"
                    >
                      <router-link :to="'/category/' + category.getIdCategoria()">
                        <v-img width="1.2vw" class="mx-5"
                               :src="'data:image/png;base64,' + category.getIconCategory()"></v-img>
                      </router-link>
                      <router-link :to="'/category/' + category.getIdCategoria()" class="whitoutsub">
                        <v-list-item-title class="txtpurpleCategory"><strong>{{ category.getNombreCategoria() }}</strong>
                        </v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </v-col>
                  <v-col cols="8">
                    <v-img max-width="100vh" src="../assets/publimenu.png"></v-img>
                  </v-col>
                </v-row>

              </v-list>
            </v-menu>
          </v-col>

          <v-col
              cols="5"
              class="hidden-sm-and-down mx-10"
          >
            <v-text-field
                flat
                class="pa-0"
                solo
                clearable
                hide-details
                :label="$t('Buscar productos')"
                v-model="txtSearchProduct"
                @keyup.enter="onSearch"
            >
              <template  v-slot:append >
                <v-btn
                    elevation="0"
                    height="48"
                    width="60"
                    color="#848484"
                    dark
                    class="rounded-l-0 "
                >
                  <v-icon
                      large
                  >mdi-magnify
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>

            <div v-if="searchProduct == true">
              <div v-for="(search,i) in searchProduct.getproductArray()" :key="i">
                {{ search }}
              </div>
            </div>

          </v-col>
          <v-col
              cols="2"
              class="d-flex justify-space-around mr-8"
          >
            <v-menu class="eventClic" 
                     content-class="elevation-0 rounded-0 mt-16"
                     :close-on-content-click="false"
                     

            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="#fff"
                    text
                    class="align-end capitalize pl-0 "
                    v-bind="attrs"
                    v-on="on"
                    
                >
                  {{ $t('label_bienvenido')}}<br>
                  {{ $t('inicia_sesion') }}
                  <v-icon>mdi-chevron-up</v-icon>
                </v-btn>
              </template>
              <v-card
                class="rounded-0 modal">
                <v-alert
                    class="ma-0"
                    :value="responseHelp.registered"
                    transition="scale-transition"
                    dense
                    :type="responseHelp.color"
                >
                  {{responseHelp.info}}
                </v-alert>
                <v-form 
                    ref="formLogin"
                    v-model="valid"
                    lazy-validation
                    class="pa-6 rounded-0 text-center">
                  <v-text-field
                      class="heigth50"
                      v-model="form.email"
                      label="Email"
                      outlined
                      required
                      dense
                  ></v-text-field>
                  <v-text-field
                      class="heigth50"
                      type="password"
                      v-model="form.password"
                      label="Contraseña"
                      outlined
                      dense
                      required
                  ></v-text-field>
                  <p class="txtpurple darken-1
                            text-sm-body-2 my-0 pb-2">¿Olvidaste tu contraseña?</p>
                  <v-btn
                      class="rounded-0 capitalize"
                      width="-webkit-fill-available"
                      elevation="0"
                      dark
                      color="#70578b"
                      @click="loginUser"
                  >
                    Iniciar Sesión
                  </v-btn>
                  <p class="grey--text py-2 my-0
                            text-sm-body-2">
                    Eres nuevo en Ripley</p>
                  <v-btn
                      class="rounded-0 capitalize"
                      width="-webkit-fill-available"
                      elevation="0"
                      dark
                      color="#70578b"
                      outlined
                  >
                    <router-link to='/users/new' class="txtpurple text-decoration-none">
                    Crear Cuenta
                    </router-link>
                  </v-btn>
                </v-form>
                <v-btn
                    class="rounded-0 capitalize"
                    width="-webkit-fill-available"
                    elevation="0"
                    dark
                    color="#4A148C"
                >
                  Pagar Tarjeta Ripley
                </v-btn>
              </v-card>
            </v-menu>
            <v-btn
                icon
            >
              <a href="#" class="dcNone">
                <v-icon
                    large
                    color="#fff"
                >
                  mdi-purse-outline
                </v-icon>
              </a>
            </v-btn>
          </v-col>
          <v-col
              cols="1"
          >
            <v-select
                dense
                outlined
                hide-details
                dark
                class="d-none d-md-block pr-5 float-right"
                :items="lang"
                item-text="id"
                @change="selectLanguage($event)"
                v-model="e1"
            >
              <template v-slot:selection="{item}">
                <v-img :src="item.iconlang" max-width="22px" max-height="15px"/>
              </template>
              <template v-slot:item="{item}">
                {{ item.title }}
              </template>
            </v-select>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app-bar>
</template>


<script lang="ts">

import {ref, defineComponent, SetupContext, watch, Ref, PropType, computed, reactive} from "@vue/composition-api";
import i18n from "@/plugins/i18n";
import {WebPages} from "@/constants";
import CategoryAllModel from "@/models/Category/CategoryAllModel";
import ProgressBar from "@/components/utils/progressBar.vue";
import {userLogin} from "@/services/UserLogin";

export default defineComponent({
  name: 'appBar',
  components: {ProgressBar},
  props: {
    categoryAll: {
      type: Object as PropType<CategoryAllModel>
    }
  },
  setup(_, context: SetupContext) {

    const valid : Ref<boolean> = ref(false)

    let form = reactive( {
      email : '',
      password : ''
    })

    let responseHelp = reactive({
      registered : false,
      info : '',
      color: 'success'
    })

    const loginUser = async () => {
      const valid = context.refs.formLogin.validate()

      if(valid){
        await userLogin.LoginUser(form).then(resp => {
          responseHelp.registered = true
          if(resp.registered == false){
            responseHelp.info = resp.info
            responseHelp.color = 'error'

            setTimeout( ()=>{
              responseHelp.registered = false
            }, 4000)
          }else{
            responseHelp.info = resp.info
            responseHelp.color = 'success'

            context.refs.formLogin.reset()
          }
        })
      }
    }

    /**
     *
     */
    const txtSearchProduct: Ref<string> = ref('');
    /**
     *
     */
    const searchView: Ref<Boolean> = ref(false);
    /**
     *
     */
    const searchProduct: Ref<any> = ref(null)

    /**
     * i18n
     */
    const e1 = 'es';

    /**
     *
     */
    const lang = [
      {
        id: 'es',
        title: 'Español',
        iconlang: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/2560px-Flag_of_Catalonia.svg.png'
      },
      {
        id: 'en',
        title: 'Ingles',
        iconlang: 'https://www.nicepng.com/png/full/6-63506_usa-png-clipart-american-flag-icon-png.png'
      },
      {id: 'fr', title: 'Frances', iconlang: 'https://cdn.countryflags.com/thumbs/france/flag-800.png'}
    ];


    /**
     *
     */
    const vuetify = context.root.$vuetify

    /**
     *
     */
    const cardWidth = computed(() => {
      switch (vuetify.breakpoint.name) {
        case 'xs':
          return '100%'
      }
    })
    /**
     *
     */
    const cardHeight = computed(() => {
      switch (vuetify.breakpoint.name) {
        case 'xs':
          return '78px'
        case 'sm':
          return '78px'
        case 'md':
          return '78px'
        case 'lg':
          return '78px'
        case 'xl':
          return '78px'
      }
    })

    /**
     *
     * @param id
     */
    const selectLanguage = (id: string) => {
      i18n.locale = id;
    }


    /**
     *
     */
    const onSearch = async () => {
      if (txtSearchProduct.value.trim().length <= 0) return;
      context.root.$router.push({
        name: WebPages.PRODUCTVIEW,
        params: {
          nompro: txtSearchProduct.value
        }
      }).catch(e => console.log("Error-Navbar: ", e));
    }

    return {
      e1,
      lang,
      txtSearchProduct,
      cardWidth,
      cardHeight,
      selectLanguage,
      searchProduct,
      onSearch,
      searchView,
      form,
      valid,
      responseHelp,
      loginUser
    }
  }
})
</script>

<style>
.v-toolbar__content, .v-toolbar__extension {
  padding: 0px;
}
.container {
  padding: 0;
}
.v-toolbar__content .v-btn.v-btn--icon.v-size--default, .v-toolbar__extension .v-btn.v-btn--icon.v-size--default {
  height: 48px;
  width: 0;
}

.carousel-container .next-button, .carousel-container .prev-button {
  width: 64px;
  height: 64px;
  /* display: none; */
  background-color: #fff;
  /* border-radius: 50%; */
  border-width: 0;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 19%);
  cursor: pointer;
  outline: 0;
  position: absolute;
  top: 48%;
  z-index: 2;
}

.v-input__slot{
  padding-right: 0 !important;
}

.centrarMenuLg {
  width: 1500px;
  display: flex;
  justify-content: center;
}

.heightletter {
  height: 15px;
}

.txtpurpleCategory{
  color: #79568e;
  font-size: 13pt
}

.txtpurple {
  color: #79568e;
}

.whitoutsub {
  text-decoration: none;
}

.ml60 {
  margin-left: 60pt;
}

.bg-width {
  background-color: #f8f8f8;
  width: 200pt
}

.dcNone {
  text-decoration: none
}

.v-list-item {
  min-height: 47px;
}

.capitalize {
  text-transform: capitalize;
}

.heigth50 {
  height: 50px
}

.blocker {
  position: absolute;
  top: 0px;
  left: 0px;
  height:100%;
  width:100%;
  z-index: 50;
  background-color: grey;
  opacity: .5;
}

.modal{
  background-color: rgba(0,0,0,.8);
  /**
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:0;
  
  
  pointer-events:none;
  */
}

.eventClic:focus {
  background: red !important;
  color: red !important;
  max-width:"100%"
}



</style>