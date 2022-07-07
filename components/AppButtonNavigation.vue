<template>
  <div class="app-btn">
    <div class="rounded-text rotating">
      <svg viewBox="0 0 200 200">
        <path
          id="textPath"
          d="M 80,0 A 80,80 0 0 1 -80,0 A 80,80 0 0 1 80,0"
          transform="translate(100,100)"
          fill="none"
          stroke-width="0"
        ></path>
        <g font-size="20.5px">
          <text text-anchor="start">
            <textPath class="coloring" xlink:href="#textPath" startOffset="0%">
              Đọc Thêm • Khám Phá • Đọc Thêm • Khám Phá •
            </textPath>
          </text>
        </g>
      </svg>
    </div>
    <div class="arrow">
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.828125 7.95745H21.7372C19.2372 8.18028 14.4645 9.05384 13.5554 14.9365"
          stroke="#5E0101"
        />
        <path
          d="M0.828125 7.9571H21.7372C19.2372 7.73427 14.4645 6.86071 13.5554 0.978027"
          stroke="#5E0101"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss">
.app-btn {
  position: relative;
}
.rounded-text {
  // width: 25.625rem;
  // height: 25.625rem;
  text-transform: uppercase;
  transform: rotate(-103deg);
  color: #fff;
  z-index: -1;
  font-family: Raleway;
  fill: #a52325;
}

@keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.rotating {
  animation: rotating 12s linear infinite;
}

.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  svg{
    transform: scale(1.5);
  }
}
</style>
