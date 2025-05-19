import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './Blog.css';

const BlogPost = ({ url }) => {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch blog post');
                }
                return response.text();
            })
            .then(text => {
                setContent(text);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [url]);

    if (isLoading) return <div className="blog-loading">Loading...</div>;
    if (error) return <div className="blog-error">{error}</div>;

    return (
        <div className="blog-post-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost; 