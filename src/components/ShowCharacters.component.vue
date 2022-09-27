<template>
  <div class="show-characters">
    <ul class="character" v-for="person in people" :key="person.id">
      <li>
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  people: {
    type: Object as PropType<
      {
        id: string;
        name: string;
        __typename: string;
      }[]
    >,
    required: true,
  },
});
</script>
