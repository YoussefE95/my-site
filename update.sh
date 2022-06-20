git pull

cd api/lotr/ && npm install
cp sample.config.json config.json
cd ../../client && npm install && npm run build
sudo cp -r dist/* /var/www/html/client/
cd ../server && npm install
cp sample.config.json config.json