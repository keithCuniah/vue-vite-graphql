<template>
  <div class="star-wars-app">
    <ShowCharacters :people="allPeople.people" v-if="allPeople.people" />
    <span v-else>Loading...</span>
  </div>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import ShowCharacters from "./components/ShowCharacters.component.vue";

const ALL_PEOPLE_QUERY = gql`
  query {
    allPeople {
      people {
        id
        name
      }
    }
  }
`;

const { result } = useQuery(ALL_PEOPLE_QUERY);

const allPeople = computed(() => result.value?.allPeople ?? []);
</script>

<style scoped></style>
