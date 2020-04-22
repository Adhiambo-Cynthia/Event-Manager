<template>
  <div>
    event {{ id }}
    <span>
      <BaseButton
        @click.prevent="deleteEvent(event.id)"
        buttonClass="-fill-gradient"
        >DELETE EVENT
      </BaseButton>
    </span>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date | date }}</span>
      <h1 class="title">{{ event.title }}</h1>
      <h5>Organized by {{ event.organizer ? event.organizer.name : "" }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>
    <BaseIcon name="map"><h2>Location</h2></BaseIcon>
    <address>{{ event.location }}</address>
    <h2>Event details</h2>
    <p>{{ event.description }}</p>
    <BaseButton
        @click.prevent="editEvent()"
        buttonClass="-fill-gradient"
        >EDIT EVENT
      </BaseButton>
    <h2>
      Attendees
      <span class="badge -fill-gradient">{{
        event.attendees ? event.attendees.length : 0
      }}</span>
    </h2>
    <ul class="list-group">
      <li
        v-for="(attendee, index) in event.attendees"
        :key="index"
        class="list-item"
      >
        >
        {{ attendee.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import EventServices from "@/services/EventServices.js";
import { mapState } from "vuex";
import NProgress from "nprogress";
import store from "@/store/index"; //to call the fetch event since we dont have access to this
export default {
  props: ["id"],
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();
    store.dispatch("events/fetchEvent", routeTo.params.id).then(() => {
      NProgress.done(); // When the action is done complete progress bar
      next(); // Only once this is called does the navigation continue
    });
  },
  // created() {
  //   this.$store.dispatch("events/fetchEvent", this.id);
  //same as importing mapActions,calling fetchevent in methods and the using this.fetchEvent(this.id) in created

  //if the data wasn't going through vuex
  // EventServices.getEvent(parseInt(this.id))
  //   .then(response => {
  //     this.event = response.data;
  //   })
  //   .catch(error => console.log("An error occurred", error.response));
  // },
  computed: mapState({
    event: state => state.events.event
  }),
  methods: {
    deleteEvent() {
      this.$store.dispatch("events/deletetheEvent", this.id).then(() => {
        this.$router.push({
          name: "Events"
        });
      });
    },
    editEvent() {
     this.$router.push({
          name: "EditEvent",
          params: {id: this.id}
        });
      
    }
  }
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
