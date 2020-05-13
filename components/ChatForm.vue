<template>
  <div class="input-container">
    <img :src="user.photoURL" v-if="isAuthenticated" class="avatar">
    <textarea v-model="text" v-if="isAuthenticated" @keydown.enter="addMessage"></textarea>
    <textarea v-model="text" v-else @click="openLoginModal"></textarea>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%">
    <div class="image-container">
      <img src="~/assets/google_sign_in.png" @click="login">
    </div>
    </el-dialog>
  </div>
</template>

<script>
import { db , firebase } from '~/plugins/firebase.js'
import { mapActions } from "vuex";
import Vue from "vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default {
  data(){
      return {
        dialogVisible: false,
        text: null
      }
    },

  computed:{
    user(){
      return this.$store.state.user
    },
    isAuthenticated(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods:{
    ...mapActions(['setUser']),
    openLoginModal(){
      this.dialogVisible = true
    },

    login() {
     const provider = new firebase.auth.GoogleAuthProvider()
     firebase.auth().signInWithPopup(provider)
       .then((result) => {
         const user = result.user
         this.setUser(user)
         console.log("ログインしています")
         this.dialogVisible = false
       }).catch((error) => {
         window.alert(error)
       })
     },

    addMessage(event){
      if(this.keyDownedForJPConversion(event)) { return }
      const channelId = this.$route.params.id
      db.collection('channels').doc(channelId).collection('messages').add({text: this.text, createdAt: new Date().getTime()})
        .then(()=>{
          alert("メッセージを保存しました")
        })
    },
    keyDownedForJPConversion(event){
      const codeForConversion = 229
      return codeForConversion === event.keyCode
    },

  }
}
</script>

<style scoped>

/* インプットエリア */
.input-container {
 padding: 10px;
 height: 100%;
 display: flex;
}

.avatar {
 height: 100%;
 width: auto;
}

textarea {
 width: 100%;
 height: 100%;
}

.image-container {
 display: flex;
 justify-content: center;
}

img {
 width: 70%;
 cursor: pointer;
}
</style>