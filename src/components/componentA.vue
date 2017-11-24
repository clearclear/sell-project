<template>
    <div id="cmpa">
        <h2>componentA</h2>
        <p>
            {{msg}}
        </p>
        <button @click="addone">add apple</button>
        <button @click="decone">decre apple</button>
    </div>
</template>
<script>
    export default{
        name:'cmpa',
        data(){
            return{
                msg:'i am a componentA',
                price:5
            }
        },
        methods:{
            addone(){
                this.$store.commit('increment',this.price);
            },
            decone(){
                this.$store.commit('decrement',this.price);
            }
        }
    }
</script>