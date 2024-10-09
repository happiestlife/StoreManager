echo "> StoreManager front deploy success!"
echo "> Start StoreManager..."

cd /home/ubuntu/store-manager-fe/
npm install -g pm2
yarn install
pm2 start yarn --name store-manager --interpreter $(which node) --cwd /home/ubuntu/store-manager-fe -- start

echo "> End Startiing StoreManager..."