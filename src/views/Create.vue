<template>
  <div class="about">
    <h2>Create an Event {{ user.user.name }}</h2>
    <!-- <p>Total users {{ totaluserss }}</p> -->
    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name and describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times: times,
      event: this.createFreshEvent()
    };
  },
  computed: {
    // totaluserss() {
    //   return this.$store.getters.totalusers;
    // },
    ...mapState({ user: "user", categories: "categories" })
    // {
    //   user() {
    //     return this.$store.state.user;
    //   }
    // }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch("events/createEvent", this.event)
        .then(
          () => {
          this.$router.push({
            name: "ShowEvent",
            params: { id: this.event.id }
          });
          this.event = this.createFreshEvent()
    })
        .catch(() => {});
    },
    createFreshEvent() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        user: user,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
