<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number]
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
