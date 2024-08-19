export function LoginChecker() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    const raw = "";

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    const searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('code')) {
        let url = "https://tenax.auth.us-east-1.amazoncognito.com/oauth2/token";
        url += "?client_id=2cso17vr764m158rcukqvnvm7d";
        url += "&grant_type=authorization_code";
        url += "&code="+searchParams.get('code');
        url += "&redirect_uri=https://zibibbalibbo.github.io/tenax/dist/profile.html";

        fetch(url, requestOptions)
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    return <div className="cta-container">
        <h1>Unisciti a Noi!</h1>
        <p>Scopri di più e inizia la tua avventura con noi oggi stesso.</p>
        <a href="https://tenax.auth.eu-west-2.amazoncognito.com/login?client_id=34vorsr3caj9bni4thslmm2hse&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fzibibbalibbo.github.io%2Ftenax%2Fdist%2Fprofile.html">Iscriviti
            Ora</a>
    </div>
}
