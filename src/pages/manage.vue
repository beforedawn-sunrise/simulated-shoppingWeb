<template>
<div>
  <ManageHeader></ManageHeader>
  <ProductModal></ProductModal>
  <DeleteModal></DeleteModal>
  <div class="container-fluid allSpace">
    <div class="row">
        <p class="text-center fs-25">產品列表</p>
        <div class="col-md-12">
           <button type="button" class="btn btn-primary" style="float: right;" @click="switchData(true,{})" data-bs-toggle="modal" data-bs-target="#productModal">建立新的產品</button>
        </div>
        <div class="col-md-12 mt-40">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">分類</th>
                <th scope="col">產品名稱</th>
                <th scope="col">原價</th>
                <th scope="col">售價</th>
                <th scope="col">編輯</th>
                <th scope="col">刪除</th>
              </tr>
            </thead>
            <tbody>
              <loading v-model:active="manage.isLoading" :can-cancel="true" :is-full-page="true"/>
              <tr v-for="item in manage.products">
                <td>{{ item.category }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.origin_price }}</td>
                <td>{{ item.price }}</td>
                <td><button type="button" class="btn btn-outline-primary" @click="switchData(false,item)" data-bs-toggle="modal" data-bs-target="#productModal">編輯</button></td>
                <td><button type="button" class="btn btn-outline-danger" @click="switchDeleteData(item)" data-bs-toggle="modal" data-bs-target="#deleteModal">刪除</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-12">

          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link"  :class="{'disabled': !manage.pagination.has_pre}" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" v-for="page in manage.pagination.total_pages" :key="page" :class="{'active': manage.pagination.current_page === page}">
                <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
              </li>
              <li class="page-item">
                <a class="page-link"  :class="{'disabled': !manage.pagination.has_next}" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import ProductModal from "../components/productModal.vue"
import ManageHeader from "../components/manageHeader.vue";
import DeleteModal from "../components/deleteModal.vue"
import { useManageStore } from '../stores/manage';
const manage = useManageStore();
const { getProducts,switchData ,switchDeleteData} = manage;
onMounted(getProducts);
</script>


<style scoped lang="scss">
.allSpace{
  margin-top:80px;
  p{
    font-weight: bold;
  }
}
</style>

