const wrapper = document.querySelector('.wrapper');

const reference = {
  height: 350,
  ballSize: 30,
};

const pendulumsAmount = 20,
  startValue = 0

function generatePendulums(startValue, amountLeft) {
  if (startValue < amountLeft) {
    const animationDuration = 60 / (60 + startValue);

    const pendulum = document.createElement('div');
    pendulum.className = `pendulum item-${startValue}`;
    pendulum.style.height = `${
      reference.height + (amountLeft - startValue) * 10
    }px`;
    pendulum.style.zIndex = `${amountLeft - startValue}`
    pendulum.style.animation = `goLeft ${animationDuration}s ease-in-out alternate infinite`;

    let iterations = 1;

    wrapper.appendChild(pendulum);

    const pendulumBall = document.createElement('div');
    pendulumBall.className = 'pendulum__ball';
    pendulum.appendChild(pendulumBall);

    const pendulumBallAfter = document.createElement('div');
    pendulumBallAfter.className = 'pendulum__ball-after';
    pendulumBallAfter.style.width = `${
      reference.ballSize + (amountLeft - startValue) * 1.2
    }px`;
    pendulumBallAfter.style.height = `${
      reference.ballSize + (amountLeft - startValue) * 1.2
    }px`;
    pendulumBall.appendChild(pendulumBallAfter);

    generatePendulums(startValue + 1, amountLeft);
    console.log('generated');
  }
}
generatePendulums(startValue, pendulumsAmount);

function deletePendulums(){
  const pendulums = document.querySelectorAll('.pendulum')
  pendulums.forEach(item => {
    item.remove()
  })
}


// document.addEventListener('click', (e)=> {
//   console.log(e.target);
// })


const amountInput = document.querySelector('.amount__input'),
  amountIndicator = document.querySelector('.amount__indicator'),
  amountBtn = document.querySelector('.amount__btn')

  amountInput.addEventListener('input', (e)=>{
    amountIndicator.textContent = e.target.value
  })

  amountBtn.addEventListener('click', ()=>{
    deletePendulums()
    generatePendulums(startValue, +amountInput.value)
  })


