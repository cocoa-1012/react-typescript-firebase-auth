import * as React from "react";
import { PasswordChangeForm} from "./PasswordChangeForm";
import { AuthUserContext } from "../../firebase/AuthUserContext";
import { withAuthorization } from "../../firebase/withAuthorization";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetForm";

export const AccountComponent = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <h1>Account: {(authUser as any).email}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);

const authCondition = (authUser: any) => !!authUser;

export const Account = withAuthorization(authCondition)(AccountComponent);