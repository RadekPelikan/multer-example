import { useState } from "react";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    console.log(formdata);

    const URL = "http://localhost:3000";

    fetch(`${URL}/user`, {
      method: "POST",
      body: formdata,
    });
  };

  return (
    <div className="grid place-content-center min-h-screen">
      <form
        className="grid gap-4 px-6 py-4 bg-amber-100 rounded-xl"
        onSubmit={handleSubmit}
      >
        <label>
          <p className="text-amber-600 text-lg">Username</p>
          <input
            name="username"
            className="border-b-2 border-b-amber-300 w-full"
            type="text"
          />
        </label>
        <label>
          <p className="text-amber-600 text-lg">Email</p>
          <input
            name="email"
            className="border-b-2 w-full border-b-amber-300"
            type="email"
          />
        </label>
        <label>
          <p className="text-amber-600 text-lg">Pasword</p>
          <input
            name="password"
            className="border-b-2 w-full border-b-amber-300"
            type="password"
          />
        </label>
        <label>
          <p className="text-amber-600 text-lg">Profile picture</p>
          <input name="file" type="file" />
        </label>
        <div>
          <button
            type="submit"
            className="mx-auto block px-10 py-2 bg-amber-300 rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
