"use client";
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react";

interface AuthProviderProps {
    session:Session | null;
    children: React.ReactNode;
}

export default function AuthProvider({ session, children }: AuthProviderProps) {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
} 