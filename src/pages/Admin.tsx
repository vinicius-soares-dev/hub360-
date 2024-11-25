import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  DialogContentText,
} from '@mui/material';
import { Add, Edit, Delete, Visibility } from '@mui/icons-material';
import axios from 'axios';


// Define the blog type
interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
}

const AdminBlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [viewBlogOpen, setViewBlogOpen] = useState(false); // State for viewing blog details
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [formValues, setFormValues] = useState({ title: '', content: '', author: '' });

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://project-hub-api.vercel.app/');
      if (Array.isArray(response.data)) {
        setBlogs(response.data);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      setBlogs([]);
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSaveBlog = async () => {
    try {
      if (selectedBlog) {
        await axios.put(`https://project-hub-api.vercel.app/${selectedBlog._id}`, formValues);
      } else {
        await axios.post('https://project-hub-api.vercel.app/', formValues);
      }
      fetchBlogs();
      setDialogOpen(false);
      setFormValues({ title: '', content: '', author: '' });
      setSelectedBlog(null);
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const handleEdit = (blog: Blog) => {
    setSelectedBlog(blog);
    setFormValues(blog);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://project-hub-api.vercel.app/${id}`);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleViewBlog = (blog: Blog) => {
    setSelectedBlog(blog);
    setViewBlogOpen(true);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: 'var(--color-background)' }}>
      <Typography variant="h4" sx={{ marginBottom: 2, color: 'var(--color-text)' }}>
        Blog Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={() => setDialogOpen(true)}
        sx={{
          marginBottom: 4,
          backgroundColor: 'var(--color-button)',
          '&:hover': { backgroundColor: 'var(--color-button-hover)' },
        }}
      >
        Create New Blog
      </Button>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {blogs.map((blog: Blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog._id}>
              <Card
                sx={{
                  position: 'relative',
                  backgroundColor: 'var(--color-box)',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: 'var(--color-text)', fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1, marginBottom: 2 }}>
                    {blog.content.slice(0, 100)}...
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    By {blog.author}
                  </Typography>
                </CardContent>
                <CardActions sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                  <IconButton color="primary" onClick={() => handleEdit(blog)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(blog._id)}>
                    <Delete />
                  </IconButton>
                  <IconButton color="default" onClick={() => handleViewBlog(blog)}>
                    <Visibility />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Dialog for Create/Edit Blog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedBlog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            name="content"
            value={formValues.content}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Author"
            name="author"
            value={formValues.author}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveBlog} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal to View Blog Details */}
      <Dialog open={viewBlogOpen} onClose={() => setViewBlogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedBlog?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'var(--color-text)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Author: {selectedBlog?.author}</Typography>
            <Typography variant="body1">{selectedBlog?.content}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewBlogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminBlogPage;
