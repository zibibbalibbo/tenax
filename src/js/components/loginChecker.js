import {
    CognitoUserPool,
    CognitoUserAttribute,
    CognitoUser,
} from 'amazon-cognito-identity-js';

export function LoginChecker() {
    // Configure AWS Amplify
    Amplify.configure({
        Auth: {
            region: 'eu-west-2', // Esempio: 'us-east-1'
            userPoolId: 'eu-west-2_qBvqHto9W', // Esempio: 'us-east-1_XXXXXXXXX'
            userPoolWebClientId: '34vorsr3caj9bni4thslmm2hse', // Esempio: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
        }
    });


    return <div className="cta-container">
        <h1>Unisciti a Noi!</h1>
        <p>Scopri di più e inizia la tua avventura con noi oggi stesso.</p>
        <a href="https://tenax.auth.eu-west-2.amazoncognito.com/login?client_id=34vorsr3caj9bni4thslmm2hse&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fzibibbalibbo.github.io%2Ftenax%2Fsrc%2Fprofile.html">Iscriviti
            Ora</a>
    </div>
}
