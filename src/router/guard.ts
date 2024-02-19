/*
import
*/
import router from "./index";

router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.getItem('userToken');
    if (isLogin) {
      next();
      if(to.path == '/login') {
        alert('已登入')
        next('/home');
      }
    } else {
      if( to.path !== '/login' && to.path !== '/')
        next('/')
      else
        next()
    }
  })