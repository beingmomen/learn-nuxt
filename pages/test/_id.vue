<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <h1>{{ $store.state.selectedPost.title }}</h1>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return !isNaN(params.id);
  },
  fetch({ $axios, store, params }) {
    return $axios
      .$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        store.commit("updateSelectedPost", res);
      })
      .catch((err) => {});
  },
};
</script>

<style lang="scss" scoped>
</style>
