echo "> StoreManager front deploy success!"
echo "> Start StoreManager..."

cd store-manager-fe/
sudo yarn install
sudo pm2 start --interpreter $(which node) yarn -- start

echo "> End Startiing StoreManager..."