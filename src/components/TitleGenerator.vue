<template>
    <v-container>
        <v-card class=" px-9 py-9">
            <h1>Title Generator</h1>

            <v-textarea
                    clearable
                    clear-icon="mdi-close"
                    label="Text"
                    :value="title_text"
                    v-model="title_text"
            ></v-textarea>
            <v-row>
                <v-col cols="12">
            <v-row align="right" justify="end">
                <v-switch v-model="capitalized" class="ma-2" label="Capitalize Only"></v-switch>

                    <v-btn v-clipboard:copy="title" >copy</v-btn>

            </v-row>
                </v-col>
            </v-row>
            <h1 v-if="title.length>0">Generated Title Output:</h1>
            {{title}}
        </v-card>

    </v-container>
</template>

<script>


    String.prototype.toTitleCase = function () {
        var i, j, str, lowers, uppers;
        str = this.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });

        // Certain minor words should be left lowercase unless
        // they are the first or last words in the string
        // a, an, the, at, by, for, in, of, on, to, up, and, as, but, or, nor, so
        // yet, are, was, were, be, to, out, with, from, into, like, off, onto, upon
        // if, than, that, till, when
        lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'So', 'Yet',
            'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With', 'Up',
            'Are', 'Was', 'Were', 'Be', 'Out', 'Like', 'Off', 'Upon', 'If', 'Then', 'That', 'Till',
            'When'
        ];
        for (i = 0, j = lowers.length; i < j; i++)
            str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
                function (txt) {
                    return txt.toLowerCase();
                });



        str = str.replace(/^l/, function (match) {
            return match.toUpperCase();
        });


        // Certain words such as initialisms or acronyms should be left uppercase
        uppers = ['Id', 'Tv', 'Usa'];
        for (i = 0, j = uppers.length; i < j; i++)
            str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
                uppers[i].toUpperCase());

        return str;
    }

    String.prototype.capitalize = function () {
        var  str ;
        str = this.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });

        // Certain minor words should be left lowercase unless
        // they are the first or last words in the string
        // a, an, the, at, by, for, in, of,on, to, up, and, as, but, or, nor, so
        // yet
        // lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At', 'So', 'Yet',
        //     'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With', 'Up'];
        // for (i = 0, j = lowers.length; i < j; i++)
        //     str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
        //         function (txt) {
        //             return txt.toLowerCase();
        //         });
        //
        //
        //
        // str = str.replace(/^l/, function (match) {
        //     return match.toUpperCase();
        // });
        //
        //
        // // Certain words such as initialisms or acronyms should be left uppercase
        // uppers = ['Id', 'Tv', 'Usa'];
        // for (i = 0, j = uppers.length; i < j; i++)
        //     str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
        //         uppers[i].toUpperCase());

        return str;
    }

    export default {
        name: "TitleGenerator",
        data() {
            return {title_text: "", capitalized: false}
        },
        methods: {},
        computed: {
            title() {
                if (this.title_text === null) {
                    return '';
                }
                if (this.capitalized){
                    return this.title_text.capitalize()
                }
                return this.title_text.toTitleCase()
            }
        },
    }
</script>

<style scoped>

</style>