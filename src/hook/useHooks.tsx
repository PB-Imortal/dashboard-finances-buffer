import { useEffect, useState } from "react";

export const useAvatar = () => {
  const [userAvatar, setUserAvatar] = useState(
    "https://xsgames.co/randomusers/assets/avatars/pixel/49.jpg"
  );

  const changeAvatar = () => {
    const newAvatarUrl = `https://xsgames.co/randomusers/avatar.php?g=pixel&${new Date().getTime()}`;
    setUserAvatar(newAvatarUrl);
  };

  return {
    changeAvatar,
    userAvatar,
    setUserAvatar,
  };
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<{ width: number }>({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};
