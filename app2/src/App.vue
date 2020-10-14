<template>
  <div id="app">
      <Header name="app2"/>
  </div>
</template>
<script>

export default {
  components: {
    Header: () => import('app1/Header')
  }
}

</script>
