<template>
  <div class="">
    <div v-for="(user, i) in post" :key="i">
      <p>{{ user.id }}</p>
      <p>{{ user.body }}</p>
      <p>{{ user.title }}</p>
      <nuxt-link :to="`/test/${user.id}`">
        <span @click="update(user)">{{ user.title }}</span>
      </nuxt-link>
    </div>
    <!-- <Tutorial /> -->
    <!-- <h1>{{ post.title }}</h1> -->
  </div>
</template>

<script>
// import * as fs from 'fs/promises';
import { get, set, setMany, entries } from "idb-keyval";
// let fs = require('fs')
// import Dexie from "dexie";

export default {
  name: "IndexPage",
  middleware: "plugin",
  mounted() {
    for (let i = 0; i < 1000; i++) {
      set(`test${i}`, { name: `Momen${i}`, id: `${i}` });
    }
    // entries().then((entries) => console.log(entries));

    // for (let i = 0; i < 1000; i++) {
    //   set(`fuck${i}`, { name: `Salah${i}`, id: `${i}` });
    // }
    // for (let i = 0; i < 1000; i++) {
    //   }
    // setMany([
    //   [123, 456],
    //   ["hello", "world"],
    // ]);
    // const db = new Dexie("FriendDatabase");
    // db.version(1).stores({ friends: "++id" });
    // db.transaction("rw", db.friends, async () => {
    //   const t0 = performance.now();
    //   for (let i = 0; i < 1000; i++) {
    //     db.friends.add({ id: `${i}`, name: "Josephine", age: 21 });
    //     if (i == 999) {
    //       console.log(`t0`, performance.now() - t0);
    //     }
    //   }
    // }).catch((e) => {
    //   // alert(e.stack || e);
    // });
    // let db = null;
    //     setTimeout(() => {
    //       const t0 = performance.now();
    //       for (let i = 0; i < 1000; i++) {
    //         // set(`hello${i}`, { name: `Momen${i}`, id: `${i}` });
    //         addObjects(i);
    //         if (i == 999) {
    //           console.log(`t0`, performance.now() - t0);
    //         }
    //       }
    //     }, 3000);
    // const request = indexedDB.open("QSLIVE", 1); //on upgrade needed
    // request.onupgradeneeded = (e) => {
    //   db = e.target.result; // movies history
    //   db.createObjectStore("moviesHistory", {
    //     keyPath: "stream_id",
    //   }); // favorite movies
    // }; //on success
    // request.onsuccess = (e) => {
    //   db = e.target.result;
    //   // console.warn('DB Prepared');
    // }; //on error
    // request.onerror = (e) => {
    //   console.log(`error: ${e.target.error} was found `);
    // };
    //     // ********************************************
    //     function addObjects(i) {
    //       const tx = db.transaction("moviesHistory", "readwrite");
    //       tx.onerror = (e) => console.log(` Error! ${e.target.error}  `);
    //       const pPortal = tx.objectStore("moviesHistory");
    //       pPortal.add({ name: `Salah${i}`, stream_id: `${i}` });
    //     }
  },
  asyncData({ $axios }) {
    return $axios
      .$get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log("res : ", res);
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
      db: null,
    };
  },
  methods: {},
};
</script>
