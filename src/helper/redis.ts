const upstashRedisRestUrl =process.env.UPSTASH_URL;
const authToken =process.env.UPSTASH_TOKEN; 

type Command = "smembers"  | "sismember" | "get" | "zrange"

export async function fetchredis(command: Command, ...args: (string | number)[]) {
  const url = `https://concise-llama-54610.upstash.io/${command}/${args.join("/")}`;

  const response = await fetch(url,{
    headers: {
      Authorization: `Bearer AdVSAAIjcDE3YTdhZjExZWY2N2E0NDExYjgyOGEwZTE4NWFkNzUxM3AxMA`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`error while executing my redis commands: ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}
