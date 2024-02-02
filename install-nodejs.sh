#!bin/bash

# WARNING: This can't actually be used as a standalone bash script
# Consider this as just a record of the commands to run in CLI

# Should probably first update and upgrade (because why not?)
sudo apt update
sudo apt upgrade

# Install cURL
sudo apt install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# From here, need to exit bash and reopen another terminal
nvm -v
# As of 2/1, 0.39.3
nvm install 20
nvm use 20
node -v
# As of 2/1, v20.11.0