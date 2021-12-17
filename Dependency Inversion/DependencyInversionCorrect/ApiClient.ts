export default interface IApiClient {
    createUser: (username: string) => Promise<void>;
    getUserByUsername: (username: string) => Promise<string>;
}