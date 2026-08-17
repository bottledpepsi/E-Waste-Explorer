/** @type {import('next').NextConfig} */

// For GitHub Pages project sites the app is served from
// https://<user>.github.io/<repo>/ , so it needs a base path.
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>".
// Leave it empty for a user/org site (<user>.github.io) or local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  // Emit a fully static site into ./out that GitHub Pages can serve.
  output: 'export',
  // GitHub Pages serves each route as a folder with an index.html.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
