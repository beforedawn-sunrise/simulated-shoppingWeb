import { defineStore } from "pinia";
import ConnectApi from "../api/connect";
import { paginationModel,productsModel,tempProductModel} from "../interfaces/manageModel"
import axios from "axios";

export const useManageStore = defineStore("ManageStore", {
    state: () => ({
        products        : [] as productsModel[],
        pagination  :  {} as paginationModel,
        tempProduct:{} as  tempProductModel,
        isNew: false,
        isLoading: false,
        status:{
            fileUploading: false,
        },
        uploadedFile: null,
        uploadLoading : false,
    }),

    getters: {
    },

    actions: {
        async getProducts(page = 1){
            this.isLoading = true;
            await ConnectApi("GET",`https://vue-course-api.hexschool.io/api/lucy104/admin/products?page=${page}`,"").then(response => {
                // 如果取得資料成功,就...
                console.log("取得產品");
                console.log(response.data);
              if (response.data.success) {
                // vm.isLoading = false;
                 /* 取得產品資料 */
                 this.isLoading = false;
                this.products = response.data.products;
                 /* 取得所在分頁 */
                this.pagination = response.data.pagination;
              }
            })
        },
        switchData(isNew:boolean,item:object){
            if(isNew){
                
                // 編輯產品衣料為空
                this.tempProduct = {} as tempProductModel;
                this.isNew = true;
              }else{
                console.log(item);
                 // 取得編輯單一產品資料
                 this.tempProduct = Object.assign({} as tempProductModel,item);
                 this.isNew = false;
              }
        },
        async addProducts(){
            this.isLoading =true;
            const requestModel = {
                data: this.tempProduct
            };
            await ConnectApi("POST","https://vue-course-api.hexschool.io/api/lucy104/admin/product",requestModel).then(response => {
                // 如果取得資料成功,就...
                console.log("建立產品");
                console.log(response.data);
              if (response.data.success) {
                this.isLoading = false;
                this.tempProduct = {} as tempProductModel;
                this.getProducts();
              }
            })
        },

        async updateProducts(){
           this.isLoading = true;
            const requestModel = {
                data: this.tempProduct
            }
            await ConnectApi("PUT",`https://vue-course-api.hexschool.io/api/lucy104/admin/product/${this.tempProduct.id}`,requestModel).then(response => {
                // 如果取得資料成功,就...
                console.log("更新產品");
                console.log(response.data);
              if (response.data.success) {
                this.isLoading =false;
                this.getProducts();
              }
            })
        },

        switchDeleteData(item:object){
            this.tempProduct = Object.assign({} as tempProductModel,item);
        },
        async deleteProducts(){

          this.isLoading = true;

            await ConnectApi("DELETE",`https://vue-course-api.hexschool.io/api/lucy104/admin/product/${this.tempProduct.id}`,"").then(response => {
                // 如果取得資料成功,就...
                console.log("刪除產品");
                console.log(response.data);
              if (response.data.success) {
                this.isLoading = false;
                this.getProducts();
              }
            })
        },

        async uploadFile(event:Event){
            this.uploadLoading =true;
            const uploadedFile = (event.target as HTMLInputElement).files?.[0];
            if (uploadedFile) {
                // 利用formData物件來模擬表單上傳
                const formData = new FormData();
                // 將圖片欄位新增進去
                formData.append('file-to-upload', uploadedFile);
                const instance = axios.create();
                // 在這裡直接修改 instance 的 headers
                instance.defaults.headers['Content-Type'] = 'multipart/form-data';

                try {
                    // 使用自定義的 Axios instance 進行請求
                    const response = await ConnectApi("POST", "https://vue-course-api.hexschool.io/api/lucy104/admin/upload", formData);
            
                    // 如果取得資料成功，就...
                    console.log("上傳圖片");
                    console.log(response.data);
            
                    if (response.data.success) {
                      // 取得圖片網址
                      this.uploadLoading = false;
                      // this.$set(this.tempProduct, 'imageUrl', response.data.imageUrl);
                      this.tempProduct.imageUrl = response.data.imageUrl;
                    }
                } catch (error) {
                    console.error(error);
                } finally {
                    // 在這裡恢復 instance 的 headers，避免影響其他請求
                    delete instance.defaults.headers['Content-Type'];
                }
            }

            

        }
    },
});
