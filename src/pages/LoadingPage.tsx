import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <span className="m-auto">
      <Loader2 className="mx-auto h-10 w-10 animate-spin" />
      Loading...
    </span>
  );
};

export default LoadingPage;
