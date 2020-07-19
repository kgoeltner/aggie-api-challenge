<template>
    <div id="col-2">
      <h2>Details</h2>

      <div v-if="selected">
        <p> {{ currentEvent.title }} </p>
        <p> {{ currentEvent.actor.displayName }} </p>
        <p> {{ currentEvent.object.objectType }} </p>
        <p> {{ currentEvent.published }} </p>
      </div>

    </div>
</template>

<script>
export default {
  name: 'sub-list',

  props: {
    currentEvent: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#col-2 {
  flex: 1;
}

</style>
