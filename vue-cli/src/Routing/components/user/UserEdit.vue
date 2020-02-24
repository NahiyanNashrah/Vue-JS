<template>
  <div clas="userEdit">
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <div style="height:700px"></div>
    <p id="data">Some Information</p>
  </div>
</template>