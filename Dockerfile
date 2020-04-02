RUN echo 'npm client ci'
WORKDIR '/client/'
RUN echo "$PWD"
RUN npm ci
WORKDIR '/server/'
RUN echo "$PWD"
RUN echo 'npm server ci'
RUN npm ci
