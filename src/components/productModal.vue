<template>
<div>
    <loading v-model:active="manage.uploadLoading" :can-cancel="true" :is-full-page="true"/>
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="text-white fs-20">建立新產品</span>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="fs-16">輸入圖片網址</label>
                                <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="manage.tempProduct.imageUrl">
                                <label class="fs-16 mt-20">或上傳圖片</label>
                                <input type="file" class="form-control" @change="uploadFile">
                                <img :src="manage.tempProduct.imageUrl" alt="" class="mt-20">
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label class="fs-16">標題</label>
                                        <input type="text" class="form-control" placeholder="請輸入標題" v-model="manage.tempProduct.title">
                                    </div>
                                    <div class="col-md-6 col-6 mt-20">
                                        <label class="fs-16">分類</label>
                                        <input type="text" class="form-control" placeholder="請輸入分類"  v-model="manage.tempProduct.category">
                                    </div>
                                    <div class="col-md-6 col-6 mt-20">
                                        <label class="fs-16">單位</label>
                                        <input type="text" class="form-control" placeholder="請輸入單位" v-model="manage.tempProduct.unit">
                                    </div>
                                    <div class="col-md-6 col-6 mt-20">
                                        <label class="fs-16">原價</label>
                                        <input type="number" class="form-control" placeholder="請輸入原價" v-model="manage.tempProduct.origin_price">
                                    </div>
                                    <div class="col-md-6 col-6 mt-20">
                                        <label class="fs-16">售價</label>
                                        <input type="number" class="form-control" placeholder="請輸入單位" v-model="manage.tempProduct.price">
                                    </div>
                                    <div class="col-md-12 mt-20">
                                        <label class="fs-16">產品描述</label>
                                        <textarea class="form-control" rows="3" v-model="manage.tempProduct.description"></textarea>
                                    </div>
                                    <div class="col-md-12 mt-20">
                                        <label class="fs-16">說明內容</label>
                                        <textarea class="form-control" rows="3" v-model="manage.tempProduct.content"></textarea>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="manage.tempProduct.is_enabled" :true-value="1" :false-value="0" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                是否啟用
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-if="manage.isNew == false" @click="updateProducts">更新</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-if="manage.isNew" @click="addProducts">確認</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script setup lang="ts">
import { useManageStore } from '../stores/manage';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
const manage = useManageStore();
const { uploadFile ,addProducts, updateProducts} = manage;

</script>
<style scoped lang="scss">
.modal{
    --bs-modal-width: 800px;
    .modal-header{
        background-color: black;
    }

    img{
        width:100%;
        @media (max-width: 768px) {
            width:25%;
        }
    }
}

</style>