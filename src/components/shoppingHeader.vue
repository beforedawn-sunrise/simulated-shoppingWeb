<template>
    <div>
        <nav class="nav">
            <span class="text-warning fs-35" style="font-weight: bold;" @click="router.push('/')">雲購物</span>
            <ul>
                <li  @click="router.push('/cart')">
                    <i class="fa-solid fa-cart-shopping text-white fs-35"></i>
                </li>
                <li>
                    <button type="button" class="btn btn-outline-warning" @click="router.push('/login')">登入後台</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
import router from "../router/index"
</script>
<style scoped lang="scss">
    .nav{
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 8vh;
        background-color: black;
        padding-left: 30px;
        padding-right: 30px;
        font-family:"Microsoft JhengHei";
        padding-bottom: 0px;
        z-index: 100000;
        span{
            cursor: pointer;
        }
        ul{
            display: flex;
            justify-content: flex-end;
            margin-left:auto;
            li{
                list-style: none;
                color:white;
                text-decoration: none;
                letter-spacing: 3px;
                justify-content:center;
                font-size: 16px;
                cursor: pointer;
                padding: 10px 10px 0px 10px;

                i:hover{
                    color: orange !important;
                }
            }
        }
    }

</style>