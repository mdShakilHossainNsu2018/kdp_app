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
                this.subcategories1 = []

                var subCat = []

                this.categories.forEach(all => {
                    item.subcategories.forEach(sub=>{
                        if(all.id === sub){
                            subCat.push(all)
                        }
                    })
                })
                this.subcategories1.push(...subCat)
                this.subcategories1['parentCategory'] = item.category_name
            },

            getCategoryName(item){
                return item.substring(0, 7) + '...'
            },

            closeSubCat1() {
                this.subcategories1 = []
            },


            showSubCategory2(item) {

                this.subcategories2 = []

                var subCat = []

                this.categories.forEach(all => {
                    item.subcategories.forEach(sub=>{
                        if(all.id === sub){
                            subCat.push(all)
                        }
                    })
                })
                this.subcategories2.push(...subCat)
                this.subcategories2['parentCategory'] = item.category_name
            },

            closeSubCat2() {
                this.subcategories2 = []
            },
            showSubCategory3(item) {

                this.subcategories3 = []

                var subCat = []

                this.categories.forEach(all => {
                    item.subcategories.forEach(sub=>{
                        if(all.id === sub){
                            subCat.push(all)
                        }
                    })
                })
                this.subcategories3.push(...subCat)
                this.subcategories3['parentCategory'] = item.category_name
            },

            closeSubCat3() {
                this.subcategories3 = []
            },
            showSubCategory4(item) {

                this.subcategories4 = []

                var subCat = []

                this.categories.forEach(all => {
                    item.subcategories.forEach(sub=>{
                        if(all.id === sub){
                            subCat.push(all)
                        }
                    })
                })
                this.subcategories4.push(...subCat)
                this.subcategories4['parentCategory'] = item.category_name
            },

            closeSubCat4() {
                this.subcategories4 = []
            },
            showSubCategory5(item) {

                this.subcategories5 = []

                var subCat = []

                this.categories.forEach(all => {
                    item.subcategories.forEach(sub=>{
                        if(all.id === sub){
                            subCat.push(all)
                        }
                    })
                })
                this.subcategories5.push(...subCat)
                this.subcategories5['parentCategory'] = item.category_name
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


    }
</script>

<style scoped>

</style>