export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const defaultTransition = {
  duration: 0.45,
  ease: "easeOut"
};

export const staggerChildren = (stagger: number = 0.08) => ({
  animate: {
    transition: {
      staggerChildren: stagger
    }
  }
});


