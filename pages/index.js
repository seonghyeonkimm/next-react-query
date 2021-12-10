import styles from '../styles/Home.module.css'

import { useQuery } from 'react-query';

async function getPosts() {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    console.log('getPost is called on the server');
  }

  return [
    {
      title: 'Post Title 1',
      content: 'Post Content 1',
    },
    {
      title: 'Post Title 2',
      content: 'Post Content 2',
    },
  ];
}

export default function Home() {
  const { data = [] } = useQuery('posts', getPosts);

  return (
    <div className={styles.container}>
      {data.map(({ title, content }) => {
        return (
          <div key={title}>
            <h4>{title}</h4>
            <p>{content}</p>
          </div>
        )
      })}
    </div>
  )
}
