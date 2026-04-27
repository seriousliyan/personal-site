import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center scanlines crt-flicker p-6">
      <div className="text-center font-mono-terminal space-y-3">
        <p className="text-secondary text-glow text-sm">▓▓▓ SEGFAULT ▓▓▓</p>
        <h1 className="text-5xl font-bold text-secondary text-glow">404</h1>
        <p className="text-muted-foreground text-sm">
          path <span className="text-foreground text-glow">{location.pathname}</span> not found in the filesystem.
        </p>
        <Link to="/" className="inline-block text-secondary text-glow hover:underline text-sm">
          ❯ cd ~
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
