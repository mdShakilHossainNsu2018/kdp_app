<template>
    <v-container>
        <v-card class="text-center">
            <H1>Roility calculator</H1>
<!--            <v-row align="center">-->

<!--                <v-col cols="12" sm="6">-->
                    <v-select
                            :items="interior_type"
                            v-model="interior_type_value"
                            label="Enter interior type:"
                    ></v-select>
                    <v-text-field
                            v-model="num_pages"
                            label="Enter number of pages:"
                            type="number"
                            required
                    ></v-text-field>

                    <v-select
                            :items="choose_channel"
                            v-model="choose_channel_value"
                            label="Choose a distribution channel:"
                    ></v-select>

<!--                    Enter anticipated list price-->

                    <v-text-field
                            v-model="list_price"
                            label="Enter anticipated list price:"
                            type="number"
                            required
                    ></v-text-field>
<!--                </v-col>-->
<!--            </v-row>-->


            printing cost: {{printingCost}}
            <br>
            Minimum List price: {{minimumListPrice}}
            <br>
            Amazon Royalty: {{amazonRoyalty}}
            <br>
            Expanded Distribution royalty: {{expendedDistributionRoyalty}}

        </v-card>

    </v-container>
</template>

<script>
    // printing cost = fixed cost + (page count * per page cost)
    // Fixed cost + (page count * per page cost) = printing cost
    export default {
        name: "RoyaltyCalculator",

        data() {
            return {
                interior_type: ['Black ink', 'Color ink'],
                interior_type_value: '',
                choose_channel_value: '',
                num_pages: 0,
                list_price: 0,
                choose_channel: ['amazon.com', 'amazon.ca',
                    'amazon.co.uk',
                    'amazon.de', 'amazon.fr',
                    'amazon.it', 'amazon.es', 'amazon.co.jp'],

            }
        },

        methods: {
            test(){
                console.log(this.interior_type_value)
            }
        },

        computed: {

    //Amazon.com
    // Paperback specifications	US marketplace (USD) fixed cost	Additional per page cost
    //Black ink with 24-108 pages	$2.15 per book	None
    // Black ink with 110–828 pages	$0.85 per book	$0.012 per page
    // Color ink with 24–40 pages	$3.65 per book	None
    // Color ink with 42–828 pages	$0.85 per book	$0.07 per page
    // Amazon.ca
    // Paperback specifications	CA marketplace (CAD) fixed cost	Additional per page cost
    // Black ink with 24–108 pages	$2.82 per book	None
    // Black ink with 110–828 pages	$1.11 per book	$0.016 per page
    // Color ink with 24–40 pages	$4.78 per book	None
    // Color ink with 42–828 pages	$1.11 per book	$0.09 per page
    // Amazon.co.uk
    // Paperback specifications	UK marketplace (GBP) fixed cost	Additional per page cost
    // Black ink with 24–108 pages	£1.70 per book	None
    // Black ink with 110–828 pages	£0.70 per book	£0.010 per page
    // Color ink with 24–40 pages	£2.05 per book	None
    // Color ink with 42–828 pages	£0.70 per book	£0.045 per page
    // Amazon.de
    // Paperback specifications	DE marketplace (EUR) fixed cost	Additional per page cost
    // Black ink with 24-108 pages	€1.90 per book	None
    // Black ink with 110–828 pages	€0.60 per book	€0.012 per page
    // Color ink with 24–40 pages	€2.40 per book	None
    // Color ink with 42–828 pages	€0.60 per book	€0.06 per page
    // Amazon.fr., Amazon.it, Amazon.es
    // Paperback specifications	FR/IT/ES marketplaces (EUR) fixed cost	Additional per page cost
    // Black ink with 24–108 pages	€1.90 per book	None
    // Black ink with 110–828 pages	€0.60 per book	€0.012 per page
    // Color ink with 24–40 pages	€2.40 per book	None
    // Color ink with 42–828 pages	€0.60 per book	€0.06 per page
    // Amazon.co.jp
    // Paperback specifications	JP marketplace (JPY) fixed cost	Additional per page cost
    // Black ink with 24–108 pages	¥400 per book	None
    // Black ink with 110–828 pages	¥175 per book	¥2 per page
    // Color ink with 24–40 pages	¥475 per book	None
    // Color ink with 42–828 pages	¥175 per book	¥4 per page


            // printing cost = fixed cost + (page count * per page cost)
            printingCost(){
                if (this.list_price === 0){
                    return 0
                }

                if (this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.com' &&
                this.num_pages >=24 && this.num_pages <=108){
                    return parseFloat(2.15 + this.num_pages).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.com' &&
                    this.num_pages >=110 && this.num_pages <=828){
                    // Black ink with 110–828 pages	$0.85 per book	$0.012 per page
                    return parseFloat(0.85 + (this.num_pages * 0.012)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.com' &&
                    this.num_pages >=24 && this.num_pages <=40){
                    // Color ink with 24–40 pages	$3.65 per book	None
                    return parseFloat(3.65 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.com' &&
                    this.num_pages >=42 && this.num_pages <=828){
                    // Color ink with 42–828 pages	$0.85 per book	$0.07 per page
                    return parseFloat(0.85 + (this.num_pages * 0.07)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.ca' &&
                    this.num_pages >=24 && this.num_pages <=108){
                    // Amazon.ca
                    // Paperback specifications	CA marketplace (CAD) fixed cost	Additional per page cost
                    // Black ink with 24–108 pages	$2.82 per book	None
                    // Black ink with 110–828 pages	$1.11 per book	$0.016 per page
                    // Color ink with 24–40 pages	$4.78 per book	None
                    // Color ink with 42–828 pages	$1.11 per book	$0.09 per page


                    return parseFloat(2.82 + (this.num_pages )).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.ca' &&
                    this.num_pages >=110 && this.num_pages <=828){
                    // Black ink with 110–828 pages	$1.11 per book	$0.016 per page

                    return parseFloat(1.11 + (this.num_pages * 0.016)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.ca' &&
                    this.num_pages >=24 && this.num_pages <=40){
                    // Color ink with 24–40 pages	$4.78 per book	None
                    return parseFloat(4.78 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.ca' &&
                    this.num_pages >=42 && this.num_pages <=828){
                    // Color ink with 42–828 pages	$1.11 per book	$0.09 per page
                    return parseFloat(1.11 + (this.num_pages * 0.09)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.co.uk' &&
                    this.num_pages >=24 && this.num_pages <=108){
                    // Amazon.co.uk
                    // Paperback specifications	UK marketplace (GBP) fixed cost	Additional per page cost
                    // Black ink with 24–108 pages	£1.70 per book	None
                    // Black ink with 110–828 pages	£0.70 per book	£0.010 per page
                    // Color ink with 24–40 pages	£2.05 per book	None
                    // Color ink with 42–828 pages	£0.70 per book	£0.045 per page


                    return parseFloat(1.70 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.co.uk' &&
                    this.num_pages >=110 && this.num_pages <=828){
                    // Black ink with 110–828 pages	£0.70 per book	£0.010 per page
                    return parseFloat(0.70 + (this.num_pages * 0.010)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.co.uk' &&
                    this.num_pages >=24 && this.num_pages <=40){
                    // Color ink with 24–40 pages	£2.05 per book	None
                    return parseFloat(2.05 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.co.uk' &&
                    this.num_pages >=42 && this.num_pages <=828){
                    // Color ink with 42–828 pages	£0.70 per book	£0.045 per page
                    return parseFloat(0.70 + (this.num_pages * 0.045)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.de' &&
                    this.num_pages >=24 && this.num_pages <=108){
                    // Amazon.de
                    // Paperback specifications	DE marketplace (EUR) fixed cost	Additional per page cost
                    // Black ink with 24-108 pages	€1.90 per book	None
                    // Black ink with 110–828 pages	€0.60 per book	€0.012 per page
                    // Color ink with 24–40 pages	€2.40 per book	None
                    // Color ink with 42–828 pages	€0.60 per book	€0.06 per page

                    return parseFloat(1.90 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.de' &&
                    this.num_pages >=110 && this.num_pages <=828){
                    // Black ink with 110–828 pages	€0.60 per book	€0.012 per page
                    return parseFloat(0.60 + (this.num_pages * 0.012)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.de' &&
                    this.num_pages >=24 && this.num_pages <=40){
                    // Color ink with 24–40 pages	€2.40 per book	None
                    return parseFloat(2.40 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.de' &&
                    this.num_pages >=42 && this.num_pages <=828){
                    // Color ink with 42–828 pages	€0.60 per book	€0.06 per page
                    return parseFloat(0.60 + (this.num_pages * 0.06)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    (this.choose_channel_value === 'amazon.fr' ||
                        this.choose_channel_value === 'amazon.it' ||
                        this.choose_channel_value === 'amazon.es')&&
                    this.num_pages >=24 && this.num_pages <=108){
                    // Amazon.fr., Amazon.it, Amazon.es
                    // Paperback specifications	FR/IT/ES marketplaces (EUR) fixed cost	Additional per page cost
                    // Black ink with 24–108 pages	€1.90 per book	None
                    // Black ink with 110–828 pages	€0.60 per book	€0.012 per page
                    // Color ink with 24–40 pages	€2.40 per book	None
                    // Color ink with 42–828 pages	€0.60 per book	€0.06 per page
                    return parseFloat(1.90 + (this.num_pages)).toFixed(2)
                } else if(this.interior_type_value==='Black ink' &&
                    (this.choose_channel_value === 'amazon.fr' ||
                        this.choose_channel_value === 'amazon.it' ||
                        this.choose_channel_value === 'amazon.es')&&
                    this.num_pages >=110 && this.num_pages <=828){
                    // Black ink with 110–828 pages	€0.60 per book	€0.012 per page
                    return parseFloat(0.60 + (this.num_pages * 0.012)).toFixed(2)
                } else if(this.interior_type_value==='Color ink' &&
                    (this.choose_channel_value === 'amazon.fr' ||
                        this.choose_channel_value === 'amazon.it' ||
                        this.choose_channel_value === 'amazon.es')&&
                    this.num_pages >=24 && this.num_pages <=40){
                    // Color ink with 24–40 pages	€2.40 per book	None
                    return parseFloat(2.40 + (this.num_pages)).toFixed(2)
                }else if(this.interior_type_value==='Color ink' &&
                    (this.choose_channel_value === 'amazon.fr' ||
                        this.choose_channel_value === 'amazon.it' ||
                        this.choose_channel_value === 'amazon.es')&&
                    this.num_pages >=42 && this.num_pages <=828){
                    // Color ink with 42–828 pages	€0.60 per book	€0.06 per page
                    return parseFloat(0.60 + (this.num_pages * 0.06)).toFixed(2)
                }
                // Amazon.co.jp
                // Paperback specifications	JP marketplace (JPY) fixed cost	Additional per page cost
                // Black ink with 24–108 pages	¥400 per book	None
                // Black ink with 110–828 pages	¥175 per book	¥2 per page
                // Color ink with 24–40 pages	¥475 per book	None
                // Color ink with 42–828 pages	¥175 per book	¥4 per page
                else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.co.jp' &&
                    this.num_pages >=24 && this.num_pages <=108){
                    // Black ink with 24–108 pages	¥400 per book	None
                    return parseFloat(400 + (this.num_pages)).toFixed(2)
                }else if(this.interior_type_value==='Black ink' &&
                    this.choose_channel_value === 'amazon.co.jp' &&
                    this.num_pages >=110 && this.num_pages <=828){
                    // Black ink with 110–828 pages	¥175 per book	¥2 per page
                    return parseFloat(175 + (this.num_pages * 2)).toFixed(2)
                }else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.co.jp' &&
                    this.num_pages >=24 && this.num_pages <=40){
                    // Color ink with 24–40 pages	¥475 per book	None
                    return parseFloat(475 + (this.num_pages)).toFixed(2)
                }else if(this.interior_type_value==='Color ink' &&
                    this.choose_channel_value === 'amazon.co.jp' &&
                    this.num_pages >=42 && this.num_pages <=828){
                    // Color ink with 42–828 pages	¥175 per book	¥4 per page
                    return parseFloat(175 + (this.num_pages * 4)).toFixed(2)
                }

                return 0;


            },

            minimumListPrice(){

                if(parseFloat(this.printingCost /0.6).toFixed(2)> 0){
                    return 'list price is too low'
                }

                return parseFloat(this.printingCost /0.6).toFixed(2)
            },

            amazonRoyalty(){
                if(parseFloat(this.printingCost /0.6).toFixed(2)> 0){
                    return 'list price is too low'
                }
                return parseFloat((this.list_price*0.6)-this.printingCost ).toFixed(2)
            },
            expendedDistributionRoyalty(){
                if(parseFloat(this.printingCost /0.6).toFixed(2)> 0){
                    return 'list price is too low'
                }
                return parseFloat((this.list_price*0.4)-this.printingCost).toFixed(2)
            },
        }
    }
</script>

<style scoped>

</style>