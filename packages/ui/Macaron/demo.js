if (typeof window !== "undefined") {
  const style = `:root {
}`;
  document.head.appendChild(document.createElement("style")).textContent =
    style;

  class MyComponent extends HTMLElement {
    constructor() {
      super();

      const style = `
:host {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
img, video {
  max-width: 100%;
  height: auto;
}
:host {
  position: relative;
  width: 340px;
  height: 152px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  display: block;
  background: #000000;
}
#_26_53 {
  position: absolute;
  top: 84px;
  left: 170px;
  width: 150px;
  color: #3ceaaa;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
}
#__6_34__ {
  position: absolute;
  top: 112px;
  left: 170px;
  width: 150px;
  color: #3ceaaa;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
}
#ETH {
  position: absolute;
  top: 24px;
  left: 62px;
  color: #ffffff;
  font-family: Inter;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
}
#Line_34 {
  position: absolute;
  top: 68px;
  left: 0px;
  width: 340px;
  height: 0px;
}
#Group_34018 {
  position: absolute;
  top: 26px;
  left: 160px;
  width: 160px;
  height: 20px;
}
#_1_000_00 {
  position: absolute;
  top: 84px;
  left: 20px;
  width: 150px;
  color: #ffffff;
  font-family: Inter;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
}
#_2_297_58_↔_2_991_70 {
  position: absolute;
  top: 112px;
  left: 20px;
  color: #ebebf599;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
}
#Crypto_ETH {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 32px;
  height: 32px;
}`;
      const template = `
<div id="_26_53">$26.53</div>
<div id="__6_34__">(+6.34%)</div>
<div id="ETH">ETH</div>
<svg width="340" height="1" viewBox="0 0 340 1" fill="none" xmlns="http://www.w3.org/2000/svg" id="Line_34">
  <line x1="4.37114e-8" y1="0.5" x2="340" y2="0.50003" stroke="#55526B" stroke-opacity="0.54"></line></svg><svg width="160" height="20" viewBox="0 0 160 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="Group_34018">
  <rect width="160" height="20" rx="10" fill="#534F6F" fill-opacity="0.24"></rect>
  <rect opacity="0.3" x="47.4668" width="65.0667" height="20" fill="#3CEAAA"></rect>
  <line x1="93.5" y1="-3.75645e-8" x2="93.5" y2="20" stroke="white"></line>
</svg>
<div id="_1_000_00">$1,000.00</div>
<div id="_2_297_58_↔_2_991_70">2,297.58 ↔ 2,991.70</div>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="Crypto_ETH">
  <g clip-path="url(#clip0_2_5004)">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"></path>
    <g>
      <path d="M15.998 5V13.1306L22.9952 16.2014L15.998 5Z" fill="#343434"></path>
      <path d="M15.9982 5L9 16.2014L15.9982 13.1306V5Z" fill="#8C8C8C"></path>
      <path d="M15.998 21.4704V26.9952L22.9999 17.4811L15.998 21.4704Z" fill="#3C3C3B"></path>
      <path d="M15.9982 26.9952V21.4695L9 17.4811L15.9982 26.9952Z" fill="#8C8C8C"></path>
      <path d="M15.998 20.1916L22.9952 16.2015L15.998 13.1325V20.1916Z" fill="#141414"></path>
      <path d="M9 16.2015L15.9982 20.1916V13.1325L9 16.2015Z" fill="#393939"></path>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_2_5004">
      <rect width="32" height="32" fill="white"></rect>
    </clipPath>
  </defs>
</svg>`;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<style>${style}</style>${template}`;
    }
  }

  if (!customElements.get("my-component")) {
    customElements.define("my-component", MyComponent);
  }
}
