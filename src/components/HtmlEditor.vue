<template>
    <div >



        <v-row>
            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-row>
                        <v-col>
                            <H1>KDP HTML Descriptor Format Editor</H1>
                            <vue-editor  v-model="content" :editorToolbar="customToolbar"></vue-editor>
                                <div class="d-flex justify-end">
                                    <v-btn class="mt-2"
                                           dark
                                           v-bind="attrs"
                                           v-on="on"

                                    >
                                        Generate Html
                                    </v-btn>
                                </div>


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
                    // [{ 'header': [false, 1, 2, 3, 4, 5, 6, ] }],
                    // [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': 4 },  { 'header': 5 }, { 'header': 6 } ],
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
        },



        mounted(){
            // console.log(document.getElementsByClassName('ql-formats')[0])
            // document.getElementsByClassName('ql-formats')[0].getElementsByClassName('ql-header')[2].innerHTML = '<b>H3</b>'
            document.getElementsByClassName('ql-formats')[0].getElementsByClassName('ql-header')[0].innerHTML = '<b>H4</b>'
            document.getElementsByClassName('ql-formats')[0].getElementsByClassName('ql-header')[1].innerHTML = '<b>H5</b>'
            document.getElementsByClassName('ql-formats')[0].getElementsByClassName('ql-header')[2].innerHTML = '<b>H6</b>'
            // this.$refs.editor.$el = '<h1>hi</h1>'
            // console.log(this.$refs.editor.$el)
        }

    }
</script>

<style scoped>

</style>