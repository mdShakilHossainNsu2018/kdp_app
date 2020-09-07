<template>
    <v-container>
        <v-card class="text-center px-9 py-9">
            <h1>Pdf Combiner</h1>
            <v-file-input v-model="file" dark type="file" clearable label="File input"></v-file-input>
            <p v-for="(file, index) in file" :key="index">{{file[index].name}}</p>

            <v-btn @click="click">Upload</v-btn>
            <v-btn @click="margePdf" class="ml-7">Merge</v-btn>

            <v-row>
                <v-col cols="12" md="4" v-for="(item, index) in pdfs" :key="index">
                    <v-card >
                        <v-card-actions class="justify-end">
                            <v-btn icon @click="closePdf(item.id, index)"> <v-icon>mdi-close</v-icon></v-btn>
                        </v-card-actions>
                        <iframe scrolling="no" :src="getFile(item.pdf_file)" height="200" width="250"></iframe>
                    </v-card>
                </v-col>
            </v-row>


        </v-card>

    </v-container>
</template>

<script>

    import axios from "axios";
    import { PDFDocument } from 'pdf-lib'
    // import {download} from 'downloadjs'
    const download = require('downloadjs');


    async function mergePDFDocuments(documents) {
        const mergedPdf = await PDFDocument.create();

        // console.log(documents)

        for (let pdf of documents) {
           const secondDonorPdfBytes = await fetch(pdf.pdf_file).then(res => res.arrayBuffer())

            const document = await PDFDocument.load(secondDonorPdfBytes);

            const copiedPages = await mergedPdf.copyPages(document, document.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));


            await axios.delete('https://salty-beyond-56733.herokuapp.com/api/pdf/pdf/' + pdf.id+ '/')
        }

        const pdfBytes = await mergedPdf.save();

        download(pdfBytes, "merged.pdf", "application/pdf");
    }

    export default {
        name: "PdfCombiner",

        data(){
            return{
                file: [],
                pdfs: [],
            }
        },

        // async created (){
        //     await this.margePdf()
        // },

        methods: {


            getFile(data){
                return data
            },

            closePdf(id, index){
                this.$store.dispatch('pdfDelete', id).then(res=>{
                    this.pdfs.splice(index, 1)
                    console.log(res)
                }).catch(err=>{console.log(err)})
                

            },

            margePdf(){

                mergePDFDocuments(this.pdfs)
                // let pdf = []

                // await this.pdfs.forEach((item, index) => {
                //     const firstDonorPdfBytes = await fetch(item.pdf_file).then(res => res.arrayBuffer())
                // })
                // console.log(pdf)

                    // const url1 = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
                    // const url2 = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
                // const pdfDoc = await PDFDocument.create();
                //
                // for (let file of this.pdfs){
                //     console.log(file)
                //     // const secondDonorPdfBytes = await fetch(file.pdf_file).then(res => res.arrayBuffer())
                //     // const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes)
                //     // // const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc)
                //     // const copiedPages = await pdfDoc.copyPages(secondDonorPdfDoc, secondDonorPdfDoc.getPageIndices());
                //     // copiedPages.forEach((page) => pdfDoc.addPage(page));
                //     // pdfDoc.addPage(secondDonorPdfDoc)
                //
                // }
                //     // const secondDonorPdfBytes = await fetch(url2).then(res => res.arrayBuffer())
                //
                //     // const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes)
                //     // const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes)
                //
                //
                //
                //     // const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0])
                //     // const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc, [742])
                //
                //     // pdfDoc.addPage(firstDonorPage)
                //     // pdfDoc.insertPage(0, secondDonorPage)
                //     // console.log('gaios')
                //
                //    const pdfBytes = await pdfDoc.save()
                //
                // // Trigger the browser to download the PDF document
                // download(pdfBytes, "pdf-lib_modification_example.pdf", "application/pdf");


            },

            click(){
                // this.$store.commit('pdf_file_name_set_null')
                let data = new FormData();
                if (this.file.length !== 0){
                        // creates a new FormData object
                        data.append('pdf_file', this.file); // add your file to form data
                        data.append('pdf_file_name', this.file.name)

                    this.$store.dispatch('pdfPost', data).then(res => {
                        console.log(res)
                        this.file = [];

                        this.pdfs.push(res.data)
                    })
                    }
            }
        }
    }
</script>

<style scoped>

</style>