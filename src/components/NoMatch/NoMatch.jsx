import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="absolute flex justify-center items-center min-h-screen w-full flex-col gap-8">
      404 Page not found
        <Link to={"/"} className="bg-primary p-4 rounded-md text-white">
          Return to Home
        </Link>
    </div>
  );
};
export default NoMatch;
