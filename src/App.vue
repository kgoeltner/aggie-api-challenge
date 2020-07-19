<template>
  <div id="app" class="container">
    <main-list :events="events" @selected-event="updateSub"></main-list>
    <sub-list :currentEvent="currentEvent" :selected="selected"></sub-list>
  </div>
</template>

<script>
import MainList from './components/main-list.vue'
import SubList from './components/sub-list.vue'


export default {
  name: 'App',

  components: {
    MainList, SubList
  },

  data() {
    return {
      events: [],
      currentEvent: {},
      selected: false
    }
  },

  methods: {
    updateSub(index) {
      this.currentEvent = this.events[index];
      this.selected = true;
    }
  },

  mounted() {
    fetch('https://aggiefeed.ucdavis.edu/api/v1/activity/public?s=0?l=25')
      .then(response => response.json())
      .then(json => {
        this.events = json;
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  font: bold 30px/1.5 Helvetica, Verdana, sans-serif;
}

li {
  margin: 5px;
  border: 2px solid black;
  background-color: lightyellow;
  padding: 5px 20px;
  font: 15px/1.5 Helvetica, Verdana, sans-serif;
}

.container {
  display: flex;
}

</style>
