"use client";
// import * as React from "react"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <div>
              <CardTitle className="mb-1 text-2xl font-semibold">Sign in</CardTitle>
              <CardDescription>
                Choose your preferred sign in method
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 grid gap-4">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full bg-background">
                      <FaGoogle className="mr-2 size-4" />
                      Google
                    </button>

                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full bg-background">
                      <FaDiscord className="mr-2 size-4" />
                      Discord
                  </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Password</Label>
                  <Input id="name" type="password" placeholder="********" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full">Sign in</Button>
          </CardFooter>

          <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">Don't have an account?</span>

              <a aria-label="Sign up" className="text-primary underline-offset-4 transition-colors hover:underline" href="signup">
                Sign up
              </a>

            </div>
            
            <a aria-label="Reset password" className="text-sm text-primary underline-offset-4 transition-colors hover:underline" href="reset-password">
              Reset password
            </a>
          </div>
        </Card>
      </div>
      <div className="w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://skateshop.sadmn.com/images/auth-layout.webp')`,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to top, rbga(0,0,0,1.2),  rbga(0,0,0,0.8),  rbga(0,0,0,0.4))`,
          }}
        ></div>
      </div>
    </div>
  );
}