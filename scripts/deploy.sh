echo "> StoreManager front deploy success!"
echo "> Start StoreManager..."

cd /home/ubuntu/store-manager-fe/
sudo npm install -g pm2
sudo yarn install
sudo pm2 start --name store-manager --interpreter $(which node) yarn -- start

echo "> End Startiing StoreManager..."