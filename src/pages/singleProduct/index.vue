<template>
<div style="width:100%; height:120vh;">
    <ShoppingHeader></ShoppingHeader>
    <div class="container pt-space">
            <div class="row">
                <loading v-model:active="shop.isLoading" :can-cancel="true" :is-full-page="true"/>
                <div class="col-md-6 col-12 d-flex align-items-center justify-content-center pb-20 pt-20" style="background-color: rgb(247 247 175)">
                    <img :src="shop.singleProduct.imageUrl" alt="">
                </div>
                <div class="col-md-6 col-12 allSpace">
                    <div class="space">
                        <p class="fs-30 lh-10 fw-bold mt-40">{{shop.singleProduct.title}}</p>
                        <p class="fs-15 lh-10 text-secondary">{{shop.singleProduct.description}}</p>
                        <span class="fs-18 text-secondary text-decoration-line-through">原價 {{shop.singleProduct.origin_price}}元</span>
                        <span class="fs-25 fw-bold"> {{shop.singleProduct.price}}元</span>
                        <p class="fs-20 lh-15">{{shop.singleProduct.content}}</p>
                        <span class="fs-20 mr-10">數量:</span>
                        <select class="dropdown" v-model="shop.num">
                            <option :value="num" v-for="num in 10" :key="num">
                                {{num}}
                            </option>
                        </select><br><br>
                        <p class="fs-20 text-secondary fs-bold">小計{{ shop.num * shop.singleProduct.price }}元</p>
                        <button type="button" class="btn btn-info" @click="addtoCart(shop.singleProduct.id, shop.num)">
                            加入購物車
                        </button>
                    </div>
                </div>
            </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import ShoppingHeader from "../../components/shoppingHeader.vue";

import { useShoppingStore } from '../../stores/shoppingStore';
const shop = useShoppingStore();
const { addtoCart} = shop;

</script>
<style scoped lang="scss">

img{
    height:500px; 
    width:100%;
}

.pt-space{
    padding-top: 75px;
}

.space{
    padding-left: 40px;
}

.dropdown{
    border: 1px solid  #7c7a7a;
    border-radius: 5px;
    padding: 5px;
}
.btn{
    width:95%;
    padding: 10px;
}


@media (max-width:768px){
    img{
        width:80%;
        height:350px;
    }
    .pt-space{
        padding-top: 55px;
    }
    .allSpace{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .space{
        width: 80%;
        padding: 0px;
    }
}
</style>