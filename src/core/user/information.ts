// Import OAuth2Token type from your OAuth2 library
// Assuming it's imported like this
// import { OAuth2Token } from 'some-oauth-library';

// Define the Reminder interface
interface Reminder {
    reason: string;
    date: string;
}

// Define the Information interface
interface Information {
    name: string;
    movieGenres: string[];
    movieBlacklist: string[];
    reminders: Reminder[];
    spotifyToken?: string | null; // OAuth2Token
    spotifyID: string;
    spotifySecret: string;
}

// Define the userInformation map as an object
const userInformation: { [token: string]: Information } = {};

// ChangeUserInformation requires the token of the user and a function which gives the actual
// information and returns the new information.
function changeUserInformation(token: string, changer: (info: Information) => Information) {
    userInformation[token] = changer(userInformation[token]);
}

// SetUserInformation sets the user's information by its token.
function setUserInformation(token: string, information: Information) {
    userInformation[token] = information;
}

// GetUserInformation returns the information of a user with his token
function getUserInformation(token: string): Information | undefined {
    return userInformation[token];
}
