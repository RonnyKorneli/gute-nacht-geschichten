import React from 'react';

const HtmlRenderer = ({ htmlContent }) => {
  // Create a function to safely render the HTML content
  const createMarkup = () => {
    return { __html: htmlContent };
  };

  return (
    <div className='w-[80%]'>
      {/* Use dangerouslySetInnerHTML to render the HTML content */}
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default HtmlRenderer;
