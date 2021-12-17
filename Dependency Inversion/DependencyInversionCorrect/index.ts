/*
    This is a correct implementation of the Dependency Inversion Principle
    This is because the SignUpService does not rely on a concrete implemntation of an ApiClient.
    All that it cares about is that it is given a Client that is an IApiClient. 
*/

import SignUpService from "./Service";
import { HttpClient } from "./HttpClient";

const SignUp = SignUpService(HttpClient());


