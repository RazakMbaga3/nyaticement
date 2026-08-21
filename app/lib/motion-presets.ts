import type { Transition } from 'framer-motion';

/**
 * Critically damped default (no overshoot) for hover/tap feedback on
 * static UI — cards, buttons, links. Apple's "damping 1.0" mapped to
 * Framer Motion's bounce/duration spring API.
 */
export const springUI: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.3,
};

/**
 * Slight bounce, reserved for interactions the user experiences as
 * momentum-driven or playful (a play button, an icon badge) — never
 * for menus/panels that just appear.
 */
export const springMomentum: Transition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.4,
};
