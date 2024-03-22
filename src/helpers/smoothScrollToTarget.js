import { scroller } from "react-scroll";

const smoothScrollToTarget = (target) => {
  if (!target) return;
  else
    setTimeout(
      () =>
        scroller.scrollTo(target, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuint",
          offset: -50,
        }),
      300
    );
};

export default smoothScrollToTarget;
