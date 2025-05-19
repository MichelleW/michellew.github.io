import React, { useState } from 'react';
import BlogPost from './BlogPost';
import './Blog.css';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 'ux-engineering',
            title: 'UX Engineering Best Practices: Bridging Design and Code',
            date: 'March 2024',
            excerpt: 'Exploring the intersection of design systems and frontend architecture.',
            url: '/blog-posts/ux-engineering-best-practices.md'
        },
        {
            id: 'accessibility',
            title: 'Building Accessible Components',
            date: 'February 2024',
            excerpt: 'A deep dive into creating inclusive web experiences.',
            url: '/blog-posts/building-accessible-components.md'
        },
        {
            id: 'design-system',
            title: 'Design Systems in Practice: How UX Engineers Drive Consistency',
            date: 'January 2024',
            excerpt: 'Creating scalable and maintainable design systems.',
            url: '/blog-posts/design-system-architecture.md'
        }
    ];

    const handlePostClick = (post) => {
        setSelectedPost(selectedPost?.id === post.id ? null : post);
    };

    return (
        <div id="blog" className="blog-container">
            <div className="blog-content">
                <h2 className="blog-title">Latest Blog Posts</h2>
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className={`blog-card ${selectedPost?.id === post.id ? 'active' : ''}`}
                            onClick={() => handlePostClick(post)}
                        >
                            <div className="blog-card-content">
                                <h3>{post.title}</h3>
                                <p className="blog-date">{post.date}</p>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <button className="blog-link">
                                    {selectedPost?.id === post.id ? '← Close' : 'Read More →'}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {selectedPost && (
                    <div className="blog-post-container">
                        <button
                            className="blog-post-close"
                            onClick={() => setSelectedPost(null)}
                            aria-label="Close post"
                        >
                            ×
                        </button>
                        <BlogPost url={selectedPost.url} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog; 