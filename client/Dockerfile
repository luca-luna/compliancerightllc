# Use the official Node.js image as the base image for the frontend
FROM node:14-alpine

# Set the working directory for the frontend
WORKDIR /app/client

# Copy the package.json and package-lock.json files to the container for the frontend
COPY package*.json ./

# Install dependencies for the frontend
RUN npm install

# Copy the application code to the container for the frontend
COPY . .

# Build the frontend
RUN npm run build

# Expose the port for the frontend
EXPOSE 3000

# Start the frontend
CMD ["npm", "start"]