import Clientside from "./Clientside";
import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({});
  return (
    <div>
      <p>Server Side - {response}</p>
      <Clientside />
    </div>
  );
}
