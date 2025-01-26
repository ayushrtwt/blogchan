# Blogchan

**Blogchan** is a blogging platform that allows users to sign in, upload blogs, and share their thoughts with the world. Built with cutting-edge technologies, Blogchan offers a seamless experience for writers and readers alike.

## Preview

Here are some screenshots of the project:

### User Authentication
![Screenshot from 2025-01-26 22-42-21](https://github.com/user-attachments/assets/effca7d3-928b-469b-83c2-4a4d11941597)
![Screenshot from 2025-01-26 22-42-30](https://github.com/user-attachments/assets/b57c3f9f-782d-4acf-b162-70d9dc8c5aa2)

### Blog Page
![Screenshot from 2025-01-26 22-29-26](https://github.com/user-attachments/assets/74ee75d5-2f5a-4b72-952b-c5dbb258c0f8)
![Screenshot from 2025-01-26 22-37-20](https://github.com/user-attachments/assets/b8b261dc-0315-4eb9-831f-f85e9dc4bdc0)

---

## Features

- **User Authentication:** Secure sign-up and login using JWT (JSON Web Tokens).
- **Blog Management:** Users can create, upload, and manage their blogs.
- **Responsive Design:** Built with React for a smooth and responsive user experience.
- **Backend Performance:** Lightning-fast API using Hono and Cloudflare Workers.
- **Data Validation:** Uses Zod for schema validation to ensure data integrity.
- **Database Management:** PostgreSQL with Prisma ORM for efficient data management.
- **Type Safety:** Utilizes TypeScript for robust and maintainable code..

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **TypeScript**: Ensures type safety and better code quality.
- **Tailwind CSS**: For styling and responsive design.

### Backend

- **Hono**: Lightweight web framework for building the backend.
- **Cloudflare Workers**: Serverless execution for scalability and low latency.
- **JWT**: For secure user authentication and session management.
- **Zod**: Schema validation for robust input handling.

### Database

- **Prisma**: ORM for database management.
- **PostgreSQL**: Reliable and powerful relational database.

## Installation

### Prerequisites

- Node.js and npm
- Docker or Aiven (for PostgreSQL setup)
- Cloudflare Workers CLI (if deploying to Cloudflare Workers)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blogchan.git
   cd blogchan
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:
   Create a `.env` file in the root directory and configure the following:

   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/blogchan
   JWT_SECRET=your_secret_key
   ```

4. Run the database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the app at `http://localhost:3000`.
7. Happy blogging! 🚀

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## Acknowledgments

- [React](https://reactjs.org/)
- [Hono](https://hono.dev/)
- [Prisma](https://www.prisma.io/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Zod](https://github.com/colinhacks/zod)
- [PostgreSQL](https://www.postgresql.org/)

