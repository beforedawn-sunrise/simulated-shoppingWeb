//vue-i18n.js
import { createI18n } from "vue-i18n";
//只修改import，其他不變，main.js不變
import en from "./en.json";
import zhTW from "./zh-TW.json";

const i18n = createI18n({
  legacy: false,
  locale: "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zhTW,
    en: en,
  },
});
export default i18n;