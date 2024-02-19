import { defineStore } from "pinia";

export const useCssStore = defineStore("CssStore", {
    state: () => ({
        navSlide        :false,
        switchSlide     :false,
        allSlide        :false,

    }),

    getters: {
        // navToggle       :    state => state.navSlide,
        // switchToggle   :    state => state.switchSlide,
        // allToggle      :    state => state.allSlide,
    },

    actions: {
        SlideControl(type:string | null) {
            setTimeout(() => {
                if (type == "switchToggle") {
                    //登出視窗開啟
                    this.switchSlide = !this.switchSlide;
                    //側邊攔關閉
                    this.navSlide = false;
                    // backdrop開啟
                    this.allSlide = true;
                } else if (type == "navToggle") {
                    //側邊欄開啟
                    this.navSlide = !this.navSlide;
                    //登出視窗關閉
                    this.switchSlide = false;
                    // backdrop開啟
                    this.allSlide = true;
                }else {
                    //登出視窗關閉
                    this.switchSlide = false;
                    //側邊欄關閉
                    this.navSlide = false;
                    // backdrop關閉
                    this.allSlide = false;
                }
            }, 1);
        },

        hideFilter() {
            this.switchSlide = false;
            this.navSlide = false;
            this.allSlide = false;
        }

    },
});
