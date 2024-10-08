<template>
  <!-- Main container for the login form -->
  <div class="login-container">
    
    <!-- Form heading -->
    <h2>Login</h2>

    <!-- Form with @submit.prevent to stop the default form submission and invoke the custom login method -->
    <form @submit.prevent="login">

      <!-- Username input field -->
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter username"
          required
        />
        <!-- Binds the input field value to the 'username' data property -->
        <!-- Sets the input field type as text -->
        <!-- Applies Bootstrap styling for a form control input field -->
        <!-- Assigns a unique ID to the input field for labeling and accessibility -->
        <!-- Provides a placeholder text for the username input field -->
        <!-- Makes this input field required for form submission -->
      </div>

      <!-- Password input field -->
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password"
          required
        />
        <!-- Binds the input field value to the 'password' data property -->
        <!-- Sets the input field type as password (text will be hidden) -->
        <!-- Applies Bootstrap styling for a form control input field -->
        <!-- Assigns a unique ID to the input field for labeling and accessibility -->
        <!-- Provides a placeholder text for the password input field -->
        <!-- Makes this input field required for form submission -->
      </div>

      <!-- Login button -->
      <button type="submit" class="btn btn-primary">Login</button>
      <!-- Button to trigger form submission -->
      <!-- Uses Bootstrap classes for styling -->
    </form>

    <!-- Error message section -->
    <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    <!-- Displays the error message in red text if 'errorMessage' is not empty -->
    <!-- Uses Bootstrap classes for text styling -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',  // Holds the value entered in the username input field
      password: '',  // Holds the value entered in the password input field
      errorMessage: '',  // Stores the error message if login fails
    };
  },
  methods: {
    login() {
      // Retrieve stored user data from localStorage or initialize an empty object if none exists
      const users = JSON.parse(localStorage.getItem('users')) || {};

      // Default hardcoded credentials
      const defaultUsername = 'admin';
      const defaultPassword = 'admin';

      // Check if the entered username and password match any stored user credentials
      if (users[this.username] && users[this.username] === this.password) {
        // Store a dummy token and username in localStorage to simulate a login session
        localStorage.setItem('token', 'dummy-static-token');
        localStorage.setItem('username', this.username);

        // Redirect the user to the "/tasks" route after successful login
        this.$router.push('/tasks');
      } 
      // Check if the entered credentials match the default hardcoded credentials
      else if (this.username === defaultUsername && this.password === defaultPassword) {
        // Store a dummy token and username in localStorage for the default login
        localStorage.setItem('token', 'dummy-static-token');
        localStorage.setItem('username', this.username);

        // Redirect the user to the "/tasks" route
        this.$router.push('/tasks');
      } 
      // If the credentials do not match, display an error message
      else {
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    },
  },
};
</script>

<style scoped>
/* Styles for the login form container */
.login-container {
  max-width: 400px;         /* Limit the maximum width of the form */
  margin: 50px auto;        /* Center the form horizontally and add top margin */
  padding: 20px;            /* Add padding inside the container */
  border: 1px solid #ddd;   /* Light border around the container */
  border-radius: 10px;      /* Round the corners for aesthetic appeal */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow effect */
}

h2 {
  text-align: center;       /* Center the heading text */
  margin-bottom: 20px;      /* Add space below the heading */
}
</style>
