#Get a redhat base image
FROM registry.gitlab.com/sib-group/oxton-web-site/react-js/build:releasebase

WORKDIR /app
COPY ./build /usr/share/nginx/html
