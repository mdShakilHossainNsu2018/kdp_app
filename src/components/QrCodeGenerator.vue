<template>
   <v-container>
       <v-card class="px-9 py-9">
        <v-card-title style="margin-left: -1.2rem">QR Code Generator for KDP Books</v-card-title>

       <v-textarea

               clearable
               v-model="text"
               clear-icon="mdi-close"
               label="Enter URL or Text"
               value="text"
       ></v-textarea>

       <v-dialog
               v-model="dialog"
               max-width="290"
       >
           <v-card>
               <v-card-title class="headline">Successfully generated qr code</v-card-title>

               <v-card-text >



               <qrcode ref="qrcode" :value="text" :options="{ width: 240 }" tag="img"></qrcode>
               </v-card-text>
               <v-card-actions>
                   <v-spacer></v-spacer>

                   <v-btn
                           color="green darken-1"
                           text
                           @click="dialog = false"
                   >
                       Cancel
                   </v-btn>

                   <v-btn
                           color="green darken-1"
                           text
                           @click="click"
                   >
                       Download Qr
                   </v-btn>
               </v-card-actions>
           </v-card>
       </v-dialog>

    <div class="justify-end d-flex">
        <v-btn
               dark
               @click.stop="dialog = true"> Generate Qr code</v-btn>
    </div>
       </v-card>

   </v-container>

</template>

<script>
    const download = require('downloadjs');
    export default {
        name: "TrademarkSearch",

        data(){

            return{
                text: '',
                dialog: false,
            }

        },

        methods: {
            click(){
                var childSpanClassAttr = this.$refs['qrcode'].$el.src;
                download(childSpanClassAttr)
            }
        }
    }
</script>

<style scoped>

</style>