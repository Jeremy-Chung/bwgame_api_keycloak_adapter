# Keycloak Adapter Bypass

This is a mock implementation of the bw-game-api-keycloak-adapter that bypasses actual Keycloak authentication.

## Usage

Copy this directory to your VM and rename it:

```bash
# On your local machine
cd /mnt/c/Users/User/source/repos/bw/history/
tar -czf bwgame_api_keycloak_adapter_bypass.tar.gz bwgame_api_keycloak_adapter_bypass/

# Transfer to VM (example)
scp bwgame_api_keycloak_adapter_bypass.tar.gz jenkins@192.168.0.236:/home/jenkins/

# On the VM
cd /home/jenkins/
tar -xzf bwgame_api_keycloak_adapter_bypass.tar.gz

# Backup original and replace
cd /home/jenkins/bw_history/deps/
mv bwgame_api_keycloak_adapter bwgame_api_keycloak_adapter_original
mv /home/jenkins/bwgame_api_keycloak_adapter_bypass bwgame_api_keycloak_adapter
```

## What it does

1. **init**: Initializes a mock passport object
2. **checkRealm**: Sets the realm from the URL parameter
3. **checkAuth**: Creates a mock user object using the accountId from query parameters

## Mock User Object

The checkAuth middleware creates a user object with:
- `accountId`: From query parameter or default
- `sub`: Same as accountId (JWT subject)
- `preferred_username`: Same as accountId
- `email`: Mock email
- `realm`: From URL or default

This allows the history API to work without actual Keycloak authentication.