export const LoginStart = (userCredentials)=>({
    type:"LOGIN_START",

})

export const LoginSucess = (user)=>({
    type:"LOGIN_SUCESS",
    payload:user,
});

export const Loginfailure = ()=>({
    type:"LOGIN_fAILURE"
});

export const Logout = ()=>({
    type:"LOGOUT"
})

export const updateStart = (userCredentials)=>({
    type:"UPDATE_START",

})

export const updateSucess = (user)=>({
    type:"UPDATE_SUCESS",
    payload:user,
});

export const updatefailure = ()=>({
    type:"UPDATE_fAILURE"
});
