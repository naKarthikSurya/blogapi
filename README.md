<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Blog API

A robust RESTful API for blog management built with NestJS, featuring user authentication, profile management, and secure endpoints.

## 🚀 Features

- **User Authentication**: JWT-based authentication with registration and login
- **User Profile Management**: Update user profiles with validation
- **Database Integration**: MySQL database with TypeORM
- **Security**: Password hashing with bcrypt, JWT tokens
- **Validation**: Request validation using class-validator
- **Docker Support**: Easy deployment with Docker Compose
- **Environment Configuration**: Flexible configuration management

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Database**: MySQL 8.0 with TypeORM
- **Authentication**: JWT with Passport.js
- **Password Hashing**: bcryptjs
- **Validation**: class-validator & class-transformer
- **Containerization**: Docker & Docker Compose
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose (for database)
- MySQL (if running locally without Docker)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd blogapi
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Database Configuration
MYSQL_ROOT_PASSWORD=your_root_password
MYSQL_DATABASE=blog_api
MYSQL_USER=blog_user
MYSQL_PASSWORD=your_password
MYSQL_PORT=3306

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Application Configuration
PORT=4000
NODE_ENV=development
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Database

Using Docker Compose (recommended):

```bash
docker-compose up -d
```

Or start MySQL manually if you have it installed locally.

### 5. Run the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

The API will be available at `http://localhost:4000/api`

## 📚 API Documentation

### Base URL
```
http://localhost:4000/api
```

### Authentication Endpoints

#### Register User
```http
POST /users
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Login User
```http
POST /users/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### User Profile Endpoints

#### Get Current User Profile
```http
GET /user
Authorization: Bearer <access_token>
```

#### Update User Profile
```http
PUT /user
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "email": "newemail@example.com",
  "bio": "Updated bio information"
}
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run start:dev          # Start in watch mode
npm run start:debug        # Start in debug mode

# Production
npm run build             # Build the application
npm run start:prod        # Start production server

# Testing
npm run test              # Run unit tests
npm run test:watch        # Run tests in watch mode
npm run test:cov          # Run tests with coverage
npm run test:e2e          # Run end-to-end tests

# Code Quality
npm run lint              # Run ESLint
npm run format            # Format code with Prettier
```

### Project Structure

```
src/
├── auth/                 # Authentication module
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── jwt.strategy.ts
│   └── user.decorator.ts
├── entity/              # Database entities
│   ├── abstract.entity.ts
│   └── user.entity.ts
├── models/              # Data transfer objects
│   └── user.model.ts
├── users/               # User management module
│   ├── profile.controller.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.controller.ts    # Main application controller
├── app.module.ts        # Root module
├── app.service.ts       # Application service
├── database.connection.ts # Database configuration
└── main.ts             # Application entry point
```

## 🐳 Docker Deployment

### Using Docker Compose

1. **Start the entire stack:**
```bash
docker-compose up -d
```

2. **View logs:**
```bash
docker-compose logs -f
```

3. **Stop the stack:**
```bash
docker-compose down
```

### Database Management

- **Access MySQL container:**
```bash
docker exec -it mysql_container mysql -u root -p
```

- **View database logs:**
```bash
docker-compose logs mysql_db
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: All inputs are validated using class-validator
- **SQL Injection Protection**: TypeORM provides protection against SQL injection
- **Environment Variables**: Sensitive data stored in environment variables

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:cov

# Run end-to-end tests
npm run test:e2e
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Application port | `4000` |
| `NODE_ENV` | Environment mode | `development` |
| `MYSQL_ROOT_PASSWORD` | MySQL root password | - |
| `MYSQL_DATABASE` | Database name | `blog_api` |
| `MYSQL_USER` | Database user | `blog_user` |
| `MYSQL_PASSWORD` | Database password | - |
| `MYSQL_PORT` | MySQL port | `3306` |
| `JWT_SECRET` | JWT secret key | - |
| `JWT_EXPIRES_IN` | JWT expiration time | `24h` |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [NestJS Documentation](https://docs.nestjs.com/)
2. Search existing issues in the repository
3. Create a new issue with detailed information

## 🔗 Useful Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- [JWT.io](https://jwt.io/) - JWT token debugger
- [Docker Documentation](https://docs.docker.com/)

---

Built with ❤️ using NestJS
