<template>
    <v-container class="px-16">
        <v-card class="text-center px-9 py-9">
            <h1>PDF Combiner</h1>
            <v-file-input v-model="file" type="file" clearable label="File input"></v-file-input>
            <p v-for="(file, index) in file" :key="index">{{file[index].name}}</p>

            <v-btn @click="click" :disabled="uploadingState"><div v-if="!uploadingState">Upload</div> <div v-if="uploadingState">Uploading...</div> <v-progress-circular
                    indeterminate
                    v-if="uploadingState"
                    color="primary"
            ></v-progress-circular>
            </v-btn>
            <v-btn @click="margePdf" :disabled="margeLoadingState" class="ml-7"><div v-if="!margeLoadingState">Merge</div> <div v-if="margeLoadingState">Merging...</div> <v-progress-circular
                    indeterminate
                    v-if="margeLoadingState"
                    color="primary"
            ></v-progress-circular></v-btn>

<!--            <v-row>-->
                <draggable v-model="pdfs">
                    <transition-group  class="d-flex align-content-space-around flex-wrap justify-center">
                <div  v-for="(item, index) in pdfs" :key="index" class="d-flex align-content-space-around flex-wrap">
                    <v-card class="ma-3" style="cursor: grab" >
                        <v-card-actions class="justify-end">
                            <v-icon>mdi-arrow-left-bold-circle</v-icon>
                            <v-icon class="mr-9">mdi-arrow-right-bold-circle</v-icon>
                            <v-btn class="ml-7" icon @click="closePdf(item.id, index)"> <v-icon>mdi-close</v-icon></v-btn>
                        </v-card-actions>
                        <v-card-title>
                            {{item.pdf_file_name}}
                            <br>
                            Total Pages: {{item.total_pages}}
                            <br>

                            <div style="font-size: 5px; display: none;">{{item.pdf_file}}</div>

                        </v-card-title>
<!--                        <vue-friendly-iframe scrolling="no" :src="item.pdf_file"></vue-friendly-iframe>-->
                        <iframe  scrolling="no" allowfullscreen :src="item.pdf_file" height="200" width="250" >
                        </iframe>
                    </v-card>
                </div>
                    </transition-group>
                </draggable>
<!--            </v-row>-->


        </v-card>

        <v-snackbar
                v-model="snackbar.show"
        >
            {{ snackbar.message }}

            <template v-slot:action="{ attrs }">
                <v-btn
                        :color="snackbar.color"
                        text
                        v-bind="attrs"
                        @click="snackbar.show = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>

    import axios from "axios";
    import { PDFDocument } from 'pdf-lib'
    const download = require('downloadjs');
    import draggable from 'vuedraggable'


    async function mergePDFDocuments(documents) {
        const mergedPdf = await PDFDocument.create();


        for (let pdf of documents) {
           const secondDonorPdfBytes = await fetch(pdf.pdf_file).then(res => res.arrayBuffer())

            const document = await PDFDocument.load(secondDonorPdfBytes);

            const copiedPages = await mergedPdf.copyPages(document, document.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));


            await axios.delete(`${this.$store.state.baseApiUrl}api/pdf/pdf/` + pdf.id+ '/')
        }

        const pdfBytes = await mergedPdf.save();

        download(pdfBytes, "merged.pdf", "application/pdf");
    }

    export default {
        name: "PdfCombiner",

        components: {

            draggable,
        },

        data(){
            return{
                file: [],
                pdfs: [],
                uploadingState: false,
                margeLoadingState: false,
                snackbar: {
                    show: false,
                    message: null,
                    color: null
                },

            }
        },



        methods: {




            closePdf(id, index){
                this.$store.dispatch('pdfDelete', id).then(res=>{
                    this.pdfs.splice(index, 1)
                    this.snackbar = {
                        message: 'Successfully deleted.' + res.statusText + 'Status code: ' + res.status,
                        color: 'success',
                        show: true
                    }
                }).catch(err=>{console.log(err)
                    this.pdfs.splice(index, 1)

                    this.snackbar = {
                        message: 'Error occur.' + err.response.data.detail + 'Status code: ' + err.response.status,
                        color: 'error',
                        show: true
                    }

                    // console.log(err.response.data);
                    // console.log(err.response.status);
                    // console.log(err.response.headers);
                })
                

            },

            margePdf(){

                this.margeLoadingState = true
                mergePDFDocuments(this.pdfs).finally(()=>{
                    this.margeLoadingState = false
                    this.pdfs = []
                })
            },

            click(){

                let data = new FormData();
                if (this.file.length !== 0){
                        // creates a new FormData object
                    this.uploadingState = true
                        data.append('pdf_file', this.file); // add your file to form data
                        data.append('pdf_file_name', this.file.name)

                    this.$store.dispatch('pdfPost', data).then(res => {
                        console.log(res)
                        this.file = [];
                        this.pdfs.push(res.data)
                        this.snackbar = {
                            message: 'Uploaded Successfully.' + res.statusText + 'Status code: ' + res.status,
                            color: 'success',
                            show: true
                        }
                        this.uploadingState = false
                    }).catch(err => {
                        console.log(err)
                        this.snackbar = {
                            message: 'Error occur.' + err.response.data.detail + 'Status code: ' + err.response.status,
                            color: 'error',
                            show: true
                        }
                        this.uploadingState = false
                    })
                    }
            }
        },

    }
</script>

<style scoped>

</style>