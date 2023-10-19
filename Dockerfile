# ------------------
# New tmp image
# ------------------
FROM node:18.18.2-bullseye-slim@sha256:aaf8e7614693cbd226fc9b5c6eb282b377ef3bcd4a05ef198a57989fe3da9b16 AS tmp

# Setup the app WORKDIR
WORKDIR /app/tmp

# Copy and install dependencies separately from the app's code
# To leverage Docker's cache when no dependency has change
COPY package.json ./package.json

COPY package-lock.json  ./

# Install every dependencies
RUN true \
  && npm install

# At this stage we copy back all sources and overwrite package(s).json
# This is expected since we already installed the dependencies we have cached what was important
# At this point nothing can be cached anymore
COPY . /app/tmp

ARG git_hash
ENV GIT_HASH ${git_hash:-dev}
ENV NODE_ENV=production

# Build API
RUN true \
  && npm run build

# Clean src
RUN true \
  && rm -rf src

# Clean dev dependencies
RUN true \
  && npm prune --omit=dev

# ---- Web ----
# Resulting new, minimal image
# This image must have the minimum amount of layers
FROM node:18.18.2-bullseye-slim@sha256:aaf8e7614693cbd226fc9b5c6eb282b377ef3bcd4a05ef198a57989fe3da9b16 as web

ENV PORT=8080
ENV NODE_ENV=production

# Bash is just to be able to log inside the image and have a decent shell
# OpenSSL is here to handle HTTPS requests correctly
RUN true \
  && apt update && apt-get install -y bash curl openssl \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false

# Do not use root to run the app
USER node

WORKDIR /app

COPY --from=tmp --chown=node:node /app/tmp /app

EXPOSE 8080

ENTRYPOINT ["node", "/app/dist/github-action.js"]
