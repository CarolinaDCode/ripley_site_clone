<template>
  <div class="d-flex justify-center align-center text-center" height="300">
    <v-progress-circular
        indeterminate
        color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "progressBar"
})
</script>

<style scoped>

</style>