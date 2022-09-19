export default function fruits ({ html, state }) {
    let fruit = f => `<li>${f}</li>`
    let list = state.store.fruits
      ? state.store.fruits.map(fruit).join('') 
      : []
    
    return html`
      <h1>yummy fruit</h1>
      <ul>${list}</ul>
    `
  }