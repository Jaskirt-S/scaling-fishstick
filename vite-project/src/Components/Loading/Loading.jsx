import Lottie from "react-lottie-player";
import loadingAnimation from "./loadingg.json"; 

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        loop
        animationData={loadingAnimation}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default Loading;
