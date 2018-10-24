<template>
    <div :class="b({ disabled: isDisabled })" @click="$emit('click')">
    <span :class="b('input')">
      <input
        :value="name"
        v-model="currentValue"
        type="radio"
        :class="b('control')"
        :disabled="isDisabled"
      >
      <icon :name="currentValue === name ? 'checked' : 'check'" />
    </span>
    <span v-if="$slots.default" :class="b('label', labelPosition)" @click="onClickLabel">
      <slot />
    </span>
  </div>
</template>
<script>
import findParent from '../mixins/find-parent'
import bem from '../mixins/bem'
import icon from '@/components/icon'
export default {
  name: 'radio',
  mixins: [findParent,bem],
  props: {
    name: null,
    value: null,
    disabled: Boolean,
    labelDisabled: Boolean,
    labelPosition: Boolean
  },
  computed: {
    currentValue: {
      get() {
        return this.parent ? this.parent.value : this.value;
      },
      set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    isDisabled() {
      return this.parent
        ? this.parent.disabled || this.disabled
        : this.disabled;
    }
  },
  created() {
    this.findParent('radio-group');
  },
   methods: {
    onClickLabel() {
      if (!this.isDisabled && !this.labelDisabled) {
        this.currentValue = this.name;
      }
    }
  },
  components: {
      icon
  },
}
</script>
<style scoped>
    .radio__input,.radio__label {
        display: inline-block;
        vertical-align: middle
    }
    .radio__input {
        position: relative;
        width: 20px;
        height: 20px;
    }
    .radio__control {
     position: absolute;
     top: 0;
     left: 0;
     opacity: 0;
     margin: 0;
     width: 100%;
     height: 100%;
    }
    .radio__input >>> img {
        width: 20px;
        height: 20px;
    }
</style>
