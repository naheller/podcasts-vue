<template>
  <ul>
    <li v-for="(item, index) in searchResults" :key="`result-${index}`">
      {{ item.title_original }}
    </li>
  </ul>
</template>

<script>
export default {
  props: { searchResults: Array },
}
</script>

<style></style>
