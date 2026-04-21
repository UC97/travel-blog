# Use Node base image

FROM node:18

# Set working directory

WORKDIR /app

# Copy package files

COPY package*.json ./

# Install dependencies

RUN npm install

# Copy rest of the code

COPY . .

# EXpose port

EXPOSE 3000

# Start the react app

CMD ["npm", "start"]

# Use Node base image

# Use Node base image

