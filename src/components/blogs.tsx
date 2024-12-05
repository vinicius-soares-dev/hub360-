import React, { useEffect, useState } from "react";
import { Container, Card, CardContent, Typography, Button, Grid, Box, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Controla quantos blogs são exibidos

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://project-hub-api.vercel.app/");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      }
    };

    fetchBlogs();
  }, []);

  const loadMoreBlogs = () => setVisibleBlogs((prev) => prev + 6);

  const stringToColor = (string: string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 50%, 70%)`;
    return color;
  };

  return (
    <Container sx={{ py: 5, backgroundColor: "var(--color-background)"}} id="section-04">
      {/* Título do Blog */}
      <Box
        sx={{
          mb: 4,
          textAlign: "center",
          py: 2,
          borderRadius: "16px",
          backgroundColor: "var(--color-section)",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "var(--color-text)",
            fontFamily: "var(--font-main)",
            fontWeight: "bold",
          }}
        >
          Blog
        </Typography>
      </Box>
      {/* Lista de Blogs */}
      <Grid container spacing={4}>
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                boxShadow: 4,
                backgroundImage: "linear-gradient(135deg, #f7f7f7, var(--color-box))",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardContent>
                {/* Avatar e Autor */}
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      backgroundColor: stringToColor(blog.author),
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#fff",
                      boxShadow: 2,
                      border: "2px solid var(--color-section)",
                    }}
                  >
                    {blog.author.slice(0, 1).toUpperCase()}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }}>
                    {blog.author}
                  </Typography>
                </Box>
                {/* Título e Conteúdo */}
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: "var(--color-text)",
                    fontFamily: "var(--font-main)",
                    fontWeight: "bold",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    fontFamily: "var(--font-main)",
                    lineHeight: "1.6",
                    color: "rgba(0, 0, 0, 0.7)",
                    textAlign: "justify",
                  }}
                >
                  {blog.content.length > 100 ? `${blog.content.slice(0, 100)}...` : blog.content}
                </Typography>
                {/* Botão Ver completo */}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    component={Link}
                    to={`/blog/${blog._id}`}
                    variant="contained"
                    sx={{
                      backgroundColor: "var(--color-button)",
                      "&:hover": {
                        backgroundColor: "var(--color-button-hover)",
                      },
                      color: "#fff",
                      fontFamily: "var(--font-main)",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    Ver completo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Botão Carregar Mais */}
      {visibleBlogs < blogs.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            onClick={loadMoreBlogs}
            variant="contained"
            sx={{
              backgroundColor: "var(--color-button)",
              "&:hover": {
                backgroundColor: "var(--color-button-hover)",
              },
              color: "#fff",
              fontFamily: "var(--font-main)",
              fontWeight: "bold",
              textTransform: "capitalize",
              px: 4,
              py: 1.5,
              borderRadius: "8px",
            }}
          >
            Carregar Mais
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default BlogList;
