import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes.js";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && navigate(ROUTES.SIGNIN);
    return () => clearInterval(interval);
  }, [count, navigate]);

  return <div>{count} left</div>;
};

export default LoadingToRedirect;
