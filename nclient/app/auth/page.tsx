'use client'
import Cookies from "js-cookie";
import { FormEvent } from "react";
import { useUserContext } from "../../context/userContext";

function Page() {
  let { isAuth, jwt, setUser, setJwt, setIsAuth } = useUserContext();
  if (isAuth && jwt) { 
    window.location.href = "/";
  }

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

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">

    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
    </p>

    <form onSubmit={e => handleLogin(e)} action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
    
      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            <svg
    className="ml-2 h-5 w- inline-block mr-2"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    ></path>
  </svg>
        Sign in / Sign up with Google
      </button>
    </form>
  </div>
</div>
  )
}

export default Page