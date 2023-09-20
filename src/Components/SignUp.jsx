import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(email, password);
      navigate("/Dashboard");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        console.log("there is error");
        setError("incorrect password");
      } else {
        console.log("wrong login");
        setError("Unauthenticated User");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center  items-center min-h-screen">
        <section className="border-2 rounded-xl border-green-400 xs:w-[24rem]  p-8  ">
          <h2 className="text-2xl text-center font-bold ">Login In</h2>
          <form onSubmit={signIn}>
            <div className=" flex flex-col py-4">
              <label htmlFor="">Username</label>
              <input
                className="border pl-2"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex flex-col py-4">
              <label htmlFor="">Password</label>
              <input
                className="border pl-2"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-400 font-semibold h-8 w-full">
                Submit
              </button>
            </div>
            {error && <div> {error}</div>}
          </form>
          <div className="text-center pt-8 mb-0">
            <p className=" text-sm font-semibold">
              <Link to="./SignIn">Create an account</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
