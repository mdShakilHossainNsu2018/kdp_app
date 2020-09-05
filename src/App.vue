<template>
    <v-app  dark>
        <v-app-bar
                app
                clipped-left
                dark

        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>


            <span class="title ml-3 mr-5"><v-img
                    class="mx-2"
                    src="../src/assets/final_logologoblack.png"
                    max-height="40"
                    max-width="40"
                    contain
            ></v-img></span>
            <v-text-field
                    dark
                    solo-inverted
                    flat
                    hide-details
                    label="Search"
                    prepend-inner-icon="mid-magnifier"
            ></v-text-field>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                app
                dark
                clipped
        >
            <v-list
                    dense
                    dark
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
                        <v-col
                                cols="6"
                                class="text-right"
                        >
                            <v-btn
                                    small
                                    text
                            >edit</v-btn>
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
                            <v-icon>{{ item.icon }}</v-icon>
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
            >
                <v-row
                        justify="center"
                        align="center"
                >
                    <v-col >
                        <router-view></router-view>
<!--                        <v-tooltip right>-->
<!--                            <template>-->
<!--&lt;!&ndash;                                <v-btn&ndash;&gt;-->
<!--&lt;!&ndash;                                        :href="source"&ndash;&gt;-->
<!--&lt;!&ndash;                                        icon&ndash;&gt;-->
<!--&lt;!&ndash;                                        large&ndash;&gt;-->
<!--&lt;!&ndash;                                        target="_blank"&ndash;&gt;-->
<!--&lt;!&ndash;                                        v-on="on"&ndash;&gt;-->
<!--&lt;!&ndash;                                >&ndash;&gt;-->
<!--&lt;!&ndash;                                    <v-icon large>mdi-code-tags</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;                                </v-btn>&ndash;&gt;-->
<!--                            </template>-->
<!--                            <span>Source</span>-->
<!--                        </v-tooltip>-->
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

    export default {
        components: {},
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                { icon: 'mdi-home', text: 'Home', link: '/'},
                { icon: 'mdi-calculator', text: 'Royalty Calculator', link: '/royalty-calculator' },
                { divider: true },
                // { heading: 'Labels' },
                { icon: 'mdi-file-document', text: 'Tittle Generator', link: '/title-generator' },
                // { divider: true },
                // { icon: 'archive', text: 'Archive' },
                // { icon: 'delete', text: 'Trash' },
                // { divider: true },
                // { icon: 'settings', text: 'Settings' },
                // { icon: 'chat_bubble', text: 'Trash' },
                // { icon: 'help', text: 'Help' },
                // { icon: 'phonelink', text: 'App downloads' },
                // { icon: 'keyboard', text: 'Keyboard shortcuts' },
            ],
        }),
    }
</script>

<style>
    #keep .v-navigation-drawer__border {
        display: none
    }
</style>