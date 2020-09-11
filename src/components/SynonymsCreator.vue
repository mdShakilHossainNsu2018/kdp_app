<template>
    <v-container>
        <v-form v-on:submit.prevent="clickMe">
            <v-container style="max-width: 50%">
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                                v-model="message"
                                outlined
                                clearable
                                label="Search for synonyms..."
                                type="text"

                        >
                            <template v-slot:prepend>
                                <v-tooltip
                                        bottom
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on">mdi-help-circle-outline</v-icon>
                                    </template>
                                    Hit enter for synonyms...
                                </v-tooltip>
                            </template>
                            <template v-slot:append>
                                <v-fade-transition leave-absolute>
                                    <v-progress-circular
                                            v-if="loading"
                                            size="24"
                                            color="info"
                                            indeterminate
                                    ></v-progress-circular>
<!--                                    <img v-else width="24" height="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="">-->
                                </v-fade-transition>
                                <v-btn @click="clickMe" class="mb-5"><v-icon>mdi-magnify</v-icon>Search</v-btn>
                            </template>
                        </v-text-field>

                    </v-col>

                </v-row>
            </v-container>

        </v-form>

        <v-row>
            <v-col>
                <v-card
                        class="mx-auto"
                        max-width="400"
                >
                    <v-card-title class="white--text orange darken-4">
                        All Synonyms

                        <v-spacer></v-spacer>

                    </v-card-title>

                    <v-card-text class="pt-4" v-if="respondedData.length !== 0">
                        Synonyms results For the {{respondedData.word}}
                    </v-card-text>

                    <v-card-text class="pt-4" v-else>
                        Please Search for the synonyms..
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-virtual-scroll
                            :items="respondedData.synonym"
                            :item-height="50"
                            height="300"
                            v-if="respondedData.length !== 0"

                    >
                        <template v-slot="{ item }">
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{ item }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-virtual-scroll>
                </v-card>
            </v-col>
            <v-col>
                    <v-card
                            class="mx-auto"
                            max-width="400"
                    >
                        <v-card-title class="white--text orange darken-4">
                            All Antonyms

                            <v-spacer></v-spacer>
                        </v-card-title>

                        <v-card-text class="pt-4" v-if="respondedData.length !== 0">
                            Antonyms results For the {{respondedData.word}}
                        </v-card-text>

                        <v-card-text class="pt-4" v-else>
                            Please Search for the antonyms..
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-virtual-scroll
                                :items="respondedData.antonym"
                                :item-height="50"
                                height="300"
                                v-if="respondedData.length !== 0"
                        >
                            <template v-slot="{ item }">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item-content>

                                </v-list-item>
                            </template>
                        </v-virtual-scroll>
                    </v-card>
            </v-col>
<!--            <v-col>-->
<!--                <v-card-->
<!--                        class="mx-auto"-->
<!--                        max-width="400"-->
<!--                >-->
<!--                    <v-card-title class="white&#45;&#45;text orange darken-4">-->
<!--                        All Meanings-->

<!--                        <v-spacer></v-spacer>-->
<!--                    </v-card-title>-->

<!--                    <v-card-text class="pt-4">-->
<!--                        ceat, eos impedit nulla quos? Officiis, aperiam ducimus.-->
<!--                    </v-card-text>-->

<!--                    <v-divider></v-divider>-->

<!--                    <v-virtual-scroll-->
<!--                            :items="getMeanings"-->
<!--                            :item-height="50"-->
<!--                            height="300"-->
<!--                    >-->
<!--                        <template v-slot="{ item }">-->
<!--                            <v-list-item>-->
<!--                                <v-list-item-content>-->
<!--                                    <v-list-item-title>{{ item }}</v-list-item-title>-->
<!--                                </v-list-item-content>-->
<!--                            </v-list-item>-->
<!--                        </template>-->
<!--                    </v-virtual-scroll>-->
<!--                </v-card>-->
<!--            </v-col>-->
        </v-row>

    </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "SynonymsCreator",
        data: () => ({
            message: '',
            loading: false,
            respondedData: []
        }),

        computed: {
            // getMeanings(){
            //     const meanings = []
            //     console.log('noun')
            //
            //     if (this.respondedData.length){
            //         this.respondedData.meaning.Noun.forEach(item=>{
            //             meanings.push(item)
            //         });
            //
            //         this.respondedData.meaning.Verb.forEach(item=>{
            //             meanings.push(item)
            //         })
            //     }
            //     console.log(this.respondedData)
            //     console.log(meanings)
            //     return meanings;
            // }
        },

        methods: {
            clickMe () {
                this.loading = true
                // this.message = 'Wait for it...'
                if (this.message === ''){
                    return;
                }

                axios.get(`https://salty-beyond-56733.herokuapp.com/api/dictionary/?q=${this.message}`).then(response => {
                    this.respondedData = response.data.data
                    console.log(response.data.data)
                }).catch(error => console.log(error)).finally(() => {
                    this.loading = false
                    this.message = ''
                })

            }
        },
    }
</script>

<style scoped>

</style>