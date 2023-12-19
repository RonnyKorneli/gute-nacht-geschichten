// lib/tokenUtils.js
import { jwtDecode } from 'jwt-decode'; // Import your JWT decoding library if not already done

export default  function CheckTokenExpiration (tokenKey){
    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken,'decodedToken');

        // Get the current time in seconds
        const currentTime = Math.floor(Date.now() / 1000);

        // Check if the token is expired
        if (decodedToken.exp < currentTime) {
            // Token has expired, remove it from local storage
            localStorage.removeItem(tokenKey);
            return false; // Token is expired
        } else {
            // Token is still valid
            return true;
        }
    }

    return false; // Token not found
};
