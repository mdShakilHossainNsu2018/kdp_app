<template>
    <v-container>
        <div class="d-flex justify-space-around flex-wrap">
            <v-card max-width="400" class="mb-11">
                <v-card-title>
                    Categories
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="category_header"
                        :items="categories"
                        :search="search"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="text-center d-flex align-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">

                                    <v-icon
                                            v-if="item.subcategories.length !== 0"
                                            v-bind="attrs"
                                            color="primary"
                                            dark
                                            v-on="on"
                                            class="mr-2"
                                            @click="showSubCategory(item)"
                                    >
                                        mdi-chevron-double-right
                                    </v-icon>
                                </template>
                                <span>Click me for subCategories</span>
                            </v-tooltip>


                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-if="item.url !== null"
                                            small
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="gotoUrl(item.url)"
                                    >
                                        mdi-amazon
                                    </v-icon>
                                </template>
                                <span>Go to the page</span>
                            </v-tooltip>

                        </div>

                    </template>

                </v-data-table>
            </v-card>


            <v-card max-width="400" class="mb-11" v-if="subcategories1.length !== 0">
                <v-card-title>
                    Categories for {{getCategoryName(subcategories1.parentCategory)}}
                    <v-spacer></v-spacer>
                    <v-icon class="ml-16" @click="closeSubCat1">mdi-close</v-icon>
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search1"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="category_header"
                        :items="subcategories1"
                        :search="search1"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="text-center d-flex align-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">

                                    <v-icon
                                            v-if="item.subcategories.length !== 0"
                                            v-bind="attrs"
                                            color="primary"
                                            dark
                                            v-on="on"
                                            class="mr-2"
                                            @click="showSubCategory2(item)"
                                    >
                                        mdi-chevron-double-right
                                    </v-icon>
                                </template>
                                <span>Click me for subCategories</span>
                            </v-tooltip>


                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-if="item.url !== null"
                                            small
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="gotoUrl(item.url)"
                                    >
                                        mdi-amazon
                                    </v-icon>
                                </template>
                                <span>Go to the page</span>
                            </v-tooltip>

                        </div>
                    </template>

                </v-data-table>
            </v-card>


            <v-card max-width="400" class="mb-11" v-if="subcategories2.length !== 0">
                <v-card-title>
                    Categories for {{getCategoryName(subcategories2.parentCategory)}}
                    <v-spacer></v-spacer>
                    <v-icon class="ml-16" @click="closeSubCat2">mdi-close</v-icon>
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search2"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="category_header"
                        :items="subcategories2"
                        :search="search2"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="text-center d-flex align-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">

                                    <v-icon
                                            v-if="item.subcategories.length !== 0"
                                            v-bind="attrs"
                                            color="primary"
                                            dark
                                            v-on="on"
                                            class="mr-2"
                                            @click="showSubCategory3(item)"
                                    >
                                        mdi-chevron-double-right
                                    </v-icon>
                                </template>
                                <span>Click me for subCategories</span>
                            </v-tooltip>


                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-if="item.url !== null"
                                            small
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="gotoUrl(item.url)"
                                    >
                                        mdi-amazon
                                    </v-icon>
                                </template>
                                <span>Go to the page</span>
                            </v-tooltip>

                        </div>
                    </template>

                </v-data-table>
            </v-card>

            <v-card max-width="400" class="mb-11" v-if="subcategories3.length !== 0">
                <v-card-title>
                    Categories for {{getCategoryName(subcategories3.parentCategory)}}
                    <v-spacer></v-spacer>
                    <v-icon class="ml-16" @click="closeSubCat3">mdi-close</v-icon>
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search3"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="category_header"
                        :items="subcategories3"
                        :search="search3"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="text-center d-flex align-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">

                                    <v-icon
                                            v-if="item.subcategories.length !== 0"
                                            v-bind="attrs"
                                            color="primary"
                                            dark
                                            v-on="on"
                                            class="mr-2"
                                            @click="showSubCategory4(item)"
                                    >
                                        mdi-chevron-double-right
                                    </v-icon>
                                </template>
                                <span>Click me for subCategories</span>
                            </v-tooltip>


                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-if="item.url !== null"
                                            small
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="gotoUrl(item.url)"
                                    >
                                        mdi-amazon
                                    </v-icon>
                                </template>
                                <span>Go to the page</span>
                            </v-tooltip>

                        </div>
                    </template>

                </v-data-table>
            </v-card>
            <v-card max-width="400" class="mb-11" v-if="subcategories4.length !== 0">
                <v-card-title>
                    Categories for {{getCategoryName(subcategories4.parentCategory)}}
                    <v-spacer></v-spacer>
                    <v-icon class="ml-16" @click="closeSubCat4">mdi-close</v-icon>
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search4"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="category_header"
                        :items="subcategories4"
                        :search="search4"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="text-center d-flex align-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">

                                    <v-icon
                                            v-if="item.subcategories.length !== 0"
                                            v-bind="attrs"
                                            color="primary"
                                            dark
                                            v-on="on"
                                            class="mr-2"
                                            @click="showSubCategory5(item)"
                                    >
                                        mdi-chevron-double-right
                                    </v-icon>
                                </template>
                                <span>Click me for subCategories</span>
                            </v-tooltip>


                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-if="item.url !== null"
                                            small
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="gotoUrl(item.url)"
                                    >
                                        mdi-amazon
                                    </v-icon>
                                </template>
                                <span>Go to the page</span>
                            </v-tooltip>

                        </div>
                    </template>

                </v-data-table>
            </v-card>
            <v-card max-width="400" class="mb-11" v-if="subcategories5.length !== 0">
                <v-card-title>
                    Categories for {{getCategoryName(subcategories5.parentCategory)}}
                    <v-spacer></v-spacer>
                    <v-icon class="ml-16" @click="closeSubCat5">mdi-close</v-icon>
                    <v-spacer></v-spacer>
                    <v-text-field
                            v-model="search5"
                            append-icon="mdi-magnify"
                            label="Search"
                            single-line
                            hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="category_header"
                        :items="subcategories5"
                        :search="search5"
                        :loading="loading"
                        loading-text="Loading... Please wait"
                >
                    <template v-slot:item.actions="{ item }">
                        <div class="text-center d-flex align-center">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">

                                    <v-icon
                                            v-if="item.subcategories.length !== 0"
                                            v-bind="attrs"
                                            color="primary"
                                            dark
                                            v-on="on"
                                            class="mr-2"
                                            @click="showSubCategory6(item)"
                                    >
                                        mdi-chevron-double-right
                                    </v-icon>
                                </template>
                                <span>Click me for subCategories</span>
                            </v-tooltip>


                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon v-if="item.url !== null"
                                            small
                                            color="primary"
                                            dark
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="gotoUrl(item.url)"
                                    >
                                        mdi-amazon
                                    </v-icon>
                                </template>
                                <span>Go to the page</span>
                            </v-tooltip>

                        </div>
                    </template>

                </v-data-table>
            </v-card>

        </div>


        <v-snackbar
                v-model="snackbar.show"
        >
            {{ snackbar.message }}

            <template v-slot:action="{ attrs }">
                <v-btn
                        :color="snackbar.color"
                        text
                        v-bind="attrs"
                        @click="snackbar.show = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

    </v-container>
</template>

<script>
    export default {
        name: "CategoryLists",

        data() {
            return {

                search: '',
                search1: '',
                search2: '',
                search3: '',
                search4: '',
                search5: '',
                snackbar: {
                    show: false,
                    message: null,
                    color: null
                },
                loading: false,
                category_header: [
                    {
                        text: 'Categories',
                        align: 'start',
                        value: 'category_name',
                    },

                    {
                        text: 'Sub Categories',
                        // align: 'start',

                        value: 'subcategories.length',
                    },
                    {text: 'Actions', value: 'actions', sortable: false},
                ],

                categories: [],
                subcategories1: [],
                subcategories2: [],
                subcategories3: [],
                subcategories4: [],
                subcategories5: [],
            }
        },

        methods: {
            showSubCategory(item) {
                this.subcategories1.push(...item.subcategories)
                this.subcategories1['parentCategory'] = item.category_name
                console.log(this.subcategories1)
            },

            getCategoryName(item){
                return item.substring(0, 7) + '...'
            },

            closeSubCat1() {
                this.subcategories1 = []
            },


            showSubCategory2(item) {

                this.subcategories2.push(...item.subcategories)
                this.subcategories2['parentCategory'] = item.category_name
                console.log(this.subcategories2)
            },

            closeSubCat2() {
                this.subcategories2 = []
            },
            showSubCategory3(item) {

                this.subcategories3.push(...item.subcategories)
                this.subcategories3['parentCategory'] = item.category_name
                console.log(this.subcategories3)
            },

            closeSubCat3() {
                this.subcategories3 = []
            },
            showSubCategory4(item) {

                this.subcategories4.push(...item.subcategories)
                this.subcategories4['parentCategory'] = item.category_name
                console.log(this.subcategories4)
            },

            closeSubCat4() {
                this.subcategories4 = []
            },
            showSubCategory5(item) {

                this.subcategories5.push(...item.subcategories)
                this.subcategories5['parentCategory'] = item.category_name
                console.log(this.subcategories5)
            },

            showSubCategory6(item) {

                alert('Please close some category..')
                console.log(item)
            },

            closeSubCat5() {
                this.subcategories5 = []
            },
            gotoUrl(url) {
                console.log(url)
                window.location.href = url

            }
        },

        mounted() {

            // if (this.categories.length) return
            this.loading = true;

            return fetch(`${this.$store.state.baseApiUrl}api/category/category/`)
                .then(res => res.json())
                .then(data => {
                    this.categories = data;
                    console.log(data)
                }).catch(err=>{
                    console.log(err);
                    this.snackbar = {
                        message: 'Error occur.' + err.response.data.detail + 'Status code: ' + err.response.status,
                        color: 'error',
                        show: true
                    }
                }).finally(() => this.loading = false)


        }
        // data: () => ({
        //     categories: [],
        //     isLoading: false,
        //     tree: [],
        //     newCategories: [],
        //     search: null,
        //     searchItems: [],
        //     model: null,
        // }),
        //
        // computed: {
        //     items() {
        //         const children = this.newCategories.map(category => ({
        //             id: category.id,
        //             name: this.getName(category.category_name),
        //             url: category.url,
        //             children: this.getChildren(category),
        //         }))
        //
        //         return [{
        //             id: 0,
        //             name: 'All Categories',
        //             children,
        //         }]
        //     },
        //     shouldShowTree() {
        //         return this.categories.length > 0 && !this.isLoading
        //     },
        // },
        //
        // watch: {
        //
        //     model(newSelectedArray, oldSelectedArray) {
        //         console.log(newSelectedArray);
        //         console.log(oldSelectedArray);
        //
        //         if (newSelectedArray === null || newSelectedArray === undefined) {
        //
        //             alert('For ' + newSelectedArray + ' Category Link Is Not Available. Please try next item')
        //         } else {
        //             window.location.href = newSelectedArray;
        //         }
        //
        //     },
        //
        //     categories(val) {
        //
        //         this.newCategories = val.reduce((acc, cur) => {
        //
        //             if (cur.parent_category_id === null) {
        //                 acc.push(cur)
        //             }
        //
        //             return acc
        //         }, []).sort()
        //     },
        //
        //     search(val) {
        //         console.log(val)
        //         // Items have already been loaded
        //         if (this.searchItems.length > 0) return
        //
        //         this.isLoading = true
        //
        //         // Lazily load input items
        //         fetch(`${this.$store.state.baseApiUrl}api/category/category/`)
        //             .then(res => res.clone().json())
        //             .then(res => {
        //                 this.searchItems = res
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
        //             .finally(() => (this.isLoading = false))
        //         console.log(this.searchItems)
        //     },
        // },
        //
        // methods: {
        //     fetch() {
        //         if (this.categories.length) return
        //
        //         return fetch(`${this.$store.state.baseApiUrl}api/category/category/`)
        //             .then(res => res.json())
        //             .then(data => {
        //                 this.categories = data;
        //             })
        //     },
        //
        //     updateForm(item) {
        //         if (item.length > 0)
        //             console.log(item[0].url)
        //         if (item[0].url === null || item[0].url === undefined) {
        //             console.log(item[0].url)
        //             alert('For ' + item[0].name + ' Category Link Is Not Available. Please try next item')
        //         } else {
        //             window.location.href = item[0].url;
        //         }
        //     },
        //
        //     save() {
        //         console.log(this.items)
        //     },
        //
        //     getName(name) {
        //         return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
        //     },
        //
        //     getChildren(category) {
        //         const categories = []
        //
        //         for (const cat of this.categories) {
        //             if (cat.parent_category_id === category.id) {
        //
        //                 categories.push({
        //                     ...cat,
        //                     id: cat.id,
        //                     url: cat.url,
        //                     name: this.getName(cat.category_name),
        //                 })
        //
        //                 const subcategory = []
        //
        //                 categories.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory;
        //                             // item.push({...sub,  name: this.getName(sub.category_name),})
        //                         }
        //                     }
        //                 })
        //
        //
        //                 const subcategory2 = []
        //                 subcategory.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory2.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory2;
        //                             // item.push({...sub,  name: this.getName(sub.category_name),})
        //                         }
        //                     }
        //                 })
        //
        //                 const subcategory3 = []
        //                 subcategory2.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory3.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory3;
        //                             // item.push({...sub,  name: this.getName(sub.category_name),})
        //                         }
        //                     }
        //                 })
        //
        //
        //                 const subcategory4 = []
        //                 subcategory3.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory4.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory4;
        //                         }
        //                     }
        //                 })
        //
        //                 const subcategory5 = []
        //                 subcategory4.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory5.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory5;
        //                         }
        //                     }
        //                 })
        //
        //                 const subcategory6 = []
        //                 subcategory5.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory6.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory6;
        //                         }
        //                     }
        //                 })
        //
        //
        //                 const subcategory7 = []
        //                 subcategory6.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory7.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory7;
        //                         }
        //                     }
        //                 })
        //
        //
        //                 const subcategory8 = []
        //                 subcategory7.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory8.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory8;
        //                         }
        //                     }
        //                 })
        //
        //
        //                 const subcategory9 = []
        //                 subcategory8.forEach(item => {
        //                     for (const sub of this.categories) {
        //                         if (item.id === sub.parent_category_id) {
        //
        //                             subcategory9.push({id: sub.id, name: this.getName(sub.category_name), ...sub})
        //                             item['children'] = subcategory9;
        //                         }
        //                     }
        //                 })
        //
        //             }
        //         }
        //
        //         return categories.sort((a, b) => {
        //             return a.name > b.name ? 1 : -1
        //         })
        //     },
        // },


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