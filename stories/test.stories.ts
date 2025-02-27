import Test from "./Test.vue"
import { color, text, number } from "@storybook/addon-knobs/dist";
import {onMounted} from "@vue/composition-api";


export default {
    title: "Test",
};

export const TestStories: any = () => ({
    props: {
        text: {
            default: text("Enter a text", "Hello")
        },
        color: {
            default: color("Pick a color", "")
        },
        elevation:{
            default: number('Pick a number', 0)
        },
    },
    components: {
        Test,
    },
    template: `<test :elevation="elevation" :text="text" :color="color" @click="onClick"></test>`,
    setup() {
        onMounted(() => {
            console.log("ONMOUNTED!!!!!!")
        });

        function onClick() {
            console.log("onClick");
        }

        return {
            onClick
        }
    }
})