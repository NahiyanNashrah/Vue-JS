<template>
  <div>
    <p>Please select a User</p>
    <hr />
    <ul class="list-group">
      <!-- <li class="list-group-item" style="cursor: pointer">User 1</li>
      <li class="list-group-item" style="cursor: pointer">User 2</li>
      <li class="list-group-item" style="cursor: pointer">User 3</li> -->

      <router-link
        to="/user/1"
        tag="li"
        class="list-group-item"
        style="cursor: pointer"
        ><a>User 1</a></router-link
      >
      <router-link
        to="/user/2"
        tag="li"
        class="list-group-item"
        style="cursor: pointer"
        ><a>User 2</a></router-link
      >
      <router-link
        to="/user/3"
        tag="li"
        class="list-group-item"
        style="cursor: pointer"
        ><a>User 3</a></router-link
      >
    </ul>
  </div>
</template>
