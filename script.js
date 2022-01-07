const wrapper = document.querySelector('.wrapper');

const reference = {
  height: 350,
  ballSize: 50,
};

const pendulumsAmount = 20;

function generatePendulums(amountLeft) {
  if (amountLeft > 0) {
    const animationDuration = 60 / (60 + amountLeft);

    const pendulum = document.createElement('div');
    pendulum.className = `pendulum item-${amountLeft}`;
    pendulum.style.height = `${
      reference.height + (pendulumsAmount - amountLeft) * 17
    }px`;

    pendulum.style.animation = `goLeft ${animationDuration}s ease-in-out alternate infinite`;

    let iterations = 1;

    wrapper.appendChild(pendulum);

    const pendulumBall = document.createElement('div');
    pendulumBall.className = 'pendulum__ball';
    pendulum.appendChild(pendulumBall);

    const pendulumBallAfter = document.createElement('div');
    pendulumBallAfter.className = 'pendulum__ball-after';
    pendulumBallAfter.style.width = `${
      reference.ballSize + (pendulumsAmount - amountLeft) * 1.2
    }px`;
    pendulumBallAfter.style.height = `${
      reference.ballSize + (pendulumsAmount - amountLeft) * 1.2
    }px`;
    pendulumBall.appendChild(pendulumBallAfter);

    generatePendulums(amountLeft - 1);
  }
}
generatePendulums(pendulumsAmount);
