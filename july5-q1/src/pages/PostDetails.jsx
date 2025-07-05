import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Tag, Wrap } from "@chakra-ui/react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <Text>Loading...</Text>;

  return (
    <Box p={4}>
      <Text fontSize="2xl" fontWeight="bold">{post.title}</Text>
      <Text mt={2}>{post.body}</Text>

      <Text mt={4} fontWeight="bold">Tags:</Text>
      <Wrap mt={2}>
        {post.tags.map((tag, idx) => (
          <Tag key={idx} colorScheme="blue">{tag}</Tag>
        ))}
      </Wrap>
    </Box>
  );
};

export default PostDetails;
