/*
    This is an incorrect implementation of the Dependency Inversion Principle.
    This is because we have created a dependency based on an implementation detail (HttpClient)
*/
import IApiClient from "./ApiClient";

export default async function SignUpService(client: IApiClient){
    return async (username: string) => {
        const existingUser = await client.getUserByUsername(username);
        
        if(existingUser){
            throw new Error('user exists already');
        }

        return client.createUser(username);
    }
}