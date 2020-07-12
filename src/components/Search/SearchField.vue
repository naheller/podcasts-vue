<template>
  <div>
    <input type="text" v-model="searchTerm" placeholder="Search podcasts" />
    <button v-on:click="submitSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    submitSearch() {
      this.$emit('submit', this.searchTerm)
    },
  },
}
</script>

<style></style>
