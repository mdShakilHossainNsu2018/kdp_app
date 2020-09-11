<template>
    <v-container>
        <v-card>
            <v-toolbar
                    color="primary"
                    dark
                    flat
            >
                <v-icon>mdi-equal-box</v-icon>
                <v-toolbar-title> All KDP Categories</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-autocomplete
                        class="ml-11"
                        v-model="model"
                        :items="searchItems"
                        :loading="isLoading"
                        :search-input.sync="search"
                        clearable
                        hide-details
                        hide-selected
                        item-text="category_name"
                        item-value="url"
                        label="Search for a categories..."

                >
                    <template v-slot:no-data>
                        <v-list-item>
                            <v-list-item-title>
                                Search for your favorite
                                <strong>Categories</strong>
                            </v-list-item-title>
                        </v-list-item>
                    </template>
                    <!--                    <template v-slot:selection="{ attr, on, item, selected }">-->
                    <!--                        <v-chip-->
                    <!--                                v-bind="attr"-->
                    <!--                                :input-value="selected"-->
                    <!--                                color="blue-grey"-->
                    <!--                                class="white&#45;&#45;text"-->
                    <!--                                v-on="on"-->
                    <!--                        >-->
                    <!--                            <v-icon left>mdi-coin</v-icon>-->
                    <!--                            <span v-text="item.category_name"></span>-->
                    <!--                        </v-chip>-->
                    <!--                    </template>-->
                    <template v-slot:item="{ item }">
                        <v-list-item-avatar
                                color="indigo"
                                class="headline font-weight-light white--text"
                        >
                            {{ item.category_name.charAt(0) }}
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.category_name"></v-list-item-title>
                            <!--                            <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>-->
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-icon>mdi-coin</v-icon>
                        </v-list-item-action>
                    </template>
                </v-autocomplete>
            </v-toolbar>

            <v-row>
                <v-col>
                    <v-card-text>

                        <v-treeview
                                v-model="tree"
                                :load-children="fetch"
                                :items="items"
                                selected-color="indigo"
                                return-object
                                item-key="id"
                                hoverable
                                activatable
                                @update:active="updateForm"
                                expand-icon="mdi-chevron-down"
                                on-icon="mdi-bookmark"
                                off-icon="mdi-bookmark-outline"
                                indeterminate-icon="mdi-bookmark-minus"

                        >
                        </v-treeview>


                        <template slot-scope="{ item }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <a v-on="on" style="cursor: pointer" v-bind="attrs" @click="updateForm(item)">{{
                                        item.icon }}</a>
                                </template>
                                <span>Tooltip</span>
                            </v-tooltip>
                        </template>
                    </v-card-text>
                </v-col>

                <v-divider vertical></v-divider>

                <v-col
                        cols="12"
                        md="6"
                >
                    <v-card-text>
                        <div
                                v-if="tree.length === 0"
                                key="title"
                                class="title font-weight-light grey--text pa-4 text-center"
                        >
                            Click on category to check out...
                        </div>

                        <v-scroll-x-transition
                                group
                                hide-on-leave
                        >
                            <v-chip
                                    v-for="(selection, i) in tree"
                                    :key="i"
                                    color="grey"
                                    dark
                                    small
                                    class="ma-1"
                            >
                                <v-icon left small>mdi-beer</v-icon>
                                {{ selection.category_name }}

                                <v-btn v-if="selection.url !== null" :href="selection.url"> Check Out</v-btn>

                            </v-chip>
                        </v-scroll-x-transition>
                    </v-card-text>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <!--            <v-card-actions>-->
            <!--                <v-btn-->
            <!--                        text-->
            <!--                        @click="tree = []"-->
            <!--                >-->
            <!--                    Reset-->
            <!--                </v-btn>-->

            <!--                <v-spacer></v-spacer>-->

            <!--                <v-btn-->
            <!--                        class="white&#45;&#45;text"-->
            <!--                        color="green darken-1"-->
            <!--                        depressed-->
            <!--                        @click="save"-->
            <!--                >-->
            <!--                    Save-->
            <!--                    <v-icon right>mdi-content-save</v-icon>-->
            <!--                </v-btn>-->
            <!--            </v-card-actions>-->
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "CategoryLists",
        data: () => ({
            categories: [],
            isLoading: false,
            tree: [],
            newCategories: [],
            search: null,
            searchItems: [],
            model: null,
        }),

        computed: {
            items() {
                const children = this.newCategories.map(category => ({
                    id: category.id,
                    name: this.getName(category.category_name),
                    url: category.url,
                    children: this.getChildren(category),
                }))

                return [{
                    id: 0,
                    name: 'All Categories',
                    children,
                }]
            },
            shouldShowTree() {
                return this.categories.length > 0 && !this.isLoading
            },
        },

        watch: {

            model(newSelectedArray, oldSelectedArray) {
                console.log(newSelectedArray);
                console.log(oldSelectedArray);

                if (newSelectedArray === null || newSelectedArray === undefined) {

                    alert('For ' + newSelectedArray + ' Category Link Is Not Available. Please try next item')
                } else {
                    window.location.href = newSelectedArray;
                }

            },

            categories(val) {

                this.newCategories = val.reduce((acc, cur) => {

                    if (cur.parent_category_id === null) {
                        acc.push(cur)
                    }

                    return acc
                }, []).sort()
            },

            search(val) {
                console.log(val)
                // Items have already been loaded
                if (this.searchItems.length > 0) return

                this.isLoading = true

                // Lazily load input items
                fetch(`${this.$store.state.baseApiUrl}api/category/category/`)
                    .then(res => res.clone().json())
                    .then(res => {
                        this.searchItems = res
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false))
                console.log(this.searchItems)
            },
        },

        methods: {
            fetch() {
                if (this.categories.length) return

                return fetch(`${this.$store.state.baseApiUrl}api/category/category/`)
                    .then(res => res.json())
                    .then(data => {
                        this.categories = data;
                    })
            },

            updateForm(item) {
                if (item.length > 0)
                    console.log(item[0].url)
                if (item[0].url === null || item[0].url === undefined) {
                    console.log(item[0].url)
                    alert('For ' + item[0].name + ' Category Link Is Not Available. Please try next item')
                } else {
                    window.location.href = item[0].url;
                }
            },

            save() {
                console.log(this.items)
            },

            getName(name) {
                return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
            },

            getChildren(category) {
                const categories = []

                for (const cat of this.categories) {
                    if (cat.parent_category_id === category.id) {

                        categories.push({
                            ...cat,
                            id: cat.id,
                            url: cat.url,
                            name: this.getName(cat.category_name),
                        })

                        const subcategory = []

                        categories.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory;
                                    // item.push({...sub,  name: this.getName(sub.category_name),})
                                }
                            }
                        })


                        const subcategory2 = []
                        subcategory.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory2.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory2;
                                    // item.push({...sub,  name: this.getName(sub.category_name),})
                                }
                            }
                        })

                        const subcategory3 = []
                        subcategory2.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory3.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory3;
                                    // item.push({...sub,  name: this.getName(sub.category_name),})
                                }
                            }
                        })


                        const subcategory4 = []
                        subcategory3.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory4.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory4;
                                }
                            }
                        })

                        const subcategory5 = []
                        subcategory4.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory5.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory5;
                                }
                            }
                        })

                        const subcategory6 = []
                        subcategory5.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory6.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory6;
                                }
                            }
                        })


                        const subcategory7 = []
                        subcategory6.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory7.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory7;
                                }
                            }
                        })


                        const subcategory8 = []
                        subcategory7.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory8.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory8;
                                }
                            }
                        })


                        const subcategory9 = []
                        subcategory8.forEach(item => {
                            for (const sub of this.categories) {
                                if (item.id === sub.parent_category_id) {

                                    subcategory9.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
                                    item['children'] = subcategory9;
                                }
                            }
                        })

                    }
                }

                return categories.sort((a, b) => {
                    return a.name > b.name ? 1 : -1
                })
            },
        },


    }
</script>

<!--<script>-->
<!--    export default {-->
<!--        data: () => ({-->
<!--            breweries: [],-->
<!--            isLoading: false,-->
<!--            tree: [],-->
<!--            types: [],-->
<!--        }),-->

<!--        computed: {-->
<!--            items () {-->
<!--                const children = this.types.map(type => ({-->
<!--                    id: type,-->
<!--                    name: this.getName(type),-->
<!--                    children: this.getChildren(type),-->
<!--                }))-->

<!--                return [{-->
<!--                    id: 1,-->
<!--                    name: 'All Breweries',-->
<!--                    children,-->
<!--                }]-->
<!--            },-->
<!--            shouldShowTree () {-->
<!--                return this.breweries.length > 0 && !this.isLoading-->
<!--            },-->
<!--        },-->

<!--        watch: {-->
<!--            breweries (val) {-->
<!--                console.log('breweries val');-->
<!--                console.log(val);-->
<!--                this.types = val.reduce((acc, cur) => {-->
<!--                    const type = cur.brewery_type-->

<!--                    if (!acc.includes(type)) acc.push(type)-->

<!--                    console.log('breweries acc');-->
<!--                    console.log(acc);-->

<!--                    return acc-->
<!--                }, []).sort()-->
<!--                console.log('this.types')-->
<!--                console.log(this.types)-->
<!--            },-->
<!--        },-->

<!--        methods: {-->
<!--            fetch () {-->
<!--                if (this.breweries.length) return-->

<!--                return fetch('https://api.openbrewerydb.org/breweries')-->
<!--                    .then(res => res.json())-->
<!--                    .then(data => {this.breweries = data; console.log('raw data'); console.log(data)})-->
<!--                    .catch(err => console.log(err))-->
<!--            },-->
<!--            getChildren (type) {-->
<!--                const breweries = []-->

<!--                for (const brewery of this.breweries) {-->
<!--                    if (brewery.brewery_type !== type) continue-->

<!--                    breweries.push({-->
<!--                        ...brewery,-->
<!--                        name: this.getName(brewery.name),-->
<!--                    })-->
<!--                }-->

<!--                return breweries.sort((a, b) => {-->
<!--                    return a.name > b.name ? 1 : -1-->
<!--                })-->
<!--            },-->
<!--            getName (name) {-->
<!--                return `${name.charAt(0).toUpperCase()}${name.slice(1)}`-->
<!--            },-->
<!--        },-->
<!--    }-->
<!--</script>-->

<style scoped>

</style>