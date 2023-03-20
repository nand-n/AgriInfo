# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application to the container
COPY . .

# Build the React app
RUN yarn build

# Serve the app on port 3000
EXPOSE 3000
CMD ["yarn", "start"]