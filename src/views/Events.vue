<template>
  <div class="events">
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventServices from "@/services/EventServices.js";

export default {
  name: "Events",
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventServices.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  }
};
</script>
