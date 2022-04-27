#
# Dockerfile for json-server
#

FROM debian:stable-slim

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs

RUN npm install -g json-server json-server-auth

WORKDIR /data

EXPOSE 3000

ENTRYPOINT ["json-server"]
CMD ["--help"]
