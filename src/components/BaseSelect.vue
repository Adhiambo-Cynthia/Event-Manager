<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    >
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String, //the props serve to make them dynamic
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  },
  computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: this.updateValue
        }
      }
    }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
