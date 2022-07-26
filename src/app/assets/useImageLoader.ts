import { useEffect, useState } from "react";

export function useImageLoader(imageSrc: string) {
  const [imageToLoad, setImageToLoad] = useState<any>(null);
  const path = "app/assets/";

  useEffect(() => {
    //TODO: loader on
    import(`${path}${imageSrc}`).then((image) => {
      setImageToLoad(image.default);
      //TODO: loader off
    });
  }, [imageSrc]);

  return imageToLoad;
}
