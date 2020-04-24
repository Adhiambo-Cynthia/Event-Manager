<template>
  <router-link
    class="event-link"
    :to="{ name: 'ShowEvent', params: { id: event.id } }"
  >
    <div class="event-card">
      <span class="eyebrow">TIME: @ {{ event.time }} on {{ event.date | date }}</span>
      <h4 class="title">EVENT: {{ event.title }}</h4>
      <h5 class="title">LOCATION: {{ event.location }}</h5>
      <BaseIcon name="users">
        <span slot="attendees"> {{ event.attendees.length }} attending</span>
      </BaseIcon>
      

    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:hover{
  opacity: 1;
}
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  margin-top: 24px;
  background-color: rgb(238, 155, 155);
  border-radius: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
  
}
</style>
