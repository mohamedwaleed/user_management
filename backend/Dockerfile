FROM node
ENV DATABASE_CONNECTION_URL ""
ENV NODE_ENV "production"
RUN mkdir /home/backend
COPY . /home/backend
COPY start.sh /home
WORKDIR /home/backend
RUN chmod 777 -R /home/backend \
	&& chmod 777  /home/start.sh \
	&& apt-get update \
	&& apt-get install -y mysql-client \
	&& npm install -g npm@4.6.1 \
	&& npm install
EXPOSE 3000
ENTRYPOINT ["/home/start.sh"]
