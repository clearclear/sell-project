import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        total_price:0,
        todos:[
            {name:'zhangsan',age:10},
            {name:'lisi',age:12},
            {name:'wangwu',age:14},
            {name:'chengliu',age:18}
        ]
    },
    getters:{
        done_todos(state){
            return state.todos.length;
        }
    },
    mutations:{
        increment(state,price){
            state.total_price+=price;
        },
        decrement(state,price){
            state.total_price-=price;
        }
    },
    actions:{
        increase(context,price){
            context.commit('increment',price);
        },
        decrease(context,price){
            context.commit('decrement',price);
        }
    }
})