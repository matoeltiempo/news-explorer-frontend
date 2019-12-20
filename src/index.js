import './index.css';

const config = {
  type: "carousel",
  perView: 3,
  focusAt: "center",
  startAt: 2,
  gap: 16,
  keyboard: true,
  animationDuration: 700,
  rewindDuration: 2000,
  animationTimingFunc: 'ease-in-out',
};

new Glide('.glide', config).mount()