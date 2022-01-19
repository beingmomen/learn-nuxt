<!-- Please remove this file from your project -->
<template>
  <div>
    ahmed
    <div v-for="(user, i) in data" :key="i">
      <p>{{ user.id }}</p>
      <p>{{ user.body }}</p>
      <p>{{ user.title }}</p>
      <nuxt-link :to="`/test/${user.id}`" @click="update(user)">{{
        user.title
      }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  mounted() {
    this.$axios
      .$get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.data = res;
      });
  },
  // asyncData({ $axios }) {
  //   return $axios
  //     .$get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res);
  //       return {
  //         data: res,
  //       };
  //     });
  // },
  data() {
    return {
      data: [],
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
