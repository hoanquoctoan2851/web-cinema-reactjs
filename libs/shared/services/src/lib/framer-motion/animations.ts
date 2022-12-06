const easing = [0.6, -0.05, 0.01, 0.99]
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
}

const fadeInDown = {
  initial: {
    y: -60,
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
}

const fadeLeft = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
}

const fadeCloseLeft = {
  initial: {
    x: -60,
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
}

const fadeRight = {
  initial: {
    x: 60,
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: .6,
      ease: easing
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

// transition page
const transitionPage = {
  exit: {
    opacity: 0
  },
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {duration: 0.5}
}

export {
  fadeCloseLeft,
  fadeInDown,
  easing,
  fadeInUp,
  fadeLeft,
  fadeRight,
  stagger,
  transitionPage
}
