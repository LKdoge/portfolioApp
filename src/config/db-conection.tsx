import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

interface IPost {
  title: string;
  content: string;
}

async function getData() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM posts');
    return rows;
  } finally {
    client.release();
  }
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      {data.map((post : IPost, index: number) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}