<script setup>
  defineProps ({
    type: {
      type:String,
      required: true
    }, 
    label: String,
    help: String,
    icon: String,
  })
</script>
<template>
  <button
    :type="type"
    :label="label"
    :help="help"
    :icon="icon"
    class="bg-blue-500 rounded-md h-11 b text-white"
  >
    {{ label }}
  </button>
</template>