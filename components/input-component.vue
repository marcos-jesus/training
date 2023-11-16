<script setup>
  defineProps ({
    type: {
      type:String,
      required: true
    }, 
    name: {
      type: String,
    },
    label: {
      type: String,
      required: true
    },
    validation: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true
    },
    value: String,
    help:String,
    icon: String,
    min: Number,
    max: Number,
    step: Number,
    disabled: Boolean,
    options: Array | Object,
  })
</script>
<template>
  <FormKit 
    :type="type"
    :name="name"
    :label="label"
    :help="help"
    :validation="validation"
    :value="placeholder"
    :prefix-icon="icon"
    >
    </FormKit>
</template>

<style>
[data-invalid] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px red;
}

[data-complete] .formkit-inner {
  border-color: red;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: '✅';
  display: block;
  padding: 0.5em;
}
</style>