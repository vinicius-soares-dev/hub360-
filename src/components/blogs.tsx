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

  return (
    <Container sx={{ py: 5, backgroundColor: "var(--color-background)" }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "var(--color-text)" }}id="section-04">
        Blog
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: "16px",
              boxShadow: 3,
              backgroundColor: "var(--color-box)",
            }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2} mb={2}>
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Typography variant="h6" fontWeight="bold" sx={{ color: "var(--color-text)" }}>
                    {blog.author}
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ mb: 2, color: "var(--color-text)" }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap sx={{ mb: 2 }}>
                  {blog.content.length > 100 ? `${blog.content.slice(0, 100)}...` : blog.content}
                </Typography>
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
    </Container>
  );
};

export default BlogList;
