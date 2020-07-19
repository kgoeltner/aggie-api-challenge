//    
//    Karl Goeltner
//    7/19/20 
//    main.js
//

Vue.component('main-list', {
  props: {
    events: {
      type: [],
      required: true
    }
  },

  template: `
    <div class="container">
      <div id="col-1">
        <h2>Events</h2>

        <ol>
          <li v-for="(event, index) in events">
            <div class="event"
                 @click="updateSub(index)">
              <p> {{ event.title }} </p>
              <p> {{ event.actor.displayName }} </p>
            </div>
          </li>
        </ol>
      </div>

      <div id="col-2">
        <sub-list :currentEvent="currentEvent" :selected="selected"></sub-list>
      </div>
    </div>
  `,

  data() {
    return {
      currentEvent: {},
      selected: false
    }
  },

  methods: {
    updateSub(index) {
      this.currentEvent = this.events[index];
      this.selected = true;
    }
  }
})

Vue.component('sub-list', {
  props: {
    currentEvent: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  },

  template: `
    <div class="right-panel">

      <h2>Details</h2>

      <div>
        <p> {{ currentEvent.title }} </p>
        <p> {{ currentEvent.actor.displayName }} </p>
        <p> {{ currentEvent.object.objectType }} </p>
        <p> {{ currentEvent.published }} </p>
      </div>

    </div>
  `
})

var app = new Vue({
  el: '#app',

  data: {
    events: []
  },

  mounted() {
    fetch('https://aggiefeed.ucdavis.edu/api/v1/activity/public?s=0?l=25')
      .then(response => response.json())
      .then(json => {
        this.events = json;
      })
  }
})
