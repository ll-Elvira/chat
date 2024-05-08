// 创建实例
const  pw= new Vue({
    // 通过el配置选择器，指定Vue管理的是哪个盒子
    el: '.pw',
    // 通过data提供数据
    data: {
        flag1: true,
        flag2: false
    },
    // vue 实例中提供所有的methods中的函数，this都指向当前实例
    // 提供处理逻辑函数
    methods: {
        send(){

        }
    }
})
