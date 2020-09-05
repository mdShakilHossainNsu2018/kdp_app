<template>
    <v-app id="keep">
        <v-app-bar
                app
                clipped-left
                color="amber"
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <span class="title ml-3 mr-5">Kdp&nbsp;<span class="font-weight-light">App</span></span>
            <v-text-field
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
                clipped
                color="grey lighten-4"
        >
            <v-list
                    dense
                    class="grey lighten-4"
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
                    class="grey lighten-4 fill-height"
            >
                <v-row
                        justify="center"
                        align="center"
                >
                    <v-col >
                        <Index/>
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
    import Index from "@/components/Index";
    export default {
        components: {Index},
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            items: [
                { icon: 'mdi-home', text: 'Home' },
                { icon: 'mdi-calculator', text: 'King Calculator' },
                { divider: true },
                // { heading: 'Labels' },
                // { icon: 'add', text: 'Create new label' },
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