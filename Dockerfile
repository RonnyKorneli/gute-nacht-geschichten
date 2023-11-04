
# Use a specific version of node based on your project requirements
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies, including `json-server` if it is not in package.json
RUN npm install
RUN npm install -g json-server

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Expose the port for json-server if it's going to run on a different port
EXPOSE 4000

# Run both your application and json-server using a command runner like `concurrently`
CMD ["sh", "-c", "npm run dev & json-server --watch db.json --port 4000"]
