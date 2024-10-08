<template>
  <!-- Main container for the user profile form -->
  <div class="profile-container">
    
    <!-- Form heading -->
    <h2>User Profile</h2>

    <!-- Form for updating the user profile, prevents default submission and triggers updateProfile method -->
    <form @submit.prevent="updateProfile">

      <!-- Username input field, displayed but disabled (user can't change it) -->
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
          disabled
        />
        <!-- Binds the input field to the 'username' data property -->
        <!-- Input type is set to text but the field is disabled, preventing changes -->
        <!-- Bootstrap classes applied for styling the form control -->
      </div>

      <!-- New password input field, user can enter a new password here -->
      <div class="mb-3">
        <label for="password" class="form-label">New Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter new password"
        />
        <!-- Binds the input field to the 'password' data property -->
        <!-- Input type is set to password to hide entered characters -->
        <!-- A placeholder is provided to guide the user -->
        <!-- Bootstrap classes applied for styling the form control -->
      </div>

      <!-- Submit button to trigger profile update -->
      <button type="submit" class="btn btn-primary">Update Profile</button>
      <!-- Button triggers the form submission -->
      <!-- Bootstrap classes applied for button styling -->
    </form>

    <!-- Success message, shown when the profile update is successful -->
    <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>
    <!-- Displays the success message if it exists -->
    <!-- Bootstrap class 'text-success' applied to display the text in green -->

    <!-- Error message, shown when the profile update fails (e.g., empty password) -->
    <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
    <!-- Displays the error message if it exists -->
    <!-- Bootstrap class 'text-danger' applied to display the text in red -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',        // Stores the username retrieved from localStorage
      password: '',        // Holds the new password input from the user
      successMessage: '',  // Stores the success message to be displayed
      errorMessage: '',    // Stores the error message to be displayed
    };
  },
  created() {
    // Lifecycle hook that runs when the component is created
    // Retrieves the 'username' from localStorage and assigns it to the data property
    // If no username is found, defaults to 'User'
    this.username = localStorage.getItem('username') || 'User';
  },
  methods: {
    updateProfile() {
      // Validation: Ensures that the password is not empty
      if (!this.password) {
        this.errorMessage = 'Password cannot be empty'; // Display error message
        this.successMessage = ''; // Clear any previous success message
        return; // Exit the method if validation fails
      }

      // Simulate storing the new password in localStorage (acting as a mock database)
      localStorage.setItem('password', this.password);

      // On success, show a success message and clear the password field
      this.successMessage = 'Password updated successfully!'; // Success message
      this.errorMessage = ''; // Clear any previous error message
      this.password = ''; // Clear the password input field after update
    },
  },
};
</script>

<style scoped>
/* Styles for the profile form container */
.profile-container {
  max-width: 500px;         /* Set the maximum width of the form */
  margin: 50px auto;        /* Center the form horizontally and add top margin */
  padding: 20px;            /* Add padding inside the container */
  border: 1px solid #ddd;   /* Light border around the container */
  border-radius: 10px;      /* Round the corners for a smoother look */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for depth */
}

/* Styles for the heading */
h2 {
  text-align: center;       /* Center the heading */
  margin-bottom: 20px;      /* Add some space below the heading */
}
</style>
