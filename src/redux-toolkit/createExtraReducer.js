
const stateSpecificExtraReducers = {
    user: (state, responseData) => {
        localStorage.setItem("user", JSON.stringify(responseData));
        state.notifications.push({ style: 'success', msg: 'Sign in successfully' })
    },
    questions: (state) => {
        state.timer = true;
        state.testSubmitted = false;
    },
    newScore: (state) => {
        state.testSubmitted = true;
        state.timer = false;
        state.modal = true;
    }
}

export const createExtraReducer = (builder, asyncMethod, stateToUpdate) => {
    builder.addCase(asyncMethod.pending, (state) => {
        state.isLoading = true
    })
    builder.addCase(asyncMethod.fulfilled, (state, action) => {
        const { responseData, responseError } = action.payload;
        state.isLoading = false
        const extraReducer = stateSpecificExtraReducers[stateToUpdate]
        extraReducer && extraReducer(state, responseData)
        state[stateToUpdate] = responseData;
        if (responseError) {
            const hasErrorMsg = state.notifications.find((notification) => notification.msg === responseError)
            if (Array.isArray(responseError)) {
                state.notifications = responseError.map((msg) => ({ style: 'danger', msg }))
            }
            if (!hasErrorMsg) {
                state.notifications = [{ style: 'danger', msg: responseError }];
            }
            state.showNotification = true;
        }
    })
    builder.addCase(asyncMethod.rejected, (state, action) => {
        state.isLoading = false
        state.notifications = [...state.notifications, { style: 'danger', msg: action.payload }];
        state.showNotification = true;
    })
}