<template>
  <div>
    <p :class="notificationType">{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: Object
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationType() {
      return `-text-${this.notification.type}`; //evaluates to -text-error or -text-success
    }
  },
  methods: mapActions("notification", ["remove"])
};
</script>

<style scoped></style>
