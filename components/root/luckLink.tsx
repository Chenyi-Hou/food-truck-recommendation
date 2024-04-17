"use client";

import { useCallback } from "react";
import { Button } from "../ui/button";
import { getRandom } from "@/app/_actions";

export default async function Component() {
  const redirect = useCallback(() => getRandom(), []);
  return (
    <Button
      className="flex max-w-sm mx-auto space-x-2"
      onClick={redirect}
      type="submit"
    >
      I&apos;m Feeling Lucky
    </Button>
  );
}
