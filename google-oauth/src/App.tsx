import { GoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';

function App() {
    const handleCredentialResponse = (response)=>{
        console.log(response)
    }
useEffect(()=>{
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://accounts.google.com/gsi/client';
    scriptTag.async = true;
    scriptTag.defer = true;
    scriptTag.onload = () => {

        google.accounts.id.initialize({
            client_id: '147198937459-l9g97lfen18rp24qob76hp4d0umqdimq.apps.googleusercontent.com',
            callback: handleCredentialResponse
          });

          google.accounts.id.renderButton(document.getElementById("signinDiv"), {
            theme: 'outline',
            size: 'large',
          });



    };
    scriptTag.onerror = () => {
      console.log("script loading error")
    };

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
},[])
  return (
    <div className="App">
        <div id='signinDiv'></div>
    </div>
  )
}

export default App
