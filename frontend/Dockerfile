FROM node:24-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./

RUN npm install

# Copy application code
COPY . .

# Expose the port the frontend runs on
EXPOSE 5173

# Command to run the frontend development server
CMD ["npm", "run", "dev", "--", "--host"]