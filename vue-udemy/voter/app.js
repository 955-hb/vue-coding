// Hello Hannes

const app = Vue.createApp({
  // optionen
  data: function () {
    return {
      submissions: submissions, //aus seed.js
      totalVotes: 0,
    };
  },
  // computed: {
  //   totalVotes() {
  //     return this.submissions.reduce((totalVotes, submission) => {
  //       return totalVotes + submission.votes
  //     }, 0);
  //   },
  // },
  methods: {
    //    upvote: function() {}, ==> keine Arrow-Functions nutzen!!!
    upvote(event) {
      this.submissions[0].votes++;
    },
    logConsole(text) {
      // console.log(text);
    },
  },
  watch: {
    // submissions(newValue, oldValue) {
    //   console.log(newValue);
    //   console.log(oldValue);
    // },

  submissions: {
    handler(newValue, oldValue) {
      this.totalVotes = this.submissions.reduce((totalVotes, submissions) => {
        return totalVotes + submissions.votes;
      }, 0);
    },
    deep: true,
    immediate: true,
  },
  totalVotes(newValue, oldValue) {
    console.log(newValue);
      console.log(oldValue);
   },
  },
});

// liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app"); //vm = viewModel
