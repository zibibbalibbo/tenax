import {Amplify} from 'aws-amplify'

console.log("Inizio prova");
// Configure AWS Amplify
Amplify.configure({
    Auth: {
        region: 'eu-west-2', // Esempio: 'us-east-1'
        userPoolId: 'eu-west-2_qBvqHto9W', // Esempio: 'us-east-1_XXXXXXXXX'
        userPoolWebClientId: '34vorsr3caj9bni4thslmm2hse', // Esempio: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
});

// Function to get user info
async function getUserInfo() {
    console.log("Start loading user info");
    try {
        const user = await Amplify.Auth.currentAuthenticatedUser();
        const userInfo = user.attributes;
        document.getElementById('user-info').innerHTML = `
                    <p><strong>Benvenuto, ${userInfo.email}!</strong></p>
                    <p>Nome: ${userInfo.given_name} ${userInfo.family_name}</p>
                `;
    } catch (error) {
        console.log('Utente non autenticato', error);
    }
}

// Call the function to get user info when the page loads
window.onload = getUserInfo;