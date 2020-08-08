docker build -t future:dev .

docker run \
 -it \
 --rm \
 -v /home/rauf/future:/app \
 -v /app/node_modules \
 -p 3001:3000 \
 -e CHOKIDAR_USEPOLLING=true \
 future:dev
