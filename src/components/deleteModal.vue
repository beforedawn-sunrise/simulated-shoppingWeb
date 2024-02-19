<template>
<div>

<!-- Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h1 class="modal-title fs-5 text-white" id="deleteModalLabel">刪除產品</h1>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="fs-16">是否刪除 商品(刪除後將無法恢復)。</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteProducts">刪除產品</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script setup lang="ts">
import { useManageStore } from '../stores/manage';
const manage = useManageStore();
const {deleteProducts} = manage;
</script>