if [ ${ENV} = "DEV" ]; then 
    yarn start:dev
else
    node ./dist/main.js
fi
