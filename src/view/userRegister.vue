<template>
  <v-container class="ma-0 widthFull">
    <v-card
        src="@/assets/register_background.svg"
        class="d-flex justify-center rounded-0 test py-5"
        elevation="0"
    >
      <v-card
          class="d-flex flex-column align-center px-10 py-5"
          color="white"
          elevation="0"
      >
        <v-alert
            :value="response.registered"
            transition="scale-transition"
            dense
            outlined
            :type="response.color"
        >
          {{response.info}}
        </v-alert>
        <h1 class="text-xl-h2 my-7
                   font-weight-bold purpleTxt"
            >¿No estas registrado?</h1>
        <p class="grey--text text--darken-1">Regístrate y disfrutarás de una experiencia de compra más rápida</p>
        <v-row class="align-start mt-10">
        <v-col cols="6"
          class="d-flex flex-column align-center pr-12">
          <v-img max-width="120" class="mb-5" src="@/assets/users.png"></v-img>
          <div class="d-flex flex-column">
            <h1 class="purpleTxt subTitleForm mb-5">Beneficios de tener una cuenta</h1>
            <ul class="pl-14">
              <li class="grey--text text--darken-1">Tener acceso exclusivo a <strong>ofertas y promociones.</strong></li>
              <li class="grey--text text--darken-1"><strong>Comprar en un click.</strong></li>
              <li class="grey--text text--darken-1">Revisar tu <strong>historial de compras.</strong></li>
              <li class="grey--text text--darken-1">Guardar y actualizar <strong>tus datos o direcciones.</strong></li>
            </ul>
          </div>
        </v-col>
        <v-col cols="6" class="width500">
          <h1 class="purpleTxt subTitleForm mb-6">Completa el siguiente formulario</h1>
          <v-form
              ref="formulario"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                v-model="formData.name"
                label="Nombre"
                placeholder="Ingresa tu Nombre"
                outlined
                dense
                required
            ></v-text-field>
            <v-text-field
                v-model="formData.lastname"
                label="Apellido"
                placeholder="Ingresa tu Apellido"
                outlined
                dense
                required
            ></v-text-field>
            <v-text-field
                v-model="formData.dni"
                :rules="[v => /[0-9]/g.test(v) || 'Solamente numeros']"
                label="DNI"
                placeholder="Ingresa tu DNI"
                outlined
                required
                dense
            ></v-text-field>
            <v-text-field
                v-model="formData.email"
                label="E-mail"
                placeholder="Ingresa un email válido"
                outlined
                dense
                required
            ></v-text-field>
            <v-text-field
                type="password"
                :rules="[v => v.length > 6 || 'Contraseña debil!']"
                v-model="formData.password"
                label="Contraseña"
                placeholder="Crea tu contraseña"
                outlined
                dense
                required
            ></v-text-field>
            <v-checkbox
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Acepto los términos y condiciones"
                required
            ></v-checkbox>
            <v-btn
                color="info"
                @click="registerUser"
            >
              Registrarme
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      </v-card>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import {defineComponent, reactive, Ref, ref, onMounted} from "@vue/composition-api";
import {userService} from "@/services/UserService";

export default defineComponent({
  name:'userRegister',
  setup(_,context){

    const valid : Ref<boolean> = ref(false)

    let formData = reactive({
      name : '',
      lastname : '',
      dni : '',
      email : '',
      password : ''
    })
    let response = reactive({
      registered : false,
      info : '',
      color: 'success'
    })

    const  registerUser = async () =>{
      const valid = context.refs.formulario.validate()
      if(valid){
        await userService.registerUser(formData).then( res => {
          response.registered  = true
          if(res.registered == false){
            response.info = res.info
            response.color = 'error'

            setTimeout(() =>{
              response.registered  = false
            },3000)

          }else{
            response.info = res.info
            response.color = 'success'

            context.refs.formulario.reset()

          }
        })
      }
    }


    return{
      formData,
      response,
      valid,
      registerUser
    }
  }
})

</script>
<style>
.test{
  background-image: url("../assets/register_background.svg");
  background-repeat: repeat !important;
}

.purpleTxt{
  color: #70578b;
}
.subTitleForm{
  font-size: 31px;
  font-weight: normal
}

.width500{
  width: 500px;
}

.widthFull {
  max-width:100vw !important;
}
</style>