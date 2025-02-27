import ProductCard from "./ProductCard.vue"
import {onMounted} from "@vue/composition-api";
import {text, number } from "@storybook/addon-knobs/dist";

export default {
    title: "ProductCard",
};

export const TestStories: any = () => ({
    props: {
            descuento: {
                default: number('Agrega un descuento', 0)
            },
            textNombreDMarca: {
                default: text("Agrega un nombre", "DogChow")
            },
            textNombreDescripcion: {
                default: text("Agrega una descripcion", "Comida para Perros")
            },
            PrecioUnitario: {
                default: number('Precio Unitario', 0)
            },
            PrecioFinal: {
                default: number('Precio Final', 0)
            }
        },
        components: {
            ProductCard
        },
        template: `<product-card :descuento="descuento"
                         :textNombreDMarca="textNombreDMarca"
                         :textNombreDescripcion="textNombreDescripcion"
                         :PrecioUnitario="PrecioUnitario"
                         :PrecioFinal="PrecioFinal"
                         @click="onClick" />`,
        setup() {

            onMounted(() => {
                console.log("NOOOOOOOO!!!!!!")
            });

            function onClick() {
                console.log("onClick");
            }

            return {
                onClick
            }
        }

})