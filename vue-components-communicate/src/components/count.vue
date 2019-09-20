<template>
  <div class="count">
    <h2>{{msg}}</h2>
    <hr />
    <!-- <h3>{{$store.state.count}}</h3> -->
    <h3>{{count}}</h3>
    <!-- <button @click="$store.commit('add')">+</button> -->
    <button @click="add">+</button>
    <button @click="$store.commit('reduce')">-</button>
    <hr />
    <p>{{date}}</p>
    <hr />
    <p>{{money}}</p>
    <button @click="makeMoneyAction">挣钱</button>
  </div>
</template>

<script>
import store from "@/store/index.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  // computed: {
  //   date() {
  //     return this.$store.state.date;
  //   }
  // },
  computed: {
    ...mapState(["date","money"]),
    ...mapGetters(['count'])
    //  count () {
    //   return this.$store.getters.count
    // }
  },
  // computed: mapState({
  //   date: state => state.date
  // }),
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['makeMoneyAction'])
    },
  store
};
</script>

<style scoped>
</style>