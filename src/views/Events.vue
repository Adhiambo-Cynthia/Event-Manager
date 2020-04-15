<template>
  <div class="events">
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'Events', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      > |
    </template>
    <router-link :to="{ name: 'Events', query: { page: page + 1 } }"
    rel="next"
      >Next Page</router-link
    >
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
    this.$store.dispatch("fetchEvents", { perPage: 4, page: this.page });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events"])
  }
};
</script>
