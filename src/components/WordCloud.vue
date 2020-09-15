<template>
    <v-container>
        <v-row>
            <v-col>
                <vue-word-cloud style="height: 480px; width: 640px;"
                                :loadFont="loadFont"
                                v-if="newWord.length !== 0"
                                font-family="Finger Paint"
                                :rotation="45"
                                :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
                                :words="newWord">
                    <template slot-scope="{text, weight, word}">
                        <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                                <div v-bind="attrs"
                                     v-on="on" style="cursor: pointer;" @click="onWordClick(word)">
                                    {{ text }}
                                </div>
                            </template>
                            <span>{{text}} <br> {{weight}}</span>
                        </v-tooltip>

                    </template>
                </vue-word-cloud>
            </v-col>
            <v-col>
                <v-data-table
                        v-if="newWord.length !== 0"
                        :headers="headers"
                        :items="wordsObj"
                        :sort-by.sync="sortBy"
                        :sort-desc.sync="sortDesc"
                        :items-per-page="7"
                        class="elevation-1"
                ></v-data-table>

            </v-col>
        </v-row>



        <v-textarea
                clearable
                v-model="text"
                clear-icon="mdi-close"
                label="Word Cloud"
                value="text"
        ></v-textarea>

        <div class="d-flex justify-end">
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn  v-bind="attrs"
                            v-on="on" @click="click">Count</v-btn>
                </template>
                <span>Click here to count repeated word..</span>
            </v-tooltip>

        </div>

        <v-snackbar
                v-model="snackbar"
        >
            Word: {{ snackWord[0] }}
            Count: {{snackWord[1]}}

            <template v-slot:action="{ attrs }">
                <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

    </v-container>
</template>

<script>
    import FontFaceObserver from 'fontfaceobserver';

    export default {
        name: "WordCloud",
        data(){
            return{
                text: "",
                newWord: [],
                snackbar: false,
                sortBy: 'count',
                sortDesc: true,
                snackWord: '',
                headers: [
                    {
                        text: 'Word',
                        align: 'start',
                        sortable: false,
                        value: 'word',
                    },
                    { text: 'Count', value: 'count' },

                ],

            }
        },
        methods: {
            onWordClick(word) {
                this.snackbar = true

                this.snackWord = word;
            },

            loadFont(family, style, weight, text) {
                return (new FontFaceObserver(family, {style, weight})).load(text);
            },

            click(){
                // var words = ["words", "are", "cool", "and", "so", "are", "you", "words", "are", "cool", "and", "so", "are", "you", "inconstituent", "funhouse!", "apart", "from", "Steve", "fish", "fish", "fish", "fish", "fish"]
                var words = this.text.split(/[,.?!"'<>{}|:=@#$%^&*~;`()\s]+/)
                this.newWord = []


                words.forEach(item => {
                    if (!this.newWord.flat().includes(item)){
                        this.newWord.push([item, 0])
                    }

                })

                words.forEach(item => {
                   this.newWord.forEach((word, index) => {
                       if(word[0] === item){
                           this.newWord[index] = [word[0], word[1] + 1]
                       }
                   })

                })


            }
        },

        computed: {
            wordsObj(){
               var word = this.newWord.map(item=>{
                    return {
                        word: item[0],
                        count: item[1]
                    }
                })
                console.log(word)
                return word
            }
        }


    }
</script>

<style scoped>

</style>