#!/bin/sh

# Set the -e flag to stop running the script in case a command returns
# a nonzero exit code.
set -e

# Generate files per swagger.json
swagger-codegen generate -i http://localhost:8000/openapi.json -l typescript-axios -o ./tmp-swagger

# Copy them over to generated models directory
mv ./tmp-swagger/models/*.ts ./src/models/generated/

# Remove the tmp contents
rm -rf ./tmp-swagger
