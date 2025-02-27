<template>
    <v-btn :elevation="elevation"   :color="color" @click="$emit('click')">{{ text }}</v-btn>
</template>

<script lang="ts">
    import { defineComponent } from "@vue/composition-api";

    export default defineComponent({
        name: "Test",
        props: {
            text: {
                type: String,
            },
            color: {
                type: String,
            },
            elevation: {
              type: Number
              }
        },
    });
</script>

<style scoped></style>
