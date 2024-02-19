<template>
<div>
    <ShoppingHeader></ShoppingHeader>
    <div style="background-color: gray">
        <div class="container pt-75">
            <div class="row">
                <loading v-model:active="shop.isLoading" :can-cancel="true" :is-full-page="true"/>
                <div class="col-lg-3 col-md-6 col-6" v-for="item in shop.products" :key="item.id">
                    <!-- <div class="productBox" > -->
                    <div class="productBox" @click="getSingleProduct(item.id)">
                        <div class="productImg effect"  :style="{backgroundImage: 'url('+item.imageUrl+')'}">
                            <div class="gradient">
                                <div class="transparent-block"></div>
                            </div>
                        </div>
                        <p class="card-title">{{item.title}}</p>
                        <p class="card-text">NT{{item.price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import ShoppingHeader from "../components/shoppingHeader.vue";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useShoppingStore } from '../stores/shoppingStore';
const shop = useShoppingStore();
const { getProducts,getSingleProduct} = shop;

onMounted(getProducts);
</script>

<style scoped lang="scss">
.card-title{
    font-weight: 900;
}
.productBox{
    height:300px;
	width: 95%;
    background-color: #fff;
    box-shadow: #b2b2b5;
    margin-bottom: 20px;
    padding: 5px 5px 5px 5px;
}
.productImg{
    height:200px;
    width: 100%;
    border-radius: 10px;
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    user-select: none;
    margin: auto;
    cursor: zoom-in;
    z-index: 1;
    margin-bottom: 10px;
    
}

// 特效開始

.transparent-block { 
    width:100px; 
    height:100px; 
    background-color:transparent; 
} 
.effect{
	color: rgba(255,255,255,1);
	transition: all 0.5s;
	position: relative;
}

.effect:before{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	border: 1px solid rgba(255,255,255,0.5);
	transition: all 0.3s;
}
.effect:hover:before{
	opacity: 0;
	transform: scale(1.2,1.2);
}
.effect:after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	opacity: 0;
	background-color: rgba(255,255,255,0.25);
	transition: all 0.3s;
	transform: scale(0.5,0.5);
}
.effect:hover:after{
	opacity: 1 ;
	transform: scale(1,1);
}
// 特效結束

</style>
