<template>
    <div >



        <v-row>
            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-row>
                        <v-col>
                            <vue-editor  v-model="content" :editorToolbar="customToolbar"></vue-editor>

                                <v-btn class="mt-2 mx-auto"

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

        title(){ return 'Self Publishing Titans'},

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
                customToolbar: [
                    // [{ 'font': [] }],
                    [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
                    // [{ 'size': ['small', false, 'large', 'huge'] }],
                    // [{ 'header': 1 }, { 'header': 2 }],
                    ["bold", "italic", "underline"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    // ['blockquote', 'code-block'],
                    // [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                    // [{ 'script': 'sub'}, { 'script': 'super' }],
                    // [{ 'indent': '-1'}, { 'indent': '+1' }],
                    // [{ 'color': [] }, { 'background': [] }],
                    // ['link', 'image', 'video', 'formula'],
                    [{ 'direction': 'rtl' }],
                    ['clean'],
                    // [
                    //     { align: "" },
                    //     { align: "center" },
                    //     { align: "right" },
                    //     { align: "justify" }
                    // ],
                    // [{ color: [] }]
                ]
                // customToolbar: [["bold", "italic", "underline"], [{ list: "ordered" }, { list: "bullet" }, {list:'code'}]]
            };
        }

    }
</script>

<style scoped>

</style>