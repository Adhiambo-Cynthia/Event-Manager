<template>
  <div class="events">
    <h1>Events Listing for {{user.user.name}}</h1>
    <EventCard v-for="event in events.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'Events', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
    </template>
    <template v-if="page * 4 < events.totalEvents">
      <router-link
        :to="{ name: 'Events', query: { page: page + 1 } }"
        rel="next"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  name: "Events",
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch("events/fetchEvents", { perPage: 4, page: this.page });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events", "user",])
  }
};
</script>
