<template>
  <div class="main">
    <header>
      <el-button @click.prevent="removeDomain">Delete</el-button>
      <el-button @click.prevent="removeDomain">Unseen</el-button>
      <el-button @click.prevent="removeDomain">Edit</el-button>
    </header>
    <div class="nav">
      <el-page-header @back="goBack"></el-page-header>
    </div>
    <div class="tags">
      <!-- <form>
        <label for="text">Title: {{ $route.params.id }}</label> -->
      <!-- <label for="text">Title: {{ title }}</label> -->
      <!-- <label for="text">Description: {{ description }}</label> -->
      <!-- <label for="text">Stacktrace: {{ stacktrace }}</label> -->
      <!-- </form> -->
      <p>Title : {{ title }}</p>
      <p>Description : {{ description }}</p>
      <p>Stacktrace : {{ stack_trace }}</p>
      <hr />
      <div class="add-tag">
        <span>Add tags</span>
        <ul>
          <input type="checkbox" v-model="checkbox" />
          <li>{{ tags }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['title', 'description', 'stack_trace', 'tags']),
  },
  data() {
    return {
      // title: '',
      // description: '',
      // stacktrace: '',
      // tags: '',
      // checkbox: false
      // isVisible: false
    }
  },
  methods: {
    created() {
      this.$store.dispatch('getSingleLog')
    },
    goBack() {
      this.$router.push('/log')
    },
  },
}
</script>

<style lang="scss">
body {
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
}
header {
  display: block;
  text-align: right;
  // margin-top: -2rem;
  margin-right: 1rem;
}
.tags {
  background-color: white;
}
.nav {
  margin-top: -2rem;
}
form {
  margin-top: 2rem;
}
label {
  display: block;
  text-align: center;
  padding: 1rem;
  font-weight: 700;
}
input {
  margin-top: 2rem;
}
</style>