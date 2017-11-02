<template>
  <div>
    <ul>
      <li> Venue Name : {{venue.venue_name}}</li>
      <li>Rooms :
          <ul>
            <li v-for="room in venue.rooms">{{room.room_name}}</li>
          </ul>
      </li> 
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      venue () {
  	    return this.$store.state.venue
      }
    },
    created (){
      this.$store.dispatch('getVenue')
    },
    methods: {

    }
  }
</script>
