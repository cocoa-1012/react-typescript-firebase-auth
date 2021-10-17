import { db } from "./firebase";

//user api
export const doCreateUser = (id: string, username: string, email: string) =>
    db.ref(`users/${id}`).set({
        email,
        username
    });

export const onceGetUsers = () => db.ref('users').once('value');