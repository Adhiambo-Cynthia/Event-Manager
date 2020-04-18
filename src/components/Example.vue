<template>
      <div>
        <input type="email" placeholder="What's your email" v-model="email"/>
        <button type="submit">Submit</button>
      </div>
    </template>
    
    <script>
export default {
      data() {
        return {
          email: null
        }
      }
    }
    </script>