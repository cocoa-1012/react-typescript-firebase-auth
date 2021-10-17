import { auth } from "./firebase";

//sign up
export const doCreateUserWithEmailAndPassword =(
    email: string,
    password: string
) => auth.createUserWithEmailAndPassword(email, password);

//sign in
export const doSignInWithEmailAndPassword = (email: string, password: string) =>
    auth.signInWithEmailAndPassword(email, password);

//sign out
export const doSignOut = () => auth.signOut();

//password Reset
export const doPasswordReset = (email: string) => 
    auth.sendPasswordResetEmail(email);

//password change
export const doPasswordUpdate = async (password: string) => {
    if (auth.currentUser) {
        await auth.currentUser.updatePassword(password);
    }
    throw Error("No auth.currentUser!");
};