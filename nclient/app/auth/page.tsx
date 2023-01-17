'use client'
import Cookies from "js-cookie";
import { useUserContext } from "../../context/userContext";

function Page() {
  let { isAuth, jwt, setUser, setJwt, setIsAuth } = useUserContext();
  const checkUser = async () => { 
  const response = await fetch("http://localhost:4000/auth/user", {
        headers: {
          'Authorization': `Bearer ${Cookies.get("jwt") as string}`,
        }
      })
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("jwt", JSON.stringify(data.jwt));
        Cookies.remove("jwt"); 
        setUser!(data.user)
        setJwt!(data.jwt)
        setIsAuth!(true)
        window.location.href = "/";
      }
      else {
        console.log("error");
      }
}

const handleLogin = () => {
  if (isAuth && jwt) {
    window.location.href = "/";
  }
  else {
     const loginWindow = window.open("http://localhost:4000/auth/google", "_blank", "width=500,height=500");
     const timer = setInterval(async () => {
    if (loginWindow?.closed) {
      clearInterval(timer);
      await checkUser();
    }
  }, 500)
  }
}

  return (
    <div>
        <a onClick={handleLogin}>Home</a>
    </div>
  )
}

export default Page