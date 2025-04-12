# Use the official Node.js image
FROM node:18-alpine

# Create a user named 'node' and set the home directory
RUN adduser -S -D -h /app appuser node

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Copy package.json and package-lock.json
COPY package*.json ./

# Change ownership of the app directory to the 'node' user
RUN chown -R node:node /app

# Switch to the 'node' user
USER node

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Start the application with Nodemon
# CMD ["npx", "nodemon", "server.js"] 