<template>
  <div class="Userdetail">
    <h3>Some User Details</h3>
    <p>Loaded id: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="{ name: 'editUser', params: { id: $route.params.id } ,query:{locale:'en',q:100}}"
    >Edit User</router-link>
  </div>
</template>
