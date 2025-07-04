import React from 'react';
import Card from './Card';

const dummyBlogs = [
  { title: 'Tips Belajar React untuk Pemula', date: '2025-06-01', desc: 'Panduan singkat dan tips belajar React JS dari nol.' },
  { title: 'Mengelola Proyek IT dengan Efektif', date: '2025-05-20', desc: 'Strategi dan tools untuk manajemen proyek IT.' },
];

const BlogSection = ({ isActive }) => (
  <section id="blog" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
      <h2>Blog</h2>
      <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
        {dummyBlogs.map((blog, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: 0 }}>{blog.title}</h4>
            <small>{blog.date}</small>
            <p style={{ margin: 0 }}>{blog.desc}</p>
          </li>
        ))}
      </ul>
    </Card>
  </section>
);

export default BlogSection;
