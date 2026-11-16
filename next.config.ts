import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here extend this to allow deploy*/

  // The technical documentation is a standalone page in public/docs/index.html.
  // Next.js does not serve a folder's index.html on its own, so /docs is pointed at it.
  async rewrites() {
    return [{ source: "/docs", destination: "/docs/index.html" }];
  },
};

export default nextConfig;
