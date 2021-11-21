export const getUserName = (state) => state.auth.user.name;
export const getUserStatus = (state) => state.auth.isLoggenIn;
export const getIsFethingUser = (state) => state.auth.IsRefreshing;
export const getUserLogInError = (state) => state.auth.loginError;
export const getUserRegistrationError = (state) => state.auth.registrationError;
