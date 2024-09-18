import React from "react";
import classNames from "classnames";
import { useFeatureStore } from "./store";

const FeatureCard = ({ children, id, imageUrl }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <img
        src={imageUrl}
        alt={`Feature ${id}`}
        className="w-full h-full object-cover rounded-2xl"
      />
   
      {children}
    </div>
  );
};

export const Todo = ({ id }) => {
  const imageUrl = "/steps/step1.png";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};






















