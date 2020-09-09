<template>

        <v-snackbar
                v-model="snackbar"
        >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                        :color="color"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>

</template>

<script>
    export default {
        name: "SnackbarComponent",
        props: {
            snackbar: Boolean,
            text: String,
            color: String,
        },
    }
</script>

<style scoped>

</style>