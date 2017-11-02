import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    venue: 0,
    enquiry: {}
  },
  getters: {

  },
  mutations: {
    changeVenueData (state, venue_data ) {
      state.venue = venue_data ;
    }
  },
  actions: {
    getVenue (context) {
      Vue.axios.get('http://localhost:3004/venue')
      .then(function (response) {
        console.log(response);
        context.commit('changeVenueData', response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})


// export default new Vuex.Store({
//   state: {
//     count: 0,
//   },
//   mutations: {
//   	increment: state => state.count++,
//     decrement: state => state.count--
//   }
// })
