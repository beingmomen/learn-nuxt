<!-- Please remove this file from your project -->
<template>
  <div>
    <!-- ahmed -->
    <!-- <div v-for="(user, i) in data" :key="i">
      <p>{{ user.id }}</p>
      <p>{{ user.body }}</p>
      <p>{{ user.title }}</p>
      <nuxt-link :to="`/test/${user.id}`">
        <span @click="update(user)">{{ user.title }}</span>
      </nuxt-link>
    </div> -->
    <h1>{{ post.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  // mounted() {
  //   this.$axios
  //     .$get("/posts")
  //     .then((res) => {
  //       this.data = res;
  //     });
  // },
  asyncData({ $axios }) {
    return $axios.$get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
        return {
          post: res,
        };
      });
  },
  // async asyncData({ params, $http }) {
  //   const post = await $http.$get(`https://jsonplaceholder.typicode.com/posts`);
  //   return { post };
  // },
  data() {
    return {
      post: [],
    };
  },

  methods: {
    update(user) {
      this.$store.commit("updateSelectedPost", user);
    },
  },

  // mounted() {
  //   setTimeout(() => {
  //     console.log("data : ", this.data);
  //   }, 3000);
  // },
};
</script>
