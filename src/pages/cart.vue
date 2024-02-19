<template>
<div style="width:100%; height:150vh;">
    <loading v-model:active="shop.isLoading" :can-cancel="true" :is-full-page="true"/>
    <ShoppingHeader></ShoppingHeader>
    <div class="container pt-95">
        <div class="row">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <th></th>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in shop.cart">
                        <td class="align-middle">
                            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCart(item.id)">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </td>
                        <td class="align-middle">
                            {{ item.product.title }}
                            <div class="text-success" v-if="item.coupon">
                            已套用優惠券
                            </div>
                        </td>
                        <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                        <td class="align-middle">{{ item.final_total }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">總計</td>
                            <td>{{ shop.total }}</td>
                        </tr>
                        <tr v-if="shop.finalTotal !== shop.total">
                            <td colspan="3" class="text-right text-success">折扣價</td>
                            <td class="text-right text-success">{{ shop.finalTotal }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="col-md-12">
                <div class="d-flex align-items-center justify-content-center">
                    <form class="form-space" @submit.prevent="createOrder">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="請輸入email" v-model="shop.form.user.email">
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">收件人姓名</label>
                            <input type="text" class="form-control" id="name" placeholder="請輸入收件人姓名" v-model="shop.form.user.name">
                        </div>
                        <div class="mb-3">
                            <label for="tel" class="form-label">收件人電話</label>
                            <input type="tel" class="form-control" id="tel" placeholder="請輸入收件人電話" v-model="shop.form.user.tel">
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">收件人地址</label>
                            <input type="text" class="form-control" id="address" placeholder="請輸入收件人地址" v-model="shop.form.user.address">
                        </div>
                        <div class="mb-3">
                            <label for="comment" class="form-label">留言</label>
                            <textarea class="form-control" id="comment" rows="3" v-model="shop.form.message"></textarea>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-danger">送出訂單</button>
                        </div>
                    </form>
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
import ShoppingHeader from "../components/shoppingHeader.vue";

import { useShoppingStore } from '../stores/shoppingStore';
const shop = useShoppingStore();
const {  getCart,removeCart,createOrder} = shop;
onMounted(getCart);
</script>

<style scoped lang="scss">
.form-space{
    width:65%;
}

@media (max-width: 768px) {
    .form-space{
        width:100%;
    }
}
</style>