<template>
<div>
    <loading v-model:active="shop.isLoading" :can-cancel="true" :is-full-page="true"/>
    <ShoppingHeader></ShoppingHeader>
    <div class="container pt-75">
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="payOrder">
                    <table class="table">
                        <thead>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                        </thead>
                        <tbody>
                        <tr v-for="item in shop.orderProduct" :key="item.id">
                            <td class="align-middle">{{ item.product.title }}</td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total }}</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="2" class="text-right">總計</td>
                            <td class="text-right">{{ shop.orderFinalTotal }}</td>
                        </tr>
                        </tfoot>
                    </table>

                    <table class="table">
                        <tbody>
                        <tr>
                            <th width="100">Email</th>
                            <td>{{ shop.orderUser.email }}</td>
                        </tr>
                        <tr>
                            <th>姓名</th>
                            <td>{{ shop.orderUser.name }}</td>
                        </tr>
                        <tr>
                            <th>收件人電話</th>
                            <td>{{ shop.orderUser.tel }}</td>
                        </tr>
                        <tr>
                            <th>收件人地址</th>
                            <td>{{ shop.orderUser.address }}</td>
                        </tr>
                        <tr>
                            <th>付款狀態</th>
                            <td>
                            <span v-if="!shop.orderPaidStatus">尚未付款</span>
                            <span v-if="shop.orderPaidStatus" class="text-success">付款完成</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="text-right" v-if="shop.orderPaidStatus === false">
                        <button type="submit" class="btn btn-danger">確認付款去</button>
                    </div>
                </form>
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
const {  getOrder,payOrder} = shop;
onMounted(getOrder);
</script>