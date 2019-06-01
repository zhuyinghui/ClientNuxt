export default ({ app }) => {
  app.router.afterEach((to, from) => {
    // console.log(to.path);
    // console.log(22)
    // if(document.sessionStorage.seller){
    //   console.log('sessionStorage.seller 存在')
    // }else{
    //   console.log('sessionStorage.seller 不存在')
    // }

    // console.log(sessionStorage)
  })
}
