import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();
  if (session) {
    return <p>Welcome {session.user.email}</p>;
  } else {
    return (
      <div>
        <div className="flex h-[100vh] w-screen flex-col items-center justify-center">
          <form>
            {/* <div className="flex flex-col">
            <label>Email</label>
            <input
              type="email"
              value=""
              className="rounded-md border-2 px-3 py-1"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mt-5 flex flex-col">
            <label>Password</label>
            <input
              type="password"
              value=""
              className="rounded-md border-2 px-3 py-1"
              placeholder="*****"
            />
          </div> */}

            <button
              type="submit"
              onClick={() => signIn()}
              className="mt-5 cursor-pointer rounded-md bg-gold px-3 py-[6px] text-xl font-medium text-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Auth;
