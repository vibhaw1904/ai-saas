// Use client-side "use client"
"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

  const Login=()=> {
  
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";



  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Signin with google or github</CardDescription>
      </CardHeader>
      <Button className="bg-blue-600 py-2 px-6 rounded-md mb-2" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>Sign in with google</Button>
      <Button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>Sign in with github</Button>
     
    </Card>
  );
}
export default Login;