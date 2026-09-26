import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
    // Framework default is 300s; controls x-nextjs-stale-time for static routes
    staleTimes: {
      static: 0, // 0 seconds
    },
  },
  // Prevent Turbopack from picking up lockfiles outside this project (e.g. ~/.Trash)
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  // Add these for better dev performance
  webpack: (config, { dev }) => {
    if (dev) {
      // Optimize file watching
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay rebuild after first change
        ignored: ['**/node_modules', '**/.next', '**/out', '**/.git'],
      }
    }
    return config
  },
}

export default nextConfig
