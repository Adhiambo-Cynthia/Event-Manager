<template>
  <div>
    <div id="nav" class="nav">
      <router-link to="/" class="brand">CAD Event Manager</router-link>
      <nav>
        <router-link :to="{ name: 'Events' }">Your Events</router-link>
        <router-link :to="{ name: 'CreateEvent' }">Create Event</router-link>
        <router-link :to="{ name: 'Example' }">Example</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #802104;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #ee895a;
  border-bottom: solid 2px #ee895a;
}
</style>
