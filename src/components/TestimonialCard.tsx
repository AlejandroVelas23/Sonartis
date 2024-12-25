import React, { useState, useRef, useEffect } from 'react';


interface TestimonialCardProps {
  date: string;
  title: string;
  content: string;
  userPhoto: string;
  userName: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  date,
  title,
  content,
  userPhoto,
  userName,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setShowReadMore(contentRef.current.scrollHeight > contentRef.current.clientHeight);
    }
  }, [content]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="relative">
          <p
            ref={contentRef}
            className={`text-gray-600 overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-full' : 'max-h-24'
            }`}
          >
            {content}
          </p>
          {showReadMore && (
            <div
              className={`absolute bottom-0 left-0 right-0 text-center ${
                isExpanded ? '' : 'bg-gradient-to-t from-white to-transparent pt-4'
              }`}
            >
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:text-blue-700 font-medium focus:outline-none transition-colors duration-300"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 transition-all duration-300 ease-in-out transform hover:scale-125 focus-within:scale-110">
  <img 
    src={userPhoto} 
    alt={userName} 
    className="w-full h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-125"
  />
</div>
        <span className="font-medium text-gray-800">{userName}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;

