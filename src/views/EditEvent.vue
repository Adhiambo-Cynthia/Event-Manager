<template>
  <div class="about">
    <h2>Edit this event {{ user.user.name }}</h2>
    <!-- <p>Total users {{ totaluserss }}</p> -->
    <form @submit.prevent="editEvent">
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
        @click.prevent="editEvent(event.id)"
        type="submit"
        buttonClass="-fill-gradient"
        >SAVE EDITS
      </BaseButton>
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
  props: ["id"],
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
      event: this.mounted()
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
    ...mapState({
      user: "user",
      categories: "categories",
      Originalevent: state => state.events.event
    })
    // {
    //   user() {
    //     return this.$store.state.user;
    //   }
    // }
  },
  methods: {
    editEvent() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        NProgress.start();
        // if (this.$store.events.state.events.id)
        this.$store
          .dispatch("events/edittheEvent", this.event)
          .then(() => {
            this.$router.push({
              name: "ShowEvent",
              params: { id: this.event.id }
            });
          })
          .catch(() => {
            NProgress.done(); // <-- if errors out stop the progress bar
          });
      }
    },
    mounted() {
      const user = this.$store.state.user.user;
      const id = this.id;
      const category = this.$store.state.events.event.category
      return {
        id: id,
        user: user,
        category: category,
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: ''
        
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
