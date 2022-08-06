export const authEndPoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "608b1b4e99cd4b16b2128dd24aecbaeb";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            console.log(initial); 
            return initial
        }, {});
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;



              