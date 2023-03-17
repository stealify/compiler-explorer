// These customization options are as great as the Yordles themselves!
export class CustomStealifyPanel extends HTMLElement {
  connectedCallback() { 
    this.innerHTML = `<div class="panel">
        <img src="${this.imageUrl}" alt="panel image">
        ${this.isLoading ? this.spinnerElement.outerHTML : ''}
      </div>`;
    const centerInner = {
        position:relative;
        margin:0 auto;
        clear:left;
        height:auto;
        z-index: 0;
        text-align:center;/* Add This*/
    }
    const styleFixedTop = {
        position: "fixed",
        right: 0,
        left: 0,
        zIndex: 1030,
        text-align:center
    }
    Object.assign(this.style, styleFixedTop)
  }
}

//customElements.define('custom-stealify-panel', CustomStealifyPanel);
export { CustomStealifyPanel }
