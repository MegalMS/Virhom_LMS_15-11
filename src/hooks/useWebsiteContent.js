import { useEffect, useState } from "react";

export function useWebsiteContent(page = null, section = null) {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (page) params.append("page", page);
        if (section) params.append("section", section);

        const res = await fetch(`/api/website-content?${params}`);
        if (!res.ok) throw new Error("Failed to fetch content");

        const data = await res.json();
        const contentMap = {};

        // Convert array to map for easy access by textKey
        data.forEach((item) => {
          contentMap[item.textKey] = item.content;
        });

        setContent(contentMap);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching website content:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [page, section]);

  return { content, loading, error };
}

// Helper function to get text content (with fallback)
export function getText(content, textKey, defaultText = textKey) {
  return content[textKey] || defaultText;
}
