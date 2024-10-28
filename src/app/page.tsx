import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center  border-black border-b-2 bg-white text-black dark:bg-black px-8 py-4 shadow-md">
  {/* Logo on the Left */}
  <div className="mr-auto">
   <Link href={'/'}>
   <Image
      src="/next-auth.png" // Update with your actual logo path
      className="rounded-full"
      alt="Next.js Logo"
      width={60}
      height={60}
      
    />
   </Link>
  </div>

  {/* Navigation Buttons on the Right */}
  <nav className="ml-auto flex gap-4 text-sm sm:text-base ">
    <Link href="/signup">
      <button className="px-4 py-2 bg-yellow-400 font-bold text-black rounded-lg border-2  border-b-4 border-r-4 duration-200 border-black ">
        Signup
      </button>
    </Link>
    <Link href="/login">
      <button className="px-4 py-2 bg-[#37ae92] font-bold text-black rounded-lg border-2  border-b-4 border-r-4 duration-200 border-black  ">
        Login
      </button>
    </Link>
    <a
      href="https://github.com/SaiCharanReddyPuligari/next-auth"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="px-4 py-2 bg-violet-400 font-bold text-black rounded-lg border-2  border-b-4 border-r-4 duration-200 border-black ">
        GitHub
      </button>
    </a>
  </nav>
</header>


      {/* Main Content */}
      <main className="grid grid-rows-[1fr_20px] items-center justify-items-center gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* Landing Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
          {/* Left Side (Image) */}
          <div className="flex justify-center">
            <Image
              src="/next-auth.png"
              alt="Next.js logo"
              width={300}
              height={300}
              priority
              className="rounded-full"
            />
          </div>

          {/* Right Side (Text) */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <p className="text-lg sm:text-xl leading-relaxed text-black font-serif">
              This is a autorization website, which adds a user to the database (MongoBD) and verifies the user with the help of NodeMailer (MailTrap). The idea is to Signup users, send them a vefification email, and give them the website access. 
            </p>
          </div>
        </section>

        {/* Links Section */}
        <footer className="row-start-2 flex gap-6 flex-wrap items-center justify-center text-black font-bold border-black border-2 rounded p-2">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:reddysaicharan12345@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/gmail.svg" alt="File icon" width={16} height={16} />
            Email
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.leetcode.com/saicharanreddypuligari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/leetcode.svg" alt="File icon" width={16} height={16} />
            Leetcode
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://twitter.com/redysaicharan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/twitter.svg" alt="Window icon" width={16} height={16} />
            Twitter
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://linkedin.com/in/psaicharanreddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/linkedin.svg" alt="Globe icon" width={16} height={16} />
            LinkedIn
          </a>
        </footer>
      </main>
    </div>
  );
}
