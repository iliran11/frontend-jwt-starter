<template>
  <form v-on:submit.prevent="onSubmit">
    <fieldset class=" form-group ">
      <label>Email:</label>
      <input class="form-control " name="email " type="text " placeholder="email" v-model="email" />
    </fieldset>
    <fieldset class="form-group ">
      <label>password:</label>
      <input class="form-control " name="password " type="text " placeholder="password" v-model="password" />
    </fieldset>
    <button action="submit " class="btn btn-primary ">Sign In</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    ...mapActions(['getLoginStatus']),
    onSubmit() {
      this.getLoginStatus({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
