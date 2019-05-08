# listing
ls -al

#
yarn global add now

# Move now.json into build folder!
cp now.json ./build

# Change Directory into build foler!
cd build

#
cat now.json

# Run now!
npx now --token=$NOW_TOKEN --target production