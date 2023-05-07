export const createExtraReducer = (builder, asyncMethod, stateToUpdate) => {
    builder.addCase(asyncMethod.pending, (state) => {
        state.isLoading = true
    })
    builder.addCase(asyncMethod.fulfilled, (state, action) => {
        console.log('success')
        const { responseData, responseError } = action.payload;
        state.isLoading = false
        if (stateToUpdate === 'user' && responseData) {
            localStorage.setItem("user", JSON.stringify(responseData));
            state.notifications.push({ style: 'success', msg: 'Sign in successfully' })
            state.showNotification = true;
        }
        state[stateToUpdate] = responseData;
        console.log({ responseData, responseError })
        if (responseError) {
            state.notifications = Array.isArray(responseError)
                ? responseError.map((msg) => ({ style: 'danger', msg }))
                : [...state.notifications, { style: 'danger', msg: responseError }];
            state.showNotification = true;
        }
    })
    builder.addCase(asyncMethod.rejected, (state, action) => {
        state.isLoading = false
    })
}