<template>
   <v-container>
       <v-textarea
               clearable
               v-model="text"
               clear-icon="mdi-close"
               label="QR Text"
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
        <v-btn color="primary"
               dark
               @click.stop="dialog = true"> Generate Qr code</v-btn>
    </div>

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
                console.log(childSpanClassAttr)
                download(childSpanClassAttr)
            }
        }
    }
</script>

<style scoped>

</style>