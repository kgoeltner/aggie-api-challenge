<template>
    <div id="col-1">
      <h2>Events</h2>

      <ol>
        <li v-for="(event, index) in events" :key="index">
          <div class="event"
               @click="setEvent(index)">
            <p> {{ event.title }} </p>
            <p> {{ event.actor.displayName }} </p>
          </div>
        </li>
      </ol>

    </div>
</template>

<script>
export default {
  name: 'main-list',

  props: {
    events: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      current: 0
    }
  },

  methods: {
    setEvent(index) {
      this.current = index;
      this.$emit('selected-event', this.current);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#col-1 {
  flex: 1;
}

</style>
