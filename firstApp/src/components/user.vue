<template>
    <div>
        <h1>User</h1>
        <div>我是user组件,动态部分是{{dynamicSegment}}</div>
        <router-link to="/user/1">UserOne</router-link>
        <router-link to="/user/2">UserTwo</router-link>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
      created() {
        console.log(this.$route);
        this.fethch()
      },
      computed: {
        dynamicSegment () {
          console.log(this.$route.params.id);
            return this.$route.params.id
        }
      },
      methods:{
        fethch() {
          let self = this;
          axios.get(`http://localhost:3000/posts/${self.dynamicSegment}`)
          .then(function (response) {
            console.log(response.data);
            console.log(response.data.title);
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        aaa() {

        }
      }
    }
</script>
