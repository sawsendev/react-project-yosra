FROM registry.access.redhat.com/ubi8

WORKDIR /app

EXPOSE 80
EXPOSE 8443

ENV NAME=nginx \
    NGINX_VERSION=1.18 \
    NGINX_SHORT_VER=118 \
    VERSION=0

ENV SUMMARY="Platform for running nginx $NGINX_VERSION or building nginx-based application" \
    DESCRIPTION="Nginx is a web server and a reverse proxy server for HTTP, SMTP, POP3 and IMAP \
    protocols, with a strong focus on high concurrency, performance and low memory usage. The container \
    image provides a containerized packaging of the nginx $NGINX_VERSION daemon. The image can be used \
    as a base image for other applications based on nginx $NGINX_VERSION web server. \
    Nginx server image can be extended using source-to-image tool."

LABEL summary="${SUMMARY}" \
    description="${DESCRIPTION}" \
    io.k8s.description="${DESCRIPTION}" \
    io.k8s.display-name="Nginx ${NGINX_VERSION}" \
    io.openshift.expose-services="80:http" \
    io.openshift.expose-services="8443:https" \
    io.openshift.tags="builder,${NAME},${NAME}-${NGINX_SHORT_VER}" \
    com.redhat.component="${NAME}-${NGINX_SHORT_VER}-container" \
    name="ubi8/${NAME}-${NGINX_SHORT_VER}" \
    version="1" \
    com.redhat.license_terms="https://www.redhat.com/en/about/red-hat-end-user-license-agreements#UBI" \
    maintainer="SoftwareCollections.org <sclorg@redhat.com>" \
    help="For more information visit https://github.com/sclorg/${NAME}-container" \
    usage="s2i build <SOURCE-REPOSITORY> ubi8/${NAME}-${NGINX_SHORT_VER}:latest <APP-NAME>"

ENV NGINX_CONFIGURATION_PATH=${APP_ROOT}/etc/nginx.d \
    NGINX_CONF_PATH=/etc/nginx/nginx.conf \
    NGINX_DEFAULT_CONF_PATH=${APP_ROOT}/etc/nginx.default.d \
    NGINX_CONTAINER_SCRIPTS_PATH=/usr/share/container-scripts/nginx \
    NGINX_APP_ROOT=${APP_ROOT} \
    NGINX_LOG_PATH=/var/log/nginx \
    NGINX_PERL_MODULE_PATH=${APP_ROOT}/etc/perl

RUN yum -y module enable nginx:$NGINX_VERSION && \
    INSTALL_PKGS="nss_wrapper bind-utils gettext hostname nginx nginx-mod-stream nginx-mod-http-perl" && \
    yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS && \
    rpm -V $INSTALL_PKGS && \
    yum -y clean all --enablerepo='*'

# Not using VOLUME statement since it's not working in OpenShift Online:
# https://github.com/sclorg/httpd-container/issues/30
# VOLUME ["/usr/share/nginx/html"]
# VOLUME ["/var/log/nginx/"]


# new
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]