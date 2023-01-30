import { useGetPostListAsync } from "./hooks/useGetPostListAsync";

export const PostList = () => {
  const { posts } = useGetPostListAsync();

  return (
    <div>
      {posts.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}