sudo apt update && sudo apt upgrade
sudo apt install nodejs npm nginx

sudo mkdir /var/www/html/client

cd api/lotr/ && npm install
cp sample.config.json config.json
cd ../../client && npm install && npm run build
sudo cp -r dist/* /var/www/html/client/
cd ../server && npm install
cp sample.config.json config.json

sudo cp start-server.service /etc/systemd/system/
sudo systemctl enable start-server.service
sudo rsync -a default /etc/nginx/sites-available/default
sudo systemctl restart nginx
sudo systemctl enable nginx
sudo ufw allow 'Nginx Full'