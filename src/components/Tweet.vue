<template>
  <div class='tweet'>
    <img class='tweet__image' src='https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp_bigger.jpg'/>
    <div class='tweet__content'>
      <div class='tweet__content__user'>{{ user }}</div>
      <div class='tweet__content__text'>{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tweet',
  props: {
    user: {
      type: String,
      required: true
    },
    text: String
  }
}
</script>

<style scoped>
  .tweet {
    background: #fff;
    border-bottom: 1px solid #e6ecf0;
    padding: 9px 12px;
    display: flex;
    transition: 0.4s all;
    cursor: pointer;
  }

  .tweet:hover {
    background: #f5f8fa;
  }

  .tweet__content {
    text-align: left;
  }

  .tweet__content__user {
    word-break: break-all;
    color: #14171a;
    font-size: 14px;
    font-weight: bold;
  }

  .tweet__content__text {
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .tweet__image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 9px;
  }
</style>
