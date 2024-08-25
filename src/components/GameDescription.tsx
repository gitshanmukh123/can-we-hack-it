import React, { useState } from 'react';
import DOMPurify from 'dompurify';

interface GameDescriptionProps {
  description: string;
}
const truncateHTML = (html: string, wordCount: number): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  
  let text = tempDiv.innerText || tempDiv.textContent || '';
  const words = text.split(' ');
  
  if (words.length > wordCount) {
    text = words.slice(0, wordCount).join(' ') + '...'; // Add ellipsis
  }
  
  return text;
};

const GameDescription: React.FC<GameDescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Get the truncated description
  const previewDescription = truncateHTML(description, 100);
  const sanitizedPreview = DOMPurify.sanitize(previewDescription);
  const sanitizedFullDescription = DOMPurify.sanitize(description);

  return (
    <div className="text-green-400 m-10">
      <div
        dangerouslySetInnerHTML={{
          __html: isExpanded ? sanitizedFullDescription : sanitizedPreview,
        }}
      />
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-500 underline"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default GameDescription;
