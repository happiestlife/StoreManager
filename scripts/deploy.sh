echo "> StoreManager front deploy success!"
echo "> Start StoreManager..."

cd store-manager-fe/
yarn install
pm2 start --interpreter $(which node) yarn -- start

echo "> End StoreManager..."