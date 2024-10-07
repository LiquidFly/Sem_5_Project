import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Role, setRole] = useState("");

  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleRoleChange(event) {
    setRole(event.target.value);
  }

  async function handleSubmit(event) {
    
    
    event.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch("http://localhost:3000/API/users/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include', // Important for sending cookies
        body: JSON.stringify({
          Name: Name.toLowerCase().trim(),
          Email: email.toLowerCase().trim(),
          Role: Role.trim(),
          Password: password.toLowerCase().trim(),
        }),
      });

      if (!response.ok) throw new Error("Invalid Credentials");
      const data = await response.json();
      console.log("Success:", data); // Handle success (e.g., redirect or show a message)
      navigate("/", { state: { user: data } });
    } catch (error) {
      console.error("Error:", error); // Handle error (e.g., show an error message)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          GharDekho🏠
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  value={Name}
                  onChange={handleNameChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Role
                </label>
                <input
                  type="text"
                  name="Role"
                  id="Role"
                  value={Role}
                  onChange={handleRoleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white p-3 rounded-md bg-blue-500 hover:bg-primary-700"
              >
                Sign in
              </button>
              <p className="text-sm">
                Don’t have an account yet?
                <Link
                  to="/SignUpPage"
                  className="font-medium text-primary-600 hover-underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
