import { defineStore } from "pinia";
import ConnectApi from "../api/connect";
import { allProductsModel,singleProductModel,cartModel,orderProductModel,orderUserModel} from "../interfaces/shoppingModel";
import router from "../router/index";

export const useShoppingStore = defineStore("ShoppingStore", {
    state: () => ({
        products        : [] as allProductsModel[],
        singleProduct   :{} as singleProductModel,
        form :{
            user: {
              name: '',
              email: '',
              tel: '',
              address: '',
          },
          message: '',
        },
        isLoading: false,
        num:1,
        cart:[] as cartModel[],
        total: 0,
        finalTotal: 0,
        orderId:"",
        orderProduct:[] as orderProductModel[],
        orderUser:{} as orderUserModel,
        orderFinalTotal:0,
        orderPaidStatus:false,
    }),

    getters: {
    },

    actions: {
        async getProducts(){
            this.isLoading = true;
            await ConnectApi("GET","https://vue-course-api.hexschool.io/api/lucy104/products","").then(response => {
                // 如果取得資料成功,就...
                console.log("取得產品");
                console.log(response.data);
              if (response.data.success) {
                // vm.isLoading = false;
                 /* 取得產品資料 */
                 this.isLoading = false;
                this.products = response.data.products;
              }
            })
        },
        async getSingleProduct(id:string){
          this.isLoading = true;
          router.push({path:'/singleproduct',query:{productId:`${id}`}});
          await ConnectApi("GET",`https://vue-course-api.hexschool.io/api/lucy104/product/${id}`,"").then(response => {
              // 如果取得資料成功,就...
              console.log("取得單一產品資料");
              console.log(response.data);
            if (response.data.success) {
              // vm.isLoading = false;
               /* 取得產品資料 */
              this.isLoading = false;
              this.singleProduct = response.data.product;
              console.log(this.singleProduct);
              
            }
          })
        },

      async addtoCart(id:string,qty=1){
          this.isLoading = true;

          const cartModel = {
            data:{
              product_id:id,
              qty:qty,
            }
          }

          await ConnectApi("POST","https://vue-course-api.hexschool.io/api/lucy104/cart",cartModel).then(response => {
              // 如果取得資料成功,就...
              console.log("加入購物車");
              console.log(response.data);
            if (response.data.success) {
              // vm.isLoading = false;
               /* 取得產品資料 */
               
               this.isLoading = false;
               alert("已經加入購物車");
               this.getCart();
            }
          })
      },
      async getCart(){
        this.isLoading = true;
        await ConnectApi("GET","https://vue-course-api.hexschool.io/api/lucy104/cart","").then(response => {
            // 如果取得資料成功,就...
            console.log("取得購物車列表");
            console.log(response.data);
          if (response.data.success) {
            // vm.isLoading = false;
             /* 取得產品資料 */
             this.isLoading = false;
             this.cart = response.data.data.carts;
            this.total =response.data.data.total;
            this.finalTotal =response.data.data.final_total;
             console.log("cart:" + this.cart)
          }
        })
      },
      async removeCart(id:string){
        this.isLoading = true;

        await ConnectApi("DELETE",`https://vue-course-api.hexschool.io/api/lucy104/cart/${id}`,"").then(response => {
            // 如果取得資料成功,就...
            console.log("移除購物車項目");
            console.log(response.data);
          if (response.data.success) {
            // vm.isLoading = false;
             /* 取得產品資料 */
             this.isLoading = false;
             this.getCart();
          }
        })
      },

      async createOrder(){
        this.isLoading = true;

        const orderModel = {
          data:this.form,
        }

        await ConnectApi("POST","https://vue-course-api.hexschool.io/api/lucy104/order",orderModel).then(response => {
            // 如果取得資料成功,就...
            console.log("建立訂單");
            console.log(response.data);
          if (response.data.success) {
            // vm.isLoading = false;
             /* 取得產品資料 */
             this.orderId = response.data.orderId;
             router.push({path:'/checkout',query:{orderId:`${response.data.orderId}`}});

             this.isLoading = false;
          }
        })
      },

      async getOrder(){
        this.isLoading = true;

        await ConnectApi("GET",`https://vue-course-api.hexschool.io/api/lucy104/order/${this.orderId}`,"").then(response => {
            // 如果取得資料成功,就...
            console.log("取得訂單");
            console.log(response.data);
          if (response.data.success) {
             /* 取得產品資料 */
             this.orderFinalTotal = response.data.order.total;
             this.orderPaidStatus = response.data.order.is_paid;
             this.orderProduct = response.data.order.products;
             this.orderUser = response.data.order.user;
             this.isLoading = false;
          }
        })
      },

      async payOrder(){
        this.isLoading = true;

        await ConnectApi("POST",`https://vue-course-api.hexschool.io/api/lucy104/pay/${this.orderId}`,"").then(response => {
            // 如果取得資料成功,就...
            console.log("結帳付款");
            console.log(response.data);
          if (response.data.success) {
            this.isLoading = false;
            this.orderPaidStatus = true;
          }
        })
      },
    },
});
