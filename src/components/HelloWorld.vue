<template>
  <div>
    <router-link to="/user">User Info Details</router-link> <br>
    <h1>Hello, World!</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

