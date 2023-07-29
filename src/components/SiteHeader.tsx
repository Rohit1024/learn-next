import { siteConfig } from "@/config/site";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import { UserAccountNav } from "./UserAccountNav";
import Link from "next/link";
import { getAuthSession } from "@/lib/auth";
import { buttonVariants } from "./ui/button";

const SiteHeader = async () => {
  const session = await getAuthSession();
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle className="mr-2" />
            {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader;