<template>
    <div id="cmpb">
        <h2>componentB</h2>
        <p>
            {{msg}}
        </p>
        <button @click="addone">add banana</button>
        <button @click="decone">decre banana</button>
    </div>
</template>
<script>
    export default{
        name:'cmpb',
        data(){
            return{
                msg:'i am a componentB',
                price:2
            }
        },
        methods:{
            // addone(){
            //     return this.$store.commit('increment',this.price);
            // },
            // decone(){
            //     return this.$store.commit('decrement',this.price);
                addone(){
                    return this.$store.dispatch('increase',this.price);
                },
                decone(){
                    return this.$store.dispatch('decrease',this.price);
                }
        }
    }
</script>