"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function Clientside() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    trpc.hello.query({}).then(setGreeting);
  }, []);

  return <p>Client Side - {greeting}</p>;
}
