<template>
    <div >



        <v-row justify="left">
            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-row>
                        <v-col>
                            <vue-editor v-model="content"></vue-editor>
                            <v-btn class="mt-2"

                                    dark
                                    v-bind="attrs"
                                    v-on="on"

                            >
                                Generate Html
                            </v-btn>
                        </v-col>
                    </v-row>

                </template>
                <v-card>
                    <v-card-title>
                        <span class="headline">Copy the Html</span>
                    </v-card-title>
                    <v-card-text>{{content}}</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="green darken-1"  v-clipboard:copy="content" text @click="dialog = false">Copy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    export default {
        name: "HtmlEditor",

        components: {
            VueEditor
        },

        methods: {
            click(){
                console.log(this.content);
            }
        },

        data() {
            return {
                content: "",
                dialog: false,
            };
        }

    }
</script>

<style scoped>

</style>