'use client'

import * as React from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({
  className,
  ...props
}: UserAuthFormProps) {
  const { toast } = useToast();
  const [googleLoading, setGoogleLoading] = React.useState<boolean>(false);
  const [gitHubLoading, setGitHubLoading] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setGoogleLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setGoogleLoading(false);
    }
  };

  const loginWithGitHub = async () => {
    setGitHubLoading(true);

    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Github",
        variant: "destructive",
      });
    } finally {
      setGitHubLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-4 justify-center", className)} {...props}>
      <Button
        isLoading={gitHubLoading}
        type='button'
        className='w-full'
        onClick={loginWithGitHub}
        disabled={gitHubLoading}
      >
        {gitHubLoading ? null : <Icons.gitHub className='h-4 w-4 mr-2' />}
        Continue with GitHub
      </Button>
      <Button
        isLoading={googleLoading}
        type='button'
        className='w-full'
        onClick={loginWithGoogle}
        disabled={googleLoading}
      >
        {googleLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
        Continue with Google
      </Button>
    </div>
  );
}
