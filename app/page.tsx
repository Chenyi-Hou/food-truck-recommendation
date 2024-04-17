import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LuckyLink from "@/components/root/luckLink";
export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] sm:pt-0 pt-16">
      <main className="flex-1">
        <section className="w-full ">
          <div className="relative overflow-hidden">
            <img
              alt="Hero"
              className="w-full aspect-[2/1] object-cover object-center opacity-50 mix-blend-multiply"
              src="/landingbanner.jpg"
            />
            <div className="absolute inset-0 flex items-center justify-center mix-blend-multiply">
              <div className="grid gap-4 px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Find the best food trucks
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Search for your favorite dishes on wheels with our app.
                </p>
                <LuckyLink></LuckyLink>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Featured Food Trucks
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Discover the best mobile kitchens near you. Here are some of the
                top-rated food trucks.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <div className="relative group overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Food Truck"
                  className="absolute inset-0 object-cover object-center group-hover:scale-105 group-hover:transition-transform transition-transform"
                  src="/placeholder.svg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline">View</Button>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Food Truck"
                  className="absolute inset-0 object-cover object-center group-hover:scale-105 group-hover:transition-transform transition-transform"
                  src="/placeholder.svg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline">View</Button>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-square">
                <img
                  alt="Food Truck"
                  className="absolute inset-0 object-cover object-center group-hover:scale-105 group-hover:transition-transform transition-transform"
                  src="/placeholder.svg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline">View</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
