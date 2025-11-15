// "use client";

// import { useEffect, useState } from "react";

// export function useContent() {
//   const [content, setContent] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchContent = async () => {
//     try {
//       setLoading(true);
//       // Add timestamp to bypass cache
//       const response = await fetch(`/content.json?t=${Date.now()}`);
//       if (!response.ok) throw new Error("Failed to load content");
//       const data = await response.json();
//       setContent(data);
//     } catch (err) {
//       setError(err.message);
//       console.error("Error loading content:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContent();
    
//     // Poll for content updates every 2 seconds
//     const interval = setInterval(fetchContent, 2000);
    
//     return () => clearInterval(interval);
//   }, []);

//   return { content, loading, error, refreshContent: fetchContent };
// }

// // Helper function to get nested content
// export function getContent(content, path, defaultValue = "") {
//   return path.split(".").reduce((obj, key) => obj?.[key], content) || defaultValue;
// }

// // Helper to get page content
// export function getPageContent(content, page) {
//   return content[page] || {};
// }

// // Helper to get section content
// export function getSectionContent(content, page, section) {
//   return content[page]?.[section] || {};
// }


"use client";

import { useEffect, useState } from "react";

export function useContent() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      // Optional: add cache-buster only in development
      const url = process.env.NODE_ENV === 'development'
        ? `/content.json?t=${Date.now()}`
        : `/content.json`;

      const response = await fetch(url, {
        cache: 'no-store', // Ensures fresh data in dev
      });

      if (!response.ok) throw new Error("Failed to load content");
      const data = await response.json();
      setContent(data);
    } catch (err) {
      setError(err.message);
      console.error("Error loading content:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();

    // NO POLLING — removed setInterval
    // Only fetch once on mount

    // Optional: Allow manual refresh
    return () => {};
  }, []);

  return { content, loading, error, refreshContent: fetchContent };
}

// Helper function to get nested content
export function getContent(content, path, defaultValue = "") {
  return path.split(".").reduce((obj, key) => obj?.[key], content) || defaultValue;
}

// Helper to get page content
export function getPageContent(content, page) {
  return content[page] || {};
}

// Helper to get section content
export function getSectionContent(content, page, section) {
  return content[page]?.[section] || {};
}