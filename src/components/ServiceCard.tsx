import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="relative overflow-hidden pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        <div className="relative z-10">
          <div className="bg-primary/10 text-primary rounded-full p-3 inline-block mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          <CardTitle className="text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-black-foreground">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;