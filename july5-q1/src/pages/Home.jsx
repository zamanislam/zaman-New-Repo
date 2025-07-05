import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Input, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4}>
      <Input
        placeholder="Search by title..."
        mb={4}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Stack spacing={4}>
        {filteredPosts.map(post => (
          <Box key={post.id} p={4} border="1px solid gray" borderRadius="md">
            <Link to={`/post/${post.id}`}>
              <Text fontSize="xl" fontWeight="bold">
                {post.title}
              </Text>
            </Link>
            <Text>{post.body.substring(0, 100)}...</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
