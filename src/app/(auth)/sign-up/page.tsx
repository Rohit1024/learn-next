import SignIn from "@/components/auth/SignIn";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function page() {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'self-start -mt-20'
          )}>
          <Icons.chevronLeft className='mr-2 h-4 w-4' />
          Home
        </Link>

        <SignIn />
      </div>
    </div>
  )
}
