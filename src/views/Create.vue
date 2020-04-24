<template>
  <div class="about">
    <h2>Create an Event {{ user.user.name }}</h2>
    <!-- <p>Total users {{ totaluserss }}</p> -->
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Select a Category"
        v-model="event.category"
        
        :options="categories"
        @blur="$v.event.category.$touch()"
        :class="{ error: $v.event.category.$error }"
      />
      <template v-if="$v.event.category.$error">
        <p v-if="!$v.event.category.required" class="errorMessage">
          Category required
        </p>
      </template>

      <h3>Name and describe your event</h3>
      <BaseInput
        label="Title"
        v-model="event.title"
        type="text"
        placeholder="Add an event title"
        class="field"
        @blur="$v.event.title.$touch()"
        :class="{ error: $v.event.title.$error }"
      />
      <template v-if="$v.event.title.$error">
        <p v-if="!$v.event.title.required" class="errorMessage">
          Title required
        </p>
      </template>
      <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
        placeholder="Add a description"
        class="field"
      />
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
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          :input-class="{ error: $v.event.date.$error }"
          @opened="$v.event.date.$touch()"
        />
      </div>
      <template v-if="$v.event.date.$error">
        <p v-if="!$v.event.date.required" class="errorMessage">
          Date required
        </p>
      </template>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <BaseButton
        type="submit"
        buttonClass="-fill-gradient"
        :disabled="$v.$anyError"
      >CREATE EVENT</BaseButton>
      <p v-if="$v.$anyError" class="errorMessage">
        Please fill out the required field(s)
      </p>

      <!-- <input type="submit" class="button -fill-gradient" value="Submit" /> -->
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Datepicker from "vuejs-datepicker";
import NProgress from "nprogress";
import { required } from "vuelidate/lib/validators";
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
  validations: {
    event: {
      title: { required },
      description: { required },
      category: { required },
      location: { required },
      date: { required }
    }
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        NProgress.start();
        // if (this.$store.events.state.events.id)
        this.$store
          .dispatch("events/createEvent", this.event)
          .then(() => {
            this.$router.push({
              name: "ShowEvent",
              params: { id: this.event.id }
            });
            this.event = this.createFreshEvent();
          })
          .catch(() => {
            NProgress.done(); // <-- if errors out stop the progress bar
          });
      }
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
    },
  
}
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
