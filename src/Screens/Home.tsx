import { useRef } from "react";
import Works from "../Components/Works";
import ProfileContent from "../Components/ProfileContent";

const Home = () => {
  const scrollRef = useRef<null | HTMLDivElement>(null);

  const triggerScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-dark1">
      <ProfileContent triggerScroll={triggerScroll} />
      <Works scrollRef={scrollRef} />
    </div>
  );
};

export default Home;
