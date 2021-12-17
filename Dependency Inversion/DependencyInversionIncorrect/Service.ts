/*
    This is an incorrect implementation of the Dependency Inversion Principle.
    This is because we have created a dependency based on an implementation detail (HttpClient)
*/
import HttpClient from "./HttpClient";

export async function signup(username: string){
    const existingUser = await HttpClient.getUserByUsername(username);
    
    if(existingUser){
        throw new Error('user exists already');
    }

    return HttpClient.createUser(username);
}