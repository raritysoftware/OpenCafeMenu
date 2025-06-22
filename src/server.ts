import express from 'express';
import fs from 'fs';
import yaml from 'js-yaml';

const app = express();
const PORT = 3000;

// Load configuration from cafe.yaml or cafe.yml
const configFile = fs.existsSync('cafe.yaml') ? 'cafe.yaml' : 'cafe.yml';
const config = yaml.load(fs.readFileSync(configFile, 'utf8'));

function renderTemplate(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>${config.name}</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main>
        ${content}
      </main>
      <footer>
        <div class="footer-left">
          <p>&copy; ${new Date().getFullYear()} ${config.name}. All rights reserved.</p>
        </div>
        <div class="footer-center">
          <p>Contact us: <a href="mailto:${config.email}">${config.email}</a></p>
          <p>Phone: ${config.contact}</p>
          <p>Hours:</p>
          <ul>
            <li>Weekdays: ${config.hours.weekdays}</li>
            <li>Weekends: ${config.hours.weekends}</li>
          </ul>
        </div>
        <div class="footer-right">
          <p>Location:</p>
          <p>${config.location}</p>
        </div>
      </footer>
    </body>
    </html>
  `;
}

app.use(express.static('public'));

app.get('/', (req, res) => {
  const drinksHtml = Object.entries(config.drinks || {})
    .map(([category, items]) => {
      if (!Array.isArray(items)) return '';
      return `
        <section class="menu-category">
          <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div class="product-grid">
            ${items.map((drink) => `
              <div class="product-card">
                <h4>${drink.name}</h4>
                <p>$${drink.price.toFixed(2)}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    })
    .join('');

  const content = `
    <h2>Menu of <span class="dynamic-data">${config.name}</span> located at <span class="dynamic-data">${config.location}</span></h2>
    ${drinksHtml}
  `;
  res.send(renderTemplate(config.name, content));
});

app.get('/menu', (req, res) => {
  res.json(config.drinks);
});

app.get('/about', (req, res) => {
  const content = `
    <h2>About Us</h2>
    <p>${config.about}</p>
  `;
  res.send(renderTemplate('About Us', content));
});

app.get('/cafe', (req, res) => {
  const drinksHtml = Object.entries(config.drinks)
    .map(([category, items]) => `
      <h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
      <ul>
        ${(items as Array<{ name: string; price: number }>).map((drink) => `<li>${drink.name} - $${drink.price.toFixed(2)}</li>`).join('')}
      </ul>
    `)
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.name}</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>${config.name}</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main>
        <h2>Welcome to ${config.name}</h2>
        <p>${config.about}</p>
        <h2>Location</h2>
        <p>${config.location}</p>
        <h2>Menu</h2>
        ${drinksHtml}
      </main>
      <footer>
        <div class="footer-left">
          <p>&copy; ${new Date().getFullYear()} ${config.name}. All rights reserved.</p>
        </div>
        <div class="footer-center">
          <p>Contact us: <a href="mailto:${config.email}">${config.email}</a></p>
          <p>Phone: ${config.contact}</p>
          <p>Hours:</p>
          <ul>
            <li>Weekdays: ${config.hours.weekdays}</li>
            <li>Weekends: ${config.hours.weekends}</li>
          </ul>
        </div>
        <div class="footer-right">
          <p>Location:</p>
          <p>${config.location}</p>
        </div>
      </footer>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
