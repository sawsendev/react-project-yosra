#Get a redhat base image
FROM registry.gitlab.com/sib-group/niceroom/fo/build:releasebase

WORKDIR /app
COPY ./build /usr/share/nginx/html
