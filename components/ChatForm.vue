<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
  </div>
</template>

<script>
import { db } from '~/plugins/firebase.js'
export default {
  methods:{
    data(){
      return {
        text: null
      }
    },
    addMessage(){
      const channelId = this.$route.params.id
      db.collection('channels').doc(channelId).collection('messages').add({text: this.text})
        .then(()=>{
          alert("メッセージを保存しました")
        })
    }
  }
}
</script>

<style scoped>

/* インプットエリア */
.input-container {
 padding: 10px;
 height: 100%;
}

textarea {
 width: 100%;
 height: 100%;
}
</style>