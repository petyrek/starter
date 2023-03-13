#!/bin/bash

# Generate files per swagger.json
swagger-codegen generate -i http://localhost:8000/openapi.json -l typescript-axios -o ./tmp-swagger

rm ./src/data/_generated/*.ts

# Copy them over to generated models directory
mv ./tmp-swagger/models/*.ts ./src/data/_generated/

# Remove the tmp contents
rm -rf ./tmp-swagger
