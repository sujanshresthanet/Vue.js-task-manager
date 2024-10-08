<template>
    <!-- Main container for the registration form -->
    <div class="container">
        <!-- Form heading -->
        <h2>Register</h2>

        <!-- Form for user registration, prevents default submission and triggers register method -->
        <form @submit.prevent="register">
            <!-- Username input field -->
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input 
                    type="text" 
                    class="form-control" 
                    v-model="username" 
                    required
                />
                <!-- Binds the input field to the 'username' data property -->
                <!-- Input type is text for the username field -->
                <!-- Bootstrap classes used for styling the form -->
                <!-- The 'required' attribute ensures that the field must be filled out -->
            </div>

            <!-- Password input field -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input 
                    type="password" 
                    class="form-control" 
                    v-model="password" 
                    required
                />
                <!-- Binds the input field to the 'password' data property -->
                <!-- Input type is password to hide the entered text -->
                <!-- Bootstrap classes used for styling the form -->
                <!-- The 'required' attribute ensures that the field must be filled out -->
            </div>

            <!-- Submit button for form submission -->
            <button type="submit" class="btn btn-primary">Register</button>
            <!-- Button to trigger form submission, linked to the 'register' method -->
            <!-- Bootstrap class 'btn btn-primary' is used to style the button -->
        </form>

        <!-- Message for users who already have an account, with a link to the login page -->
        <p class="mt-3">
            Already have an account? 
            <router-link to="/login">Login here</router-link>
            <!-- Router-link used to navigate to the login page -->
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',  // Store the input for the username field
            password: ''   // Store the input for the password field
        };
    },
    methods: {
        register() {
            // Retrieve the list of existing users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || {};
            // Check if the entered username already exists
            if (users[this.username]) {
                alert('Username already exists. Please choose another one.');
                // If the username exists, show an alert and prevent registration
                return;
            }

            // Store the new user's credentials in localStorage
            users[this.username] = this.password; 
            // Store as key-value pairs (username: password), although hashing the password is recommended for real applications
            localStorage.setItem('users', JSON.stringify(users));

            // Notify the user of successful registration
            alert('Registration successful! You can now login.');

            // Redirect the user to the login page after successful registration
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
/* Styling the registration form container */
.container {
    max-width: 400px;      /* Set the maximum width for the form */
    margin: 0 auto;        /* Center the form horizontally */
    padding: 20px;         /* Add padding inside the container */
    /* No additional borders or shadows to keep it simple */
}
</style>
