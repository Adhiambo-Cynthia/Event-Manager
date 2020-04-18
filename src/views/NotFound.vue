<template>
    <div>
        <h1>OOPS!</h1>
        <h2>404: {{resource}} Not Found :(</h2>
        <router-link :to="{ name: 'Events' }">Back to Home Page</router-link>
        

    </div>
</template>

<script>
    export default {
      props: {
          resource: String
      }  
    }
</script>

<style lang="scss" scoped>

</style>