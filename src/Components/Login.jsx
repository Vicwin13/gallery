import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.PreventDefault();
  };

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center  items-center min-h-screen">
      <section className="border-2 rounded-xl border-green-400 w-[24rem]  p-8  ">
        <h2 className="text-2xl text-center font-bold ">Sign In</h2>
        <form action="" onClick={handleSubmit}>
          <div className=" flex flex-col py-4">
            <label htmlFor="">Username</label>
            <input
              className="border"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col py-4">
            <label htmlFor="">Password</label>
            <input
              className="border"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={signIn}
              className="bg-green-400 font-semibold h-8 w-full">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
