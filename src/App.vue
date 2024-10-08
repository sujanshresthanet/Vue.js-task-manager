<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Vue Task Manager</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Show these links if the user is logged out -->
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>

            <!-- Show these links if the user is logged in -->
            <li v-if="isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/tasks">Tasks</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>
            <li v-if="isLoggedIn" class="nav-item">
              <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View to load pages -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Reactive property to track login state
    };
  },
  created() {
    this.checkLoginStatus(); // Check login status when component is created
  },
  methods: {
    checkLoginStatus() {
      // Check if a token is present in localStorage
      this.isLoggedIn = !!localStorage.getItem('token');
    },
    logout() {
      // Clear the token from localStorage and update the login status
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/login'); // Redirect to login page
    },
  },
  watch: {
    // Watch for changes in the route and update the login status if necessary
    $route() {
      this.checkLoginStatus();
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
