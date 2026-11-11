export function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.innerHTML = `
    <nav>
      <button id="menu-toggle" aria-controls="nav-list" aria-expanded="false" style="display:none;">Menu</button>
      <ul id="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#work">Work With Me</a></li>
        <li><a href="#speaking">Speaking</a></li>
        <li><a href="#writing">Writing</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  `;
}

