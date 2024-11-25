import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom"; // useParams para pegar o parâmetro da URL
import axios from "axios";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const BlogDetail: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { id } = useParams<{ id: string }>(); // Pega o parâmetro id da URL

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://project-hub-api.vercel.app/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details", error);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (!blog) {
    return (
      <Container sx={{ backgroundColor: "var(--color-background)", py: 5 }}>
        <Typography variant="h5" color="error" align="center">
          Carregando o blog...
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5, backgroundColor: "var(--color-background)" }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "var(--color-text)" }}>
        {blog.title}
      </Typography>
      <Box sx={{ mb: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }}>
          Autor: {blog.author}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 4, color: "var(--color-text)" }}>
        {blog.content}
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{
            backgroundColor: "var(--color-button)",
            "&:hover": {
              backgroundColor: "var(--color-button-hover)",
            },
          }}
        >
          Voltar para a lista
        </Button>
      </Box>
    </Container>
  );
};

export default BlogDetail;
