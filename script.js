document.addEventListener("DOMContentLoaded", () => {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isMoving = false;

  const updatePosition = () => {
    const lerpFactor = 0.12;
    currentX += (targetX - currentX) * lerpFactor;
    currentY += (targetY - currentY) * lerpFactor;

    glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;

    if (isMoving) {
      requestAnimationFrame(updatePosition);
    }
  };

  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;

    if (!isMoving) {
      isMoving = true;
      glow.style.opacity = "1";
      requestAnimationFrame(updatePosition);
    }
  });

  window.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
    isMoving = false;
  });
});

