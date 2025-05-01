
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="mb-4 flex justify-center">
          <div className="bg-fitness-light p-4 rounded-full">
            <Activity size={48} className="text-fitness-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The fitness page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <a href="/" className="inline-flex items-center">
            Return to Dashboard
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
