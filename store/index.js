export default {
  state: () => ({
    selectedPost: {}
  }),
  mutations: {
    updateSelectedPost(state, post) {
      state.selectedPost = post
    }
  }
}
