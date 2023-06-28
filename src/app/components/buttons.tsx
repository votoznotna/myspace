"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return (
      <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt="Your Name"
        />
      </Link>
    );
  }

  return (
    <button
      className="
                bg-white
                text-white
                bg-opacity-30 
                rounded-md 
                py-1 md:py-1 
                px-2 md:px-2
                w-auto 
                text-xs lg:text-lg 
                
                flex
                flex-row
                items-center
                hover:bg-opacity-20
                transition"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      className="
                bg-white
                text-white
                bg-opacity-30 
                rounded-md 
                py-1 md:py-1 
                px-2 md:px-2
                w-auto 
                text-xs lg:text-lg 
                flex
                flex-row
                items-center
                hover:bg-opacity-20
                transition"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
