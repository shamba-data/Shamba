import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { FaDiscord } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";

const Auth: React.FC = () => {
  const { data: sessionData, status } = useSession();
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined,
    { enabled: sessionData?.user !== undefined }
  );
  console.log(sessionData);
  if (status === "loading") {
    return <p>Loading ...</p>;
  }
  return (
    <main className="flex min-h-screen  items-center justify-center bg-[#232231] font-montserrat ">
      {sessionData ? (
        <section className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          </p>
          <button
            onClick={() => signOut()}
            className="cursor-pointer rounded-md bg-slate-500 px-4 py-2"
          >
            Logout
          </button>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-xl font-medium text-gray-300">Shamba Data</h3>
          <article className="text-lg font-normal text-gray-300">
            It&apos;s good to see you here. Just a few steps to Verify who you
            are and It will all be well.
          </article>
          <button
            onClick={() => signIn("discord")}
            className="flex cursor-pointer gap-3 rounded-md bg-slate-500 px-4 py-2"
          >
            <span>
              <FaDiscord size={25} color="#d1d5db" />
            </span>
            Sign Up with Discord
          </button>
          {/* <button
            onClick={() => signIn("google")}
            className="flex cursor-pointer gap-3 rounded-md bg-slate-500 px-4 py-2"
          >
            <span>
              <FaGoogle size={23} color="#d1d5db" />
            </span>
            Sign Up with Google
          </button> */}
        </section>
      )}
    </main>
  );
};

export default Auth;
