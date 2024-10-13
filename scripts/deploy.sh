echo "> StoreManager front deploy success!"
echo "> Start StoreManager..."

cd /home/ubuntu/store-manager-fe/
if pm2 list | grep -q "store-manager"; then
    echo "Application is running. Reloading start..."
    pm2 reload store-manager
else
  echo "Application is not running. Start Appllication..."
  pm2 serve --name store-manager build 3000 --spa
fi

echo "> End Starting StoreManager..."