const { createApp } = Vue;

const app = createApp({});

app.config.globalProperties.$http = {
    login(username, password) {
        // Static username/password check
        if (username === 'user' && password === 'pass') {
            localStorage.setItem('token', 'static-token');
            return true;
        }
        return false;
    },
    register(username, password) {
        // For simplicity, just return true as registration success
        return true;
    },
    forgotPassword(email) {
        // Just return success for demo
        return true;
    },
    updateProfile(username) {
        // Here we would normally update the profile
        return true;
    },
};

app.mount('#app');
