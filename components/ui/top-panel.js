const panelChannel = new BroadcastChannel("panelElement")
const styles = {
  fixedTop: { position: "fixed", right: 0, left: 0, zIndex: 1030, text-align:center  },
  centerInner = { position:relative; margin:0 auto; clear:left; height: "auto", zIndex: 0, textAlign:"center" }
};

class CustomStealifyPanel extends HTMLElement {
  connectedCallback() { 
    this.innerHTML = `<button></button>`
    this.id = "panelElement"
    
    Object.assign(panelElement.style, styleFixedTop)
    
    panelChannel.onmessage = ({data}) => new Function(this.id,`${data}`)(this)
  }
}

customElements.define('custom-stealify-panel', CustomStealifyPanel);
const panelElement = new CustomStealifyPanel();
export { CustomStealifyPanel, panelElement }

/**
 *
 * Usage Import panelElement addChild() via channel or other method apply functions on panelElement.
 */
// in a worker const pannelChannel = new BroadcastChannel("panelElement");
// pannelChannel.postMessage('Object.assign(panelElement.style, ${JSON.stringify(styleFixedTop)})');
