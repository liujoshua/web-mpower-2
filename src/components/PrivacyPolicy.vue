<template>
  <vue-markdown :source="privacyPolicy">
  </vue-markdown>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import PrivacyPolicyDoc from '@/content/PrivacyPolicy.md'

  export default {
    data () {
      return {
        privacyPolicy: PrivacyPolicyDoc
      }
    },
    components: {
      VueMarkdown
    }
  }
</script>

<style lange="scss">
  /* TODO: make this page look good */
  p {
    display: block;
  }
</style>
