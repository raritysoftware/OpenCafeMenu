# Use a lightweight Bun image as the base
FROM oven/bun:1.0.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and bun.lockb to the working directory
COPY package.json bun.lock /app/

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code to the working directory
COPY . /app

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "start"]
