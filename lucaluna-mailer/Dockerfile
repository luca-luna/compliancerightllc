# Use the official Node.js image as the base image for the server
FROM node:14-alpine

# Set the working directory for the server
WORKDIR /app/lucaluna-mailer

# Copy the package.json and package-lock.json files to the container for the server
COPY package*.json ./

# Install dependencies for the server
RUN npm install

# Copy the application code to the container for the server
COPY . .

# Expose the port for the server
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
