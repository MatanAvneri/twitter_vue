<template>
  <div class="feed">
    <div class="feed__header">Welcome to (not) twitter!</div>
    <Tweet v-for='tweet in tweets' :key='tweet.user+tweet.text' :user='tweet.user' :text='tweet.text'/>
    <div class='new-tweet-row'>
      <textarea placeholder='user' v-model='user' class='userTweet'/>
      <textarea placeholder='whats happening' v-model='text' class='textTweet'/>
      <button class='new-tweet-row__button' v-on:click='addNewTweet'>Tweet</button>
    </div>
  </div>
</template>

<script>
import Tweet from './Tweet'
import { mapState } from 'vuex'

export default {
  components: {
    Tweet
  },
  name: 'Feed',
  data () {
    return {
      user: '',
      text: ''
    }
  },
  computed: mapState({
    tweets: 'tweets'
  }),
  methods: {
    addNewTweet: function () {
      const {user, text} = this
      if (user && text) {
        this.$store.commit('ADD_NEW_TWEET', {
          user,
          text
        })
        this.user = ''
        this.text = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .feed {
    text-align: center;
    width: 588px;
  }

  .feed__header {
    margin: 10px 0;
  }

  .new-tweet-row {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }

  .new-tweet-row__button {
    background-color: #4AB3F4;
    color: #fff;
    border-radius: 100px;
    box-shadow: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    line-height: 20px;
    padding: 6px 16px;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }

  .new-tweet-row textarea {
    border-radius: 8px;
    border: 1px solid #A4D9F9;
    height: 40px;
    resize: none;
    margin-right: 10px;
    padding: 3px 5px;
  }

  .new-tweet-row textarea:focus {
    outline: none;
  }
</style>
