import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const BlogDetail: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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
    <>
      {/* Header para o BlogDetail */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "var(--color-button)", mb: 3 }}
        elevation={1}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={() => navigate("/")} // Voltar para a página principal
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-main)",
              fontWeight: "bold",
              color: "white",
            }}
          >
            HUB360+ Blog
          </Typography>
          <Box /> {/* Placeholder para alinhar o botão ao centro */}
        </Toolbar>
      </AppBar>

      {/* Corpo do BlogDetail */}
      <Container
        sx={{
          py: 5,
          px: { xs: 2, sm: 4, md: 6 },
          backgroundColor: "var(--color-background)",
          maxWidth: "900px",
        }}
      >
        {/* Título */}
        <Box sx={{ mb: 4 }}>
          <Divider sx={{ mb: 2, borderColor: "rgba(0, 0, 0, 0.1)" }} />
          <Typography
            variant="h3"
            align="center"
            sx={{
              mb: 2,
              fontFamily: "var(--font-main)",
              fontWeight: "bold",
              color: "var(--color-text)",
              fontVariant: "small-caps"
            }}
          >
            {blog.title}
          </Typography>
          <Divider sx={{ mt: 2, borderColor: "rgba(0, 0, 0, 0.1)" }} />
        </Box>

        {/* Autor */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            fontFamily: "'Merriweather', serif",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontStyle: "italic",
              fontWeight: 500,
              color: "rgba(0, 0, 0, 0.7)",
            }}
          >
            Autor:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "var(--color-text)",
            }}
          >
            {blog.author}
          </Typography>
        </Box>

        {/* Conteúdo */}
        <Box
          sx={{
            fontFamily: "'Merriweather', serif",
            fontSize: "1.125rem",
            lineHeight: 1.8,
            textAlign: "justify",
            textIndent: "2rem",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          {blog.content.split("\n").map((paragraph, index) => (
            <Typography key={index} paragraph>
              {paragraph}
            </Typography>
          ))}
        </Box>

        {/* Botão de Voltar */}
        <Box sx={{ textAlign: "center", mt: 5 }}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              fontFamily: "'Merriweather', serif",
              fontSize: "1rem",
              px: 3,
              py: 1,
              backgroundColor: "var(--color-button)",
              color: "#fff",
              borderRadius: "8px",
              textTransform: "none",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "var(--color-button-hover)",
                transform: "scale(1.05)",
              },
            }}
          >
            Voltar para a lista
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default BlogDetail;
