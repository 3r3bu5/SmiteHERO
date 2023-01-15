import Cookies from "js-cookie";
const handleLogin = () => {
  const loginWindow = window.open("http://localhost:4000/auth/google", "_blank", "width=500,height=500");
  const timer = setInterval(async () => {
    if (loginWindow?.closed) {
      clearInterval(timer);
      const response = await fetch("http://localhost:4000/auth/user", {
        headers: {
          'Authorization': `Bearer ${Cookies.get("jwt") as string}`,
        }
      })
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("user", JSON.stringify(data));
        Cookies.remove("jwt");
        // redirect to home page
        window.location.href = "/";
      }
      else {
        console.log("error");
      }
    }
  }, 500)

}

  function logout() {
    localStorage.removeItem("user");
  }
export  {handleLogin, logout}