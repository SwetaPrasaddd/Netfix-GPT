
export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(name);
    if (!isEmailValid)
        return "Email Id is not valid";
    if (!isPasswordValid)
        return "Password is not valid";
    if (!isNameValid)
        return "Full name is not valid";

    return null;  //No error 
};