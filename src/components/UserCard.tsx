import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';

interface UserCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, icon, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setShowReadMore(contentRef.current.scrollHeight > contentRef.current.clientHeight);
    }
  }, [description]);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <Card className="max-w-sm mx-auto h-full flex flex-col transform transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex justify-center mb-4">
          {icon && (
            <div className="w-16 h-16 text-indigo-500">
              {React.cloneElement(icon as React.ReactElement, { className: 'w-full h-full' })}
            </div>
          )}
        </div>
        <CardTitle className="text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="flex-grow">
          <div
            ref={contentRef}
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-full' : 'max-h-32'
            }`}
          >
            <CardDescription className="text-justify">
              {description}
            </CardDescription>
          </div>
        </div>
        <div className="mt-auto pt-2">
          <AnimatePresence>
            {showReadMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-2 text-center"
              >
                <button
                  onClick={toggleExpand}
                  className="text-indigo-600 hover:text-indigo-800 font-medium focus:outline-none"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;

