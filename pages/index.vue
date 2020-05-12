<template>
  <div class="container">
    <messages />
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'

export default {
  components: {
    Messages
  }
}
</script>

<style>
/* ここから追加 */
.chats-container {
 padding: 16px;
}

.chat-container {
 display: flex;
 padding: 8px;
}

.thumbnail-container {
 margin-right: 16px;
}

.thumbnail-container img {
 width: 50px;
 height: 50px;
 border-radius: 10px;
}

.user-name {
 font-weight: bold;
}
</style>
