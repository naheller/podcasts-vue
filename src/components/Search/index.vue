<template>
  <div>
    <search-field v-on:submit="sendQuery"></search-field>
    <p v-if="searchResults.loading">Loading...</p>
    <p v-else-if="searchResults.error">Error!</p>
    <search-list v-else v-bind:search-results="searchResults.podcasts"></search-list>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import SearchField from './SearchField.vue'
import SearchList from './SearchList.vue'

const GET_PODCASTS_BY_NAME = gql`
  query($name: String!) {
    podcastsByName(name: $name) {
      title_original
      id
    }
  }
`

export default {
  data() {
    return {
      searchResults: {
        podcasts: [],
        error: null,
        loading: false,
      },
    }
  },
  methods: {
    async sendQuery(searchTerm) {
      this.searchResults.loading = true

      const { data, error = null } = await this.$apollo.query({
        query: GET_PODCASTS_BY_NAME,
        variables: {
          name: searchTerm,
        },
      })

      if (error) console.log('Query error:', error)

      this.searchResults = {
        podcasts: data.podcastsByName,
        error,
        loading: false,
      }
    },
  },
  components: {
    'search-field': SearchField,
    'search-list': SearchList,
  },
}
</script>

<style></style>
