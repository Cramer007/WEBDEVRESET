<script lang = "ts" setup>

defineProps<{
    label: string
    id: string
    type: string
    modelValue : string
}>()

</script>

<template>
    
    <div>
        <label :for="id">{{ label }}</label>
        <input 
            class = "bg-transparent rounded-large border-2"
            :type
            :id
            :value="modelValue"
            @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)">
    </div>

</template>

