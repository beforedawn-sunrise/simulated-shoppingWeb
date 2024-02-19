<template>
    <div>
        <nav>
            <!-- <div class="burger" v-bind:class="{ toggle : css.navSlide}" @click="SlideControl('navToggle')">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-links" v-bind:class="{ 'nav-active': css.navSlide}">
                <li>產品列表</li>
            </ul> -->
            <span class="text-white fs-16" style="font-weight: bold;">管理者系統</span>
            <!-- <button class="PCmore-btn" type="button" @click="SlideControl('switchToggle')">
                <i class="fa-solid fa-user"></i>
                使用者:{{loginAccount}}
                <i v-bind:class="['fa-solid', 'fa-chevron-down', { 'up': css.switchSlide }]"></i>
            </button>
            <button class="mobileMore-btn" type="button" @click="SlideControl('switchToggle')">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button> -->
            <button type="button" class="btn btn-secondary" @click="logoutSubmit">登出</button>
        </nav>
        <!-- <div style="box-sizing: border-box">
            <ul v-bind:class="['switch-links', { 'switch-active': css.switchSlide }]">
                <li>繁體中文</li>
                <li>English</li>
                <li>前台資料</li>
                <li>登出</li>
            </ul>
            
        </div> -->
         <!-- backdrop -->
        <div v-if="css.allSlide" class="outside" @click="hideFilter()"></div>
    </div>
    </template>
<script setup lang="ts">
        import { ref} from 'vue'
        // 引入login和css store
        import { useLoginStore } from '../stores/loginStore';
        import { useCssStore } from '../stores/cssStore';
        const login = useLoginStore();
        const css = useCssStore();
        const {logoutSubmit}=login;
        const {SlideControl,hideFilter} = css;
    
        // 下拉選單切換定義預設值
        const dropdownToggle = ref("");
        let loginInformation = sessionStorage.getItem("loginInfo");
        let  loginAccount = ref("");
        if(loginInformation != null){
            loginAccount = JSON.parse(loginInformation);
        }
 </script>
<style lang="scss" scoped>
    @import "../styles/header.scss";
</style>