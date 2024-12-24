import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { IconType } from 'react-icons';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const MAX_VISIBLE_LENGTH = 220; 

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
 
  const isDescriptionLong = description.length > MAX_VISIBLE_LENGTH;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="group overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="relative pb-8 pt-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10 flex items-center space-x-4">
            <div className="bg-indigo-500 text-white p-3 rounded-full">
              {Icon && <Icon className="w-6 h-6" />}
            </div>
            <CardTitle className="text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <AnimatePresence initial={false}>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: isExpanded ? "auto" : "4.5rem" }}
              exit={{ height: "4.5rem" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardDescription className="text-sm text-gray-600">
                {description}
              </CardDescription>
            </motion.div>
          </AnimatePresence>
          {isDescriptionLong && ( 
            <motion.button
              className="mt-2 text-indigo-600 font-medium focus:outline-none"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? t("service.readl") : t("service.readM")}
            </motion.button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
