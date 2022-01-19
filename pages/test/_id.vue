<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return !isNaN(params.id);
  },
};
</script>

<style lang="scss" scoped>
</style>
