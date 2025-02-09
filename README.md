# Rolldown CJS exports bug

This is a bug I uncovered when attempting to compile `prettier-plugin-tailwindcss` with Rolldown. I discovered this bug in `1.0.0-beta.3` but have confirmed that it still exists in the latest canary build (`1.0.0-beta.3-commit.a884059`).

I've included two examples here:
- `minimal` - A minimal example that demonstrates the issue
- `tailwind` - An example that demonstrates the issue (still reduced) in the context that I discovered it — requiring Tailwind CSS internals

## Environment

- MacBook Pro 16", Nov 2023
- Apple M3 Max
- 64GB RAM
- macOS 15.3
- zsh 5.9 (arm64-apple-darwin24.0)
- Node 22.12.0 (also tested v23.6.0)
- npm 10.9.2

## Steps

1. Clone the repo
2. `npm install`
3. `npm run run-built:minimal`

## Notes

There's a few scripts that you can use to test the issue:
- `npm run build` - Builds both examples with Rolldown
- `npm run run-direct:minimal` - Directly runs the minimal example
- `npm run run-direct:tailwind` - Directly runs the Tailwind-using example
- `npm run run-built:minimal` - Builds then runs the minimal example
- `npm run run-built:tailwind` - Builds then runs the Tailwind-using example
