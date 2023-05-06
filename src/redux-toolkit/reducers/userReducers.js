const userReducers = {
    updateFormErrors: (state, action) => {
        const errors = action.payload.filter(error => error !== undefined)
        state.notifications = errors.map((msg) => ({ style: 'danger', msg }));
        state.showNotification = true;
    },
    signOut: (state, action) => {
        localStorage.removeItem('user');
        state.user = null;
    },
    setShowNotification: (state, action) => {
        state.showNotification = false;
    },
    successMsg: (state, action) => {
        state.notifications = [action.payload];
    },
    setIsSignIn: (state, action) => {
        state.isSignIn = !state.isSignIn;
    }
}

export default userReducers