FROM node:14-alpine

WORKDIR /usr/app

RUN apk add openssh \
  && echo "root:Docker!" | chpasswd
RUN rm -f /etc/ssh/sshd_config
COPY sshd_config /etc/ssh/
RUN ssh-keygen -f /etc/ssh/ssh_host_rsa_key -N '' -t rsa

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000 2222

CMD /usr/sbin/sshd -D & yarn start:prod