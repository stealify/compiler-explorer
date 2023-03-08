// These customization options are as great as the Yordles themselves!
export class CustomStealifyPanel extends HTMLElement {
  color;
  imageUrl;
  isLoading;
  imgElement;
  spinnerElement;

  constructor() {
    super();
    this.color = this.getAttribute('color') || '#000';
    this.imageUrl = this.getAttribute('image-url') || '';
    this.isLoading = true;
    this.imgElement = document.createElement('img');
    this.imgElement.src = this.imageUrl;
    this.spinnerElement = document.createElement('div');
    this.spinnerElement.classList.add('spinner');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .panel {
          background-color: ${this.color};
        }
        .spinner {
          border: 16px solid #f3f3f3;
          border-top: 16px solid ${this.color};
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -60px;
          margin-left: -60px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
      <div class="panel">
        <img src="${this.imageUrl}" alt="panel image">
        ${this.isLoading ? this.spinnerElement.outerHTML : ''}
      </div>
    `;
  }
}

customElements.define('custom-stealify-panel', CustomStealifyPanel);