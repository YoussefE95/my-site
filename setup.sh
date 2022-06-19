sudo apt update && sudo apt upgrade
sudo apt install nodejs npm nginx

cd api/lotr/ && npm install
cp sample.config.json config.json
cd ../../client && npm install && npm run build
cd ../server && npm install
cp sample.config.json config.json

# sudo systemctl restart nginx
# sudo systemctl enable nginx
# sudo ufw allow 'Nginx Full'