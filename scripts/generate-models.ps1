# Generate files per swagger.json
java -jar ../swagger-codegen-cli.jar generate -i http://localhost:8000/openapi.json -l typescript-axios -o ./tmp-swagger

# Remove existing generated TypeScript files
Remove-Item ./src/data/_generated/*.ts

# Copy generated files to the models directory
Move-Item ./tmp-swagger/models/*.ts ./src/data/_generated/

# Remove the tmp contents
Remove-Item -Recurse ./tmp-swagger