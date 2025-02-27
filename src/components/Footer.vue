<template>
  <div>
      <div class="footer_first">
        <v-btn
            @click="topButton"
            class="text-h5"
            plain
            color="#7E57C2">
          <v-icon>
            mdi-chevron-up mdi-36px
          </v-icon>
          subir
        </v-btn>
      </div>
    <!--Beneficios de Ripley Zona Purpura - LG y MD-->
      <div class="deep-purple lighten-1 d-none d-md-flex d-lg-none  d-none d-lg-flex justify-center"> <!--solo para el color violeta-->
        <div class="container"> <!--Contenedor del ancho-->
        <v-row height="200px">
          <v-col cols="2" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <v-img src="https://home.ripley.com.pe/minisitios/home/d/iconos/retiro-en-tienda.svg"></v-img>
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>{{$t('retiro en tienda')}}</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  {{$t('mas de 30 tiendas a lo')}}<br>
                  {{$t('largo del peru')}}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <v-img src="https://home.ripley.com.pe/minisitios/home/d/21/02/24/btn5-v2.svg"></v-img>
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>{{$t('atencion al cliente')}}</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  <v-icon dark>mdi-whatsapp</v-icon> +51 941955900<br>
                  (01) 611-5959
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <img height="90pt" src="https://home.ripley.com.pe/minisitios/home/d/iconos/extra-garantia.svg">
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>{{$t('extragarantia')}}</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  {{$t('prolonga la garantia')}}<br>
                  {{$t('de tus productos')}}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <img height="65pt" src="https://home.ripley.com.pe/minisitios/home/d/iconos/devolucion.svg">
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>{{$t('devolucion')}}</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  {{$t('cambios y')}}<br>
                  {{$t('devoluciones')}}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2" class="text-center pt-12">
            <img height="100pt" src="https://home.ripley.com.pe/minisitios/home/artes/libro_reclamaciones.jpeg">
          </v-col>
          <v-col cols="2" class="pt-15">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <img height="65pt" src="https://home.ripley.com.pe/minisitios/home/d/iconos/servicio-al-cliente.svg">
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>{{$t('servicio al cliente')}}</strong>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        </div>
      </div>

    <!--Beneficios de Ripley Zona Purpura - SM , en XS desaparece -->
      <div class="deep-purple lighten-1 d-none d-sm-flex d-md-none justify-center"> <!--solo para el color violeta-->
        <div class="container"> <!--Contenedor del ancho-->
          <v-row style="height: 300pt">
          <v-col cols="4" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <v-img src="https://home.ripley.com.pe/minisitios/home/d/iconos/retiro-en-tienda.svg"></v-img>
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>Retiro en Tienda</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  Más de 30 tiendas a lo<br>
                  largo del Perú
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <v-img src="https://home.ripley.com.pe/minisitios/home/d/21/02/24/btn5-v2.svg"></v-img>
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>Atención al Cliente</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  <v-icon dark>mdi-whatsapp</v-icon> +51 941955900<br>
                  (01) 611-5959
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <img height="90pt" src="https://home.ripley.com.pe/minisitios/home/d/iconos/extra-garantia.svg">
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>Extragarantía</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  Prolonga la garantía<br>
                  de tus productos
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="pt-9">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <img height="65pt" src="https://home.ripley.com.pe/minisitios/home/d/iconos/devolucion.svg">
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>Devolución</strong>
                </p>
                <div style="color: #ffffff; font-size: 10pt">
                  Cambios y <br>
                  Devoluciones
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="4" class="text-center pt-12">
            <img height="100pt" src="https://home.ripley.com.pe/minisitios/home/artes/libro_reclamaciones.jpeg">
          </v-col>
          <v-col cols="4" class="pt-15">
            <v-card
                color="transparent"
                class="mx-auto text-center"
                elevation="0"
                max-width="344"
            >
              <v-btn
                  text
                  color="deep-purple accent-4"
              >
                <img height="65pt" src="https://home.ripley.com.pe/minisitios/home/d/iconos/servicio-al-cliente.svg">
              </v-btn>
              <v-card-text>
                <p class="text-h7 mb-0" style="color: #ffffff">
                  <strong>Servicio al Cliente</strong>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        </div>
      </div>

    <!--Beneficios de Ripley  Zona GRIS - LG y MD-->
      <div class="d-none d-md-flex d-lg-none  d-none d-lg-flex" style="background-color: #333333">
      <div class="container">
        <v-row style="height: 400pt">
          <v-col cols="3 mt-15">
            <v-card
                color="transparent"
                elevation="0"
            >
              <v-card-title class="pl-0 white--text font-weight-bold" style="font-size: 13pt">Compra con Confianza</v-card-title>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('como comprar en ripley ')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('guias de compra')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('terminos y condiciones')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('cambios y devoluciones')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('bases legales')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('seguridad y privacidad')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('seguimiento de despacho')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('politica de privacidad de datos')}}</p>
            </v-card>
          </v-col>
          <v-col cols="2 mt-15">
            <v-card
                color="transparent"
                elevation="0"
            >
              <v-card-title class="pl-0 white--text font-weight-bold" style="font-size: 13pt">{{$t('sobre ripley')}}</v-card-title>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('portal de personas ')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('quienes somos')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('nuestras tiendas')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('trabaja con nosotros')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('comprobante electronico')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('reporte de sostenibilidad')}}</p>
            </v-card>
          </v-col>
          <v-col cols="3 mt-15">
            <v-card
                color="transparent"
                elevation="0"
            >
              <v-card-title class="pl-0 white--text font-weight-bold" style="font-size: 13pt">Más de Ripley</v-card-title>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('banco ripley')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('tarjeta ripley')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('efectivo express')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('ripleypuntos')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('seguros ripley')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('extra garantia')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('cyber wow')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('cyber day chile')}}</p>
              <p class="white--text mb-1" style="font-size: 12pt">{{$t('ripley chile')}}</p>
            </v-card>
          </v-col>
          <v-col cols="4 mt-15">
            <v-card
                color="transparent"
                elevation="0"
            >
              <v-card-title class="pl-0 white--text font-weight-bold">
                {{$t('suscribete')}}
              </v-card-title>

              <!-- box white Para LG y MD-->
              <div class="d-none d-lg-flex">
                <v-row class="flex-start">
                    <v-text-field
                     dense
                     style="width: 200pt"
                     background-color="#fff"
                     class="pl-3 mx-0 rounded-r-0"
                     flat
                     :label="$t('ingresa_correo')"
                     solo-inverted
                    ></v-text-field>
                  <v-btn elevation="0" class="rounded-l-0" style="height: 28.5pt" color="#8755ba" dark>
                    {{$t('suscribete')}}
                  </v-btn>
                </v-row>
              </div>

              <!-- box whitePara MD-->
              <div class="d-none d-md-flex d-lg-none">
                <v-row class="flex-start">
                  <v-text-field
                      dense
                      style="width: 150pt"
                      background-color="#fff"
                      class="pl-3 mx-0 rounded-r-0"
                      flat
                      label="Ingresa tu correo"
                      solo-inverted
                  ></v-text-field>
                  <v-btn elevation="0" class="rounded-l-0" style="height: 28.5pt" color="#8755ba" dark>
                    Suscríbete
                  </v-btn>
                </v-row>
              </div>

              <!-- box white Para SM-->
              <div class="d-none d-sm-flex d-md-none">
                <v-row class="flex-start">
                  <v-text-field
                      dense
                      style="width: 100pt"
                      background-color="#fff"
                      class="pl-3 mx-0 rounded-r-0"
                      flat
                      label="Ingresa tu correo"
                      solo-inverted
                  ></v-text-field>
                  <v-btn elevation="0" class="rounded-l-0" style="height: 28.5pt" color="#8755ba" dark>
                    Suscríbete
                  </v-btn>
                </v-row>
              </div>

              <v-row>
                <v-checkbox class="mt-0 pt-2 pl-2">
                    <!--
                    v-model="checkbox"
                    :label="`Checkbox 1: ${checkbox.toString()}`"
                    -->
                </v-checkbox>
                <p class="white--text mb-2 pt-2" style="font-size: 13pt">{{$t('acepto los terminos y condiciones')}}</p>
              </v-row>
              <v-card-title class="pl-0 white--text font-weight-bold pb-5">{{$t('medios de Pago')}}</v-card-title>
              <v-row>
                <v-icon class="ml-2 white--text">mdi-card-account-phone mdi-36px</v-icon>
                <v-icon class="ml-2 white--text">mdi-security mdi-36px</v-icon>
                <v-icon class="ml-2 white--text">mdi-credit-card mdi-36px</v-icon>
                <v-icon class="ml-2 white--text">mdi-card-bulleted-settings mdi-36px</v-icon>
                <v-icon class="ml-2 white--text">mdi-card-text mdi-36px</v-icon>
                <v-icon class="ml-2 white--text">mdi-card-account-details mdi-36px</v-icon>
              </v-row>
              <v-card-title class="pl-0 pb-3 mt-6 white--text font-weight-bold">{{$t('siguenos')}}</v-card-title>
              <v-icon class="white--text">mdi-facebook mdi-36px</v-icon>
              <v-icon class="ml-2 white--text">mdi-twitter mdi-36px</v-icon>
              <v-icon class="ml-2 white--text">mdi-youtube mdi-36px</v-icon>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <p class="white--text" style="font-size: 11pt">
            {{$t('parrafo1')}}
          </p>
        </v-row>
        <v-row class="justify-center">
          <p class="grey--text text-center pb-10" style="font-size: 11pt">
            {{$t('parrafo2')}}
          </p>
        </v-row>
      </div>
    </div>

    <!--Beneficios de Ripley  Zona GRIS - SM y XS -->
    <div class="d-none d-sm-flex d-md-none d-flex d-sm-none" style="background-color: #333333">
      <div class="container">
        <template>
          <v-expansion-panels class="whithoutShadow">
            <v-expansion-panel class="transparent">
              <v-expansion-panel-header>
                <h3 class="text--white"><strong>Compra con Confianza</strong></h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="mb-1 text--white" style="font-size: 12pt">¿Cómo comprar en Ripley.com?</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Guias de Compra</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Términos y codiciones</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Cambios y Devoluciones</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Bases Legales</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Seguridad y Privacidad</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Seguimiento de despacho</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Política de privacidad de datos</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
        <template>
          <v-expansion-panels class="whithoutShadow">
            <v-expansion-panel class="transparent">
              <v-expansion-panel-header>
                <h3 class="text--white"><strong>Sobre Ripley</strong></h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="mb-1 text--white" style="font-size: 12pt">Portal de Personas</p>
                <p class="mb-1 text--white" style="font-size: 12pt">¿Quiénes Somos?</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Nuestras Tiendas</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Trabaja con Nosotros</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Comprobante Electrónico</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Reporte de Sostenibilidad</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
        <template>
          <v-expansion-panels class="whithoutShadow">
            <v-expansion-panel class="transparent">
              <v-expansion-panel-header>
                <h3 class="text--white"><strong>Más de Ripley</strong></h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="mb-1 text--white" style="font-size: 12pt">Banco Ripley</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Tarjeta Ripley</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Efectivo Express</p>
                <p class="mb-1 text--white" style="font-size: 12pt">RipleyPuntos</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Seguros Ripley</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Extra Garantía</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Cyber Wow</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Cyber Day chile</p>
                <p class="mb-1 text--white" style="font-size: 12pt">Ripley Chile</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template>
        <h3 class="pl-5 pt-5 pb-4 white--text mb-3 font-weight-bold">Suscríbete</h3>
        <v-row>
         <v-col cols="12" width="100vw">
           <v-row class="flex-start">
             <v-text-field
                 dense
                 style="width: 200pt"
                 background-color="#fff"
                 class="pl-8 mx-0 rounded-r-0"
                 flat
                 :label="$t('ingresa_correo')"
                 solo-inverted
             ></v-text-field>
             <v-btn elevation="0" class="pr-4 mr-8 rounded-l-0" style="height: 28.5pt" color="#8755ba" dark>
               Suscríbete
             </v-btn>
           </v-row>
         </v-col>
         <v-col cols="12">
           <v-row class="flex-start">
              <v-checkbox
               class="mt-0 pt-2 pl-7"
           >
                      <!--
                      v-model="checkbox"
                      :label="`Checkbox 1: ${checkbox.toString()}`"
                      -->
           </v-checkbox>
              <p class="white--text mb-2 pt-2" style="font-size: 13pt">Acepto los Términos y condiciones</p>
           </v-row>
         </v-col>
         <v-col cols="12">
          <h3 class="pl-5 white--text font-weight-bold pb-5">Medios de Pago</h3>
          <v-row>
            <v-icon class="ml-2 pl-6 white--text">mdi-card-account-phone mdi-36px</v-icon>
            <v-icon class="ml-2 white--text">mdi-security mdi-36px</v-icon>
            <v-icon class="ml-2 white--text">mdi-credit-card mdi-36px</v-icon>
            <v-icon class="ml-2 white--text">mdi-card-bulleted-settings mdi-36px</v-icon>
            <v-icon class="ml-2 white--text">mdi-card-text mdi-36px</v-icon>
            <v-icon class="ml-2 white--text">mdi-card-account-details mdi-36px</v-icon>
          </v-row>
         </v-col>
         <v-col cols="12">
           <h3 class="pl-5 pb-3 mt-6 white--text font-weight-bold">Síguenos</h3>
           <v-icon class="pl-4 white--text">mdi-facebook mdi-36px</v-icon>
           <v-icon class="ml-2 white--text">mdi-twitter mdi-36px</v-icon>
           <v-icon class="ml-2 white--text">mdi-youtube mdi-36px</v-icon>
         </v-col>
         <v-col cols="12" class="justify-center">
            <p class="pl-5 mb-0 white--text" style="font-size: 11pt">
              {{$t('parrafo1')}}
            </p>
         </v-col>
         <v-col cols="12" class="justify-center">
            <p class="pl-5 pt-0 grey--text pb-10" style="font-size: 9pt">Precios solo disponibles en www.ripley.com.pe y Fonocompras. Precios Internet publicados incluyen descuento adicional. Precios sujetos a variaciones sin previo aviso. Productos sujetos a
              <br>disponibilidad de stock. Solo consumo familiar. Stock mínimo 1 unidad por producto. Ofertas se rigen de acuerdo a los términos y condiciones. Despacho de producto se realizará una vez
              <br>confirmada la compra.</p>
          </v-col>
        </v-row>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name:'Footer',

  setup() {

    const topButton = () =>{
      window.scroll({
        top: 100,
        left: 100,
        behavior: 'smooth'}
      )
    }

    return{
      topButton
    }
  }
})

</script>
<style>
.footer_first{
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40pt
}

.transparent {
  background-color: transparent !important;
}

.whithoutShadow {
  z-index: unset;
}
.text--white{
  color: white;
}
@media (min-width: 1048px) {
  /**1024*/
  .container {
    /**1350*/
    max-width: 1200px !important;
  }
}
</style>