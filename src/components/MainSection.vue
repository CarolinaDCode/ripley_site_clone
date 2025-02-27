<template>
  <div class="blocked">
    <v-container>
      <!-- CINTILLO FUCSIA-->
      <div class="my-5 d-flex justify-center">
        <v-img src="../assets/cintillo_middle_desk.webp"></v-img>
      </div>

      <!-- CINTILLO PUBLICIDAD SAMSUNG & MARQUIS - PARA LG-->
      <!-- d-xl-none -->
      <div class="d-none d-md-flex d-lg-none d-none d-lg-flex">
        <v-row class="d-flex">
        <v-col
            cols="7"
        >
          <v-img
              contain
              max-width="880"
              height="229"
              src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/BANNER_BLANDOS/1.jpg?v1"
          />
        </v-col>
        <v-col
            cols="5"
        >
          <v-img
              contain
              width="880"
              height="229"
              src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/BANNER_BLANDOS/2m.jpg"
          />
        </v-col>
      </v-row>
      </div>

      <!-- CINTILLO PUBLICIDAD SAMSUNG & MARQUIS - PARA XS-->
      <div class="d-flex d-sm-none d-none d-sm-flex d-md-none">
      <v-row class="d-flex">
        <v-col
            cols="12"
            class="pt-0"
        >
          <v-img
              width="100vw"
              contain
              src="../assets/1m.webp"
          />
        </v-col>
        <v-col
            cols="12"
            class="pt-0"
        >
          <v-img
              width="100vw"
              contain
              src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/BANNER_BLANDOS/2m.jpg"
          />
        </v-col>
      </v-row>
      </div>

      <!-- TEXTO: PARA MASCOTAS, LO TENEMOS TODOO-->
      <h1 class="d-flex justify-center card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4" >
        <strong>{{$t('para mascotas')}},</strong>
        <span style="color: white">.</span>
        <span class="font-weight-light">{{$t('lo tenemos todo')}}</span>
      </h1>

      <!-- PUBLICIDAD RIPLEY: PETS / SLIDER DE PUBLICIDAD PARA MASCOTAS - LG-->
      <div class="d-none d-md-flex d-lg-none
           d-none d-lg-flex mb-16">
        <v-row>
          <v-col
              cols="6"
              class="pr-0 mt-4"
          >
            <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/banner_desk.webp"/>

          </v-col>
          <v-col
              cols="6"
              class="pa-0 my-6"
          >
              <v-app id="inspire mb-0" style="height: 310pt">
                <v-sheet
                  class="mx-auto"
                  elevation="0"
                  max-width="698"
                >
                  <v-slide-group
                    v-model="modalD"
                    class="pa-0"
                    center-active
                    show-arrows
                  >
                    <v-slide-item
                      v-for="(maskFot, n) in fotosMask"
                      :key="n"
                      v-slot="{ active, toggle }"
                    >
                      <v-card
                        :color="active ? 'primary' : 'grey lighten-1'"
                        class="ma-1"
                        height="450"
                        width="287"
                        elevation="0"
                        @click="toggle"
                      >
                        <v-img
                          height="450"
                          :src="maskFot.src"
                        >
                        </v-img>
                      </v-card>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </v-app>
          </v-col>
        </v-row>
      </div>

      <!-- PUBLICIDAD RIPLEY: PETS / SLIDER DE PUBLICIDAD PARA MASCOTAS - XS-->
      <div class="d-flex d-sm-none d-none d-sm-flex d-md-none">
        <v-row>
        <v-col
            cols="12"
            class="pr-0"
        >
          <v-img
              width="97vw"
              src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/banner_desk.webp"/>

        </v-col>
        <v-col
            cols="12"
            class="pa-0 mb-6"
        >
          <v-app id="inspire mb-0" style="height: 52vw">
            <v-sheet
                class="mx-auto"
                elevation="0"
                max-width="100vw"
            >
              <v-slide-group
                  v-model="modalD"
                  class="pa-0"
                  center-active
                  show-arrows
              >
                <v-slide-item
                    v-for="(maskFot, n) in fotosMask"
                    :key="n"
                    v-slot="{ active, toggle }"
                >
                  <v-card
                      :color="active ? 'white' : 'white'"
                      class="ma-1"
                      width="37vw"
                      elevation="0"
                      @click="toggle"
                  >
                    <v-img
                        contain
                        width="50vw"
                        height="50vw"
                        :src="maskFot.src"
                    >
                    </v-img>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-app>
        </v-col>
      </v-row>
      </div>

      <!-- CINTILLO: INDEX COLORES-->
      <v-row>
        <v-col
            cols="12"
        >
          <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/12/CINTILLOS/webp/cintillo_middle_desk.webp?v2"></v-img>
        </v-col>
      </v-row>

      <!--Lo mas buscado-->
      <v-row class="mt-4">
        <v-col cols="12" style="display: flex; justify-content: center !important;">
          <v-img min-width="800pt" src="../assets/titulo_losmasbuscados.webp"/>
        </v-col>
      </v-row>

      <!--2da publicidad de productos - PARA LG--->
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex">
        <v-row class="mt-4">
          <v-col cols="5" class="px-0">
            <img width="100%" height="100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/12/DESTACADOS/BLOQ1/webp/1.webp">
          </v-col>
          <v-col cols="7" class="pr-0">
            <img width="100%" height="100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/2.webp?v1">
          </v-col>
        </v-row>
      </div>
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex">
        <v-row class="mt-4">
          <v-row>
            <v-col cols="2" class="pa-1" >
              <v-img style="height: 100%; width: 100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/3.webp?v1"></v-img>
            </v-col>
            <v-col cols="5" >
              <v-row class="pa-1">
                <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/4.webp?v1"></v-img>
              </v-row>
              <v-row class="pa-1">
                <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/6.webp?v1"></v-img>
              </v-row>
            </v-col>
            <v-col cols="5" >
              <v-row class="pa-1">
                <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/5.webp?v1"></v-img>
              </v-row>
              <v-row class="pa-1">
                <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/11/DESTACADOS/BLOQ1/webp/7.webp"></v-img>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </div>

      <!--2da publicidad de productos - PARA XS--->
      <div class="d-flex d-sm-none  d-none d-sm-flex d-md-none">
        <v-row>
          <v-col cols="12" class="pt-6 pb-0">
            <v-img
                width="100vw"
                contain src="https://home.ripley.com.pe/minisitios/home/c/22/07/12/DESTACADOS/BLOQ1/webp/1.webp"></v-img>
          </v-col>
          <v-col cols="12" class="pa-2 pb-0">
            <v-img
                width="100vw"
                contain src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/2.webp?v1"></v-img>
          </v-col>
          <v-col cols="12" class="pa-2 pb-0">
            <v-img
                width="100vw"
                contain src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/4.webp?v1"></v-img>
          </v-col>
          <v-col cols="12" class="pa-2 pb-0">
            <v-img
                width="100vw"
                contain src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/6.webp?v1"></v-img>
          </v-col>
          <v-col cols="12" class="pa-2 pb-0">
            <v-img
                width="100vw"
                contain src="https://home.ripley.com.pe/minisitios/home/c/22/07/09/DESTACADOS/BLOQ1/webp/5.webp?v1"></v-img>
          </v-col>
          <v-col cols="12" class="pb-0">
            <v-img
                width="100vw"
                contain src="https://home.ripley.com.pe/minisitios/home/c/22/07/11/DESTACADOS/BLOQ1/webp/7.webp"></v-img>
          </v-col>
        </v-row>
      </div>
      <!--descubre lo nuevo-->
      <!--d-flex justify-center mt-6 card_title-->

      <h1 class="d-flex justify-center mt-12 card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4">
        <span class="font-weight-light">{{$t('descubre')}}</span>
        <span style="color: white">.</span>
        <strong>{{$t('lo mas nuevo')}}</strong>
      </h1>

      <!--CARRUSEL: descubre lo nuevo -- PARA LG-->
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex mb-12">
        <v-row>
          <v-col cols="1">
            <v-img  class="mt-3" height="485" src="../assets/lo-nuevo.webp"></v-img>
          </v-col>
          <v-col cols="11">
            <v-app id="inspire mb-0" style="height: 310pt">
              <v-sheet
                  class="mx-auto"
                  elevation="0"
                  max-width="1200"
              >
                <v-slide-group
                    v-model="modalC"
                    class="pa-2"
                    center-active
                    show-arrows
                >
                  <v-slide-item
                      v-for="(newFot, n) in fotosNew"
                      :key="n"
                      v-slot="{ active, toggle }"
                  >
                    <v-card
                        elevation="0"
                        :color="active ? 'primary' : 'grey lighten-1'"
                        class="ma-1"
                        height="500"
                        width="352"
                        @click="toggle"
                    >
                      <v-img
                          height="500"
                          :src="newFot.src"
                      >
                      </v-img>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-app>
          </v-col>
        </v-row>
      </div>

      <!--CARRUSEL: descubre lo nuevo -- PARA XS-->
      <div class="d-flex d-sm-none  d-none d-sm-flex d-md-none" style="height: 55vh">
        <v-row  >
          <v-col cols="1" class="pl-0 pr-0 pb-0 pt-5">
            <v-img class="mt-3" height="380" src="../assets/lo-nuevo.webp"></v-img>
          </v-col>
          <v-col cols="11" class="pl-0 pr-0 pb-0 pt-4">
            <v-app id="inspire mb-0" style="height: 55vh" >
              <v-sheet
                  class="mx-auto"
                  elevation="0"
                  max-width="400"
              >
                <v-slide-group
                    v-model="modalC"
                    class="px-2 pt-2"
                    center-active
                    show-arrows
                >
                  <v-slide-item
                      v-for="(newFot, n) in fotosNew"
                      :key="n"
                      v-slot="{ active, toggle }"
                  >
                    <v-card
                        elevation="0"
                        :color="active ? 'white' : 'white'"
                        class="ma-1"
                        height="400"
                        width="280"
                        @click="toggle"
                    >
                      <v-img
                          contain
                          height="400"
                          :src="newFot.src"
                      >
                      </v-img>
                    </v-card>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-app>
          </v-col>
        </v-row>
      </div>

      <!--d-flex justify-center mt-10 card_title-->

      <!-- Conoce Nuestras Nuevas Categorias - XS -->

        <h1 class="d-flex justify-center mt-4 card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4" >
        <span class="font-weight-light">{{$t('conoce nuestras')}}</span>
        <span style="color: white">.</span>
        <strong>{{$t('nuevas categorias')}}.</strong>
        </h1>


      <!--Nuevas Categorias-->
      <CategoryCard :category-list="categorySix" class="mt-10"/>

      <!--Aprovecha las promociones-->
      <h1 class="d-flex justify-center mt-8 card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4" >
        <span class="font-weight-light">{{$t('aprovecha las')}}</span>
        <span style="color: white">.</span>
        <strong>{{$t('promociones')}}.</strong>
      </h1>

      <!--3ra publicidad de productos - PARA LG--->
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex justify-center">
        <v-row class="mt-4" style="height: 300pt; gap: 6pt">
        <v-col cols="2,5 pa-0" style="height: 300pt">
          <img style="height: 300pt; width: 100%"  src="https://home.ripley.com.pe/minisitios/home/c/22/07/13/DESTACADOS/BLOQ2/webp/8.webp?v1">
        </v-col>
        <v-col cols="2,5 pa-0" style="height: 300pt">
          <img style="height: 300pt; width: 100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/9.webp">
        </v-col>
        <v-col cols="4,5" style="height: 280pt">
          <v-row style="height: 150pt">
            <img  style="height: 150pt; width: 390pt" src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/10.webp">
          </v-row>
          <v-row class="pt-2" style="height: 150pt">
            <img style="height: 144pt; width: 390pt" src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/11.webp">
          </v-row>
        </v-col>
        <v-col cols="2,5 pa-0">
          <img style="height: 300pt; width: 100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/12.webp">
        </v-col>
      </v-row>
      </div>
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex d-xl-none justify-center mb-12">
      <v-row class="mt-5">
        <v-col class="pa-0" cols="7">
          <img style="height: 175pt; width: 100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/13/DESTACADOS/BLOQ2/webp/13.webp?v1">
        </v-col>
        <v-col class="pl-2 pt-0 pr-0 pb-0" cols="5">
          <img style="height: 175pt; width: 100%" src="https://home.ripley.com.pe/minisitios/home/c/22/07/13/DESTACADOS/BLOQ2/webp/14.webp">
        </v-col>
      </v-row>
      </div>

      <!--3ra publicidad de productos - PARA XS--->
      <div class="d-flex d-sm-none  d-none d-sm-flex d-md-none mt-0 justify-center">
        <v-row class="mt-4">
          <v-col cols="6" class="px-0">
            <v-img width="50vw" src="https://home.ripley.com.pe/minisitios/home/c/22/07/13/DESTACADOS/BLOQ2/webp/8.webp?v1"></v-img>
          </v-col>
          <v-col cols="6" class="pl-1 pr-0">
            <v-img width="50vw"  src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/9.webp"></v-img>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex d-sm-none d-none d-sm-flex d-md-none mt-2 justify-center">
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/10.webp"></v-img>
          </v-col>
          <v-col cols="12" class="pt-2">
            <v-img src="https://home.ripley.com.pe/minisitios/home/c/22/07/14/DESTACADOS/BLOQ2/webp/11.webp"></v-img>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex d-sm-none d-none d-sm-flex d-md-none mt-2 justify-center">
        <v-row>
          <v-col cols="12" class="pb-0">
            <v-img width="100vw" src="https://home.ripley.com.pe/minisitios/home/c/22/07/13/DESTACADOS/BLOQ2/webp/13.webp?v1"></v-img>
          </v-col>
          <v-col cols="12" class="pt-2">
            <v-img width="100vw" src="https://home.ripley.com.pe/minisitios/home/c/22/07/13/DESTACADOS/BLOQ2/webp/14.webp"></v-img>
          </v-col>
        </v-row>
      </div>

      <!--tus categorias favoritas-->
      <h1 class="d-flex justify-center my-6 card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4" >
        <strong>{{$t('tus categorias favoritas')}}</strong>
      </h1>

      <CategoryCard :category-list="categoryList"/>

      <!--en marcas lo tenemos tooodo-->
      <h1 class="d-flex justify-center mt-8 mb-2 card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4">
        <strong>{{$t('en marcas')}},</strong>
        <span style="color: white">.</span>
        <span class="font-weight-light">{{$t('lo tenemos todo')}}</span>
      </h1>

      <!--carrusel de marcas- MD >= -->
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex mb-6">
        <v-app id="inspire" style="height: 350px">
          <v-sheet
              class="mx-auto"
              max-width="1200"
          >
            <v-slide-group
                v-model="modal"
                class="pa-2"
                center-active
                show-arrows
            >
              <v-slide-item
                  v-for="(marca, n) in marcas"
                  :key="n"
                  v-slot="{ active, toggle }"
              >
                <!-- v-slot="{ active, toggle }" -->
                <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    elevation="0"
                    class="ma-1"
                    height="325"
                    width="197"
                    @click="toggle"
                >
                  <v-img
                      height="325"
                      :src="marca.src"
                  >
                  </v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-app>
      </div>

      <!--carrusel de marcas- SM  -->
      <div class="d-none d-sm-flex d-md-none">
        <v-app id="inspire mb-0" style="height: 290pt">
          <v-sheet
              class="mx-auto"
              elevation="0"
              max-width="900"
          >
            <v-slide-group
                v-model="modal"
                class="pa-2"
                center-active
                show-arrows
            >
              <v-slide-item
                  v-for="(marca, n) in marcas"
                  :key="n"
                  v-slot="{ active, toggle }"
              >
                <!-- v-slot="{ active, toggle }" -->
                <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    elevation="0"
                    class="ma-1"
                    height="325"
                    width="197"
                    @click="toggle"
                >
                  <v-img
                      height="325"
                      :src="marca.src"
                  >
                  </v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-app>
      </div>

      <!--carrusel de marcas- xs  -->
      <div class="d-flex d-sm-none  d-none">
        <v-app id="inspire mb-0" style="height: 290pt">
          <v-sheet
              class="mx-auto"
              elevation="0"
              max-width="530"
          >
            <v-slide-group
                v-model="modal"
                class="pa-2"
                center-active
                show-arrows
            >
              <v-slide-item
                  v-for="(marca, n) in marcas"
                  :key="n"
                  v-slot="{ active, toggle }"
              >
                <!-- v-slot="{ active, toggle }" -->
                <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    elevation="0"
                    class="ma-1"
                    height="325"
                    width="197"
                    @click="toggle"
                >
                  <v-img
                      height="325"
                      :src="marca.src"
                  >
                  </v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-app>
      </div>

      <!--emprendedores y pymes-->
      <h1 class="d-flex justify-center card_title text-h5 text-sm-h5 text-md-h5 text-lg-h4 text-xl-h4" >
        <strong>{{$t('emprendedores y pymes')}}</strong>
      </h1>

      <!--Publicidad Emprendedores- MD >= -->
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex">
        <v-row class="mt-1 mb-10">
        <v-col cols="1" class="mt-1" style="z-index: 1">
          <img height="440" src="https://home.ripley.com.pe/minisitios/home/c/22/05/06/EMPRENDEDORES/webp/emprendedores_titulo.webp">
        </v-col>
        <v-col cols="11">
          <v-app id="inspire mb-0" style="height: 300pt">
          <v-sheet
              class="mx-auto"
              elevation="0"
              max-width="1160"
          >
          <v-slide-group
              v-model="modalB"
              center-active
              show-arrows
          >
              <v-slide-item
                  v-for="(foto, n) in fotosEmp"
                  :key="n"
                  v-slot="{ active, toggle }"
              >
                <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    elevation="0"
                    class="ma-1"
                    height="440"
                    width="345"
                    @click="toggle"
                >
                  <v-img
                  
                      min-height="440"
                      :src="foto.src"
                  >
                  </v-img>
                </v-card>
              </v-slide-item>
          </v-slide-group>
          </v-sheet>
          </v-app>
        </v-col>
        </v-row>
      </div>

      <!--Publicidad Emprendedores- SM >= -->
      <div class="d-none d-sm-flex d-md-none">
        <v-row class="mt-1 mb-10">
        <v-col cols="1" class="mt-1" style="z-index: 1">
          <img height="440" src="https://home.ripley.com.pe/minisitios/home/c/22/05/06/EMPRENDEDORES/webp/emprendedores_titulo.webp">
        </v-col>
        <v-col cols="11">
          <v-app id="inspire mb-0" style="height: 300pt">
          <v-sheet
              class="mx-auto"
              elevation="0"
              max-width="800"
          >
          <v-slide-group
              v-model="modalB"
              center-active
              show-arrows
          >
              <v-slide-item
                  v-for="(foto, n) in fotosEmp"
                  :key="n"
                  v-slot="{ active, toggle }"
              >
                <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    elevation="0"
                    class="ma-1"
                    height="440"
                    width="345"
                    @click="toggle"
                >
                  <v-img
                  
                      min-height="440"
                      :src="foto.src"
                  >
                  </v-img>
                </v-card>
              </v-slide-item>
          </v-slide-group>
          </v-sheet>
          </v-app>
        </v-col>
        </v-row>
      </div>

      <!--Publicidad Emprendedores- xs -->
      <div class="d-flex d-sm-none  d-none">
        <v-row class="mt-1 mb-10">
        <v-col cols="1" class="mt-1" style="z-index: 1">
          <img height="250" src="https://home.ripley.com.pe/minisitios/home/c/22/05/06/EMPRENDEDORES/webp/emprendedores_titulo.webp">
        </v-col>
        <v-col cols="11">
          <v-app id="inspire mb-0" style="height: 0">
          <v-sheet
              class="mx-auto"
              elevation="0"
              max-width="360"
          >
          <v-slide-group class="ml-3"
              v-model="modalB"
              center-active
              
          >
          <!-- show-arrows-->
              <v-slide-item
                  v-for="(foto, n) in fotosEmp"
                  :key="n"
                  v-slot="{ active, toggle }"
              >
                <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    elevation="0"
                    class="ma-1"
                    height="250"
                    width="180"
                    @click="toggle"
                >
                  <v-img
                  
                      min-height="250"
                      :src="foto.src"
                  >
                  </v-img>
                </v-card>
              </v-slide-item>
          </v-slide-group>
          </v-sheet>
          </v-app>
        </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Ref, ref, defineComponent, PropType} from "@vue/composition-api";
import CategoryCard from "@/components/cards/CategoryCard.vue";
import CategoryAllModel from "@/models/Category/CategoryAllModel";
import i18n from "@/plugins/i18n";


export default defineComponent({
  name: "MainSection",
  components: {
    CategoryCard
  },
  props:{
    categoryList:{
      type: Object as PropType<CategoryAllModel>
    },
    categorySix:{
      type: Object as PropType<CategoryAllModel>
    },
  },

  setup: function () {

    const model: Ref<number> = ref(0);
    /** Arrays para Carrusel de mascotas */

    /** Arrays para Carrusel de "descubre lo + nuevo" */
    const elementos: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/13/LO_MAS_NUEVO/webp/1.webp',
        link: 'https://simple.ripley.com.pe/mujer/ropa-mujer/ver-todo'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/LO_MAS_NUEVO/webp/2.webp',
        link: 'https://simple.ripley.com.pe/hogar/ropa-de-cama/edredones-y-sets-de-cama-deco'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/LO_MAS_NUEVO/webp/3.webp',
        link: 'https://simple.ripley.com.pe/hogar/ropa-de-cama/edredones-y-sets-de-cama-deco'
      }
    ]);

    const elementos_two: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/2.webp',
        link: 'https://simple.ripley.com.pe/mujer/ropa-mujer/ver-todo'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/4.webp',
        link: 'https://simple.ripley.com.pe/hogar/ropa-de-cama/edredones-y-sets-de-cama-deco'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/6.webp',
        link: 'https://simple.ripley.com.pe/hogar/ropa-de-cama/edredones-y-sets-de-cama-deco'
      }
    ]);

    const modalB: Ref<any> = ref(0);

    const fotosEmp: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/EMPRENDEDORES/webp/1.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/EMPRENDEDORES/webp/2.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/13/EMPRENDEDORES/webp/3.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/11/EMPRENDEDORES/webp/4.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/EMPRENDEDORES/webp/5.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/EMPRENDEDORES/webp/6.webp',
      }
    ])

    const modal: Ref<any> = ref(0);

    const marcas: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/1.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/2.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/11.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/10.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/8.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/13/SIS/webp/6.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/7.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/8.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/10.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/11.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/SIS/webp/12.webp?v1',
      }
    ])

    const modalC: Ref<any> = ref(0);

    const fotosNew: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/13/LO_MAS_NUEVO/webp/1.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/LO_MAS_NUEVO/webp/2.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/LO_MAS_NUEVO/webp/3.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/LO_MAS_NUEVO/webp/4.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/15/LO_MAS_NUEVO/webp/5.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/12/LO_MAS_NUEVO/webp/6.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/12/LO_MAS_NUEVO/webp/7.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/LO_MAS_NUEVO/webp/8.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/11/LO_MAS_NUEVO/webp/9.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/11/LO_MAS_NUEVO/webp/12.webp',
      }
    ])

    const modalD: Ref<any> = ref(0);

    const fotosMask: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/1.jpg',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/3.jpg?v2',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/2.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/4.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/webp/6.webp',
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/ZONA_CAMPANAS/1.jpg',
      }
    ])

    const modalE: Ref<any> = ref( 0);

    const categoriasFavoritas: Ref<Array<any>> = ref([
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/1.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/2.webp',
        title: 'HOMBRE'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/3.webp',
        title: 'CALZADO'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/4.webp',
        title: 'BELLEZA'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/5.webp',
        title: 'INFANTIL'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/6.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/7.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/8.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/9.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/10.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/11.webp',
        title: 'MUJER'
      },
      {
        src: 'https://home.ripley.com.pe/minisitios/home/c/22/07/09/CATEGORIAS_TRAD/webp/12.webp',
        title: 'MUJER'
      },
    ])

    /**
     * i18n
     */
    const e1 = 'es';
    const lang = [
      { id: 'es', title: 'Español', iconlang:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/2560px-Flag_of_Catalonia.svg.png' },
      { id: 'en', title: 'Ingles', iconlang:'https://www.nicepng.com/png/full/6-63506_usa-png-clipart-american-flag-icon-png.png'}
    ];
    function selectLanguage(id:string) {
      i18n.locale = id;
    }


    return {
      //variables
      e1,
      lang,
      selectLanguage,
      model,
      modal,
      modalB,
      marcas,
      modalC,
      fotosNew,
      fotosEmp,
      modalD,
      fotosMask,
      elementos,
      elementos_two,

    }

  }
})
</script>

<style scoped>
.card_title{
  font-size: 35px;
  color: #4a4a4a ;
}

@media (min-width: 1048px) {
  /**1024*/
  .container {
    /**1350*/
    max-width: 1200px !important;
  }
  .menu {
    max-width: 1700px !important;
  }
}

@media (max-width: 960px) {
  .subtitle-sm {
    font-size: 20pt !important;
  }
}

@media (max-width: 700px) {
  .subtitle-xs {
    font-size: 16pt !important;
  }
}



</style>