<template>
    <v-app id="inspire">
        <v-app-bar
                app
                dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<!--            <v-toolbar-title style="color: rgb(242, 192, 22)">Self Publishing Titans</v-toolbar-title>-->
            <v-toolbar-title ><v-img max-width="150" src="../src/assets/text.png"></v-img></v-toolbar-title>

        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                app
                color="#23282d"

        >
            <v-list
                    dense
            >
                <template v-for="(item, i) in items">
                    <v-row
                            v-if="item.heading"
                            :key="i"
                            align="center"
                    >
                        <v-col cols="6">
                            <v-subheader v-if="item.heading">
                                {{ item.heading }}
                            </v-subheader>
                        </v-col>

                    </v-row>
                    <v-divider
                            v-else-if="item.divider"
                            :key="i"
                            dark
                            class="my-4"
                    ></v-divider>
                    <v-list-item
                            v-else
                            :key="i"
                            link
                            :to="item.link"

                    >
                        <v-list-item-action>
                            <v-img v-if="item.text==='Logo'" class="ml-2"  src="../src/assets/finallogo.png" ></v-img>
                            <v-img v-if="item.text==='Home'" src="../src/assets/icons/4.png" ></v-img>
                            <v-img v-if="item.text==='Royalty Calculator'" src="../src/assets/icons/7.png" ></v-img>
                            <v-img v-if="item.text==='Tittle Generator'" src="../src/assets/icons/2.png" ></v-img>
                            <v-img v-if="item.text==='Pdf Combiner'" src="../src/assets/icons/5.png" ></v-img>
                            <v-img v-if="item.text==='Category Lists'" src="../src/assets/icons/6.png" ></v-img>
                            <v-img v-if="item.text==='QR Code Generator'" src="../src/assets/icons/qr.png" ></v-img>
                            <v-img v-if="item.text==='Synonyms Creator'" src="../src/assets/icons/3.png" ></v-img>
                            <v-img v-if="item.text==='Word Cloud'" src="../src/assets/icons/1.png" ></v-img>

                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="grey--text">
                                {{ item.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container
                    fluid
                    class="fill-height"
            >
                <v-row
                        justify="center"
                        align="center"
                >
                    <v-col >
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer
                dark
                app
                class="justify-center"
        >
            <span class="white--text">Developed And Maintained by codeforsolutions.com &copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>

    export default {
        components: {},
        props: {
            source: String,
        },
        methods: {

        },

        watch: {
            '$route' (to) {
                document.title = to.meta.title || 'Self Publishing Titans'
            }
        },

        data: () => ({
            drawer: null,
            items: [
                { icon: '4.png', text: 'Logo', link: '/'},
                {divider: true},
                { icon: '4.png', text: 'Home', link: '/'},
                { icon: '7.png', text: 'Royalty Calculator', link: '/royalty-calculator' },
                // { heading: 'Labels' },
                { icon: '2.png', text: 'Tittle Generator', link: '/title-generator' },
                { icon: '../src/assets/icons/5.png', text: 'Pdf Combiner', link: '/pdf-combiner' },
                { icon: '../src/assets/icons/6.png', text: 'Category Lists', link: '/category-lists' },
                { icon: '../src/assets/icons/qr.png', text: 'QR Code Generator', link: '/qr-generator' },
                { icon: '../src/assets/icons/3.png', text: 'Synonyms Creator', link: '/synonyms-creator' },
                { icon: '../src/assets/icons/1.png', text: 'Word Cloud', link: '/word-cloud' },

    ],
        }),
    }
</script>

<style>
    #keep .v-navigation-drawer__border {
        display: none
    }
    /*body{*/
    /*    background-color: black !important;*/
    /*}*/

    .v-application {
        background-color: #f1f5f8 !important;
    }
</style>