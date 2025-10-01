FROM node:lts-alpine AS build

# Configs
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Work directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependencies file
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# App build
RUN pnpm build

# -------------------------
# Caddy
# -------------------------
FROM caddy:alpine

# Work directory
WORKDIR /app

# Copy Caddyfile
COPY Caddyfile ./
RUN caddy fmt Caddyfile --overwrite

# Copy files generated from build
COPY --from=build /app/dist ./dist

# Serve with Caddy
CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]