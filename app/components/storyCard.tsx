import React from "react";
import { Story } from "../types/interfaces";

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="story-card">
      <img src={story.titleImage.url} alt={story.altTextTitleImage} />
      <h2>{story.title}</h2>
      <p>{story.photographer.name}</p>
      <p>{story.dateOfShot}</p>
    </div>
  );
};

export default StoryCard;
