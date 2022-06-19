sudo apt update && sudo apt upgrade
sudo apt install nodejs npm serve nginx

cd api/lotr/ && npm install
cp sample.config.json config.json
cd ../../client && npm install && npm run build
cd ../server && npm install
cp sample.config.json config.json

sudo unlink /etc/nginx/sites-available/default
sudo cp mysite.config /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/mysite.config /etc/nginx/sites-enabled/
sudo systemctl restart nginx
sudo systemctl enable nginx
sudo ufw allow 'Nginx Full'