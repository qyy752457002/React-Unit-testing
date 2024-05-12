import { useEffect, useState } from "react";

const Async = () => {
  // 声明一个状态变量，用来存储帖子数据
  const [posts, setPosts] = useState([]);

  // 使用useEffect来处理异步请求
  useEffect(() => {
    // 发送一个异步请求，从https://jsonplaceholder.typicode.com/posts获取数据
    fetch("https://jsonplaceholder.typicode.com/posts")
      // 请求成功后，将数据赋值给posts状态变量
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // 返回一个包含帖子的列表
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
