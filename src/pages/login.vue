<template>
<div class="fix-background d-flex align-items-center justify-content-center">
        <!-- 卡片工具 -->
        <loading v-model:active="login.isLoading" :can-cancel="true" :is-full-page="true"/>
        <div class="card" style="width: 18rem;border:none;">
            <div class="bg-dark">
                    <p class="text-white" style="width: 100px;margin:20px auto;">管理者登入</p>
            </div>
            <div class="card-body bg-white">
                <form  @submit.prevent="loginSubmit">
                    <div class="row">
                        <div class="col-md-12 mb-20">
                            <div class="alert alert-danger" role="alert" v-if="login.message">
                               {{ login.message }}
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="account" class="form-label">帳號</label>
                        </div>
                        <div class="col-md-12 mb-20">
                            <input type="text" id="account" v-model="login.loginData.username" placeholder="請輸入帳號">
                        </div>
                        <div class="col-md-12">
                            <label for="password" class="form-label">密碼</label>
                        </div>
                        <div class="col-md-12 mb-30">
                            <input type="password" id="password" v-model="login.loginData.password" placeholder="請輸入密碼">
                        </div>
                        <div class="col-md-12">
                            <div class="d-grid gap-1">
                                <button type="submit" class="btn btn-primary">登入</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">
    // 連結Api Function
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/css/index.css';
    import { useLoginStore } from '../stores/loginStore';
    const login = useLoginStore();
    const { loginSubmit } = login;

</script>

<style scoped>
label{
    font-size: 16px;
}
input{
    width:100%;
    border-radius:10px;
    padding: 10px 0px 10px 20px;
}
</style>