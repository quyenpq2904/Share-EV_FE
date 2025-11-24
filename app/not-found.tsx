"use client";

import { Button, Link } from "@heroui/react";
import NextLink from "next/link";

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background ">
      <div className="text-center">
        <p className="text-base font-semibold text-foreground">404</p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          Page not found
        </h1>

        <p className="mt-6 text-lg font-medium text-gray-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            as={NextLink}
            href="/"
            color="primary"
            variant="solid"
            className="font-semibold shadow-sm"
          >
            Go back home
          </Button>

          <Link as={NextLink} href="/contact" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
export default NotFoundPage;
