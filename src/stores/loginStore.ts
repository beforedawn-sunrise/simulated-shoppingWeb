import { defineStore } from "pinia";

import ConnectApi from "../api/connect";

import router from "../router/index"

export const useLoginStore = defineStore("loginStore", {
    state: () => ({
        loginData                  : {username:"",password:""},
        message                    :"",
        isLoading                  :false,
    }),

    getters: {
        getLoginData      :    state => state.loginData,
    },

    actions: {

        async loginSubmit() {
            this.isLoading = true;
            await ConnectApi("POST","https://vue-course-api.hexschool.io/admin/signin",this.loginData).then(response => {
                // 判斷系統回傳資訊
                console.log(response.data);
            //參考 https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
            // 如果取得資料成功,就...
            if(response.data.success){
                this.isLoading = false;
                // 將token存入sessionStorage中
                sessionStorage.setItem("userToken",JSON.stringify(response.data.token));
                router.push('/manage');
            }else{
                this.isLoading = false;
              this.message = response.data.message;
            }
            });
        },

        async logoutSubmit() {
            await ConnectApi("POST","https://vue-course-api.hexschool.io/logout","").then(response => {
                console.log(response.data);
                if (response.data.success) {
                  // 狀態碼為0，表示「成功取得資料」
                  this.$reset();
                  sessionStorage.clear();
                  console.log('登出成功');
                  router.push('/');
                }
            });
        },



    },
});
