import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(email, password);
      navigate("/Dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        console.log("there is error");
        setError("incorrect password, try again");
      } else {
        console.log("wrong login");
        setError("Login error");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center bg-primary items-center min-h-screen">
        <section className="rounded-xl bg-secondary shadow-xl border-accent w-[20rem] sm:w-[24rem] h-[20rem]  p-8  ">
          <h2 className="text-2xl text-center font-bold text-accent">
            Sign Up
          </h2>
          <form onSubmit={signIn}>
            <div className=" flex text-accent font-medium flex-col py-4">
              <label htmlFor="">Username</label>
              <input
                className="rounded text-accent bg-primary pl-2"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex text-accent font-medium flex-col py-4">
              <label htmlFor="">Password</label>
              <input
                className="rounded text-accent bg-primary  pl-2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-accent rounded text-secondary font-semibold h-8 w-full">
                Sign Up
              </button>
            </div>
            <div className="text-accent text-center font-medium">
              {error && <div> {error}</div>}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
