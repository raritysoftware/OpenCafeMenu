// server.ts
// bun ile: conf.yaml'dan menü, hakkımızda ve footer verilerini otomatik üreten ve frontend sunan sunucu
import { readFileSync, writeFileSync } from 'fs';
import { serve } from 'bun';
import yaml from 'yaml';

function generateData() {
  const yamlText = readFileSync('conf.yaml', 'utf8');
  const parsed = yaml.parse(yamlText);
  const menu = parsed.menu || [];
  const about = parsed.hakkimizda || '';
  const footer = parsed.footer || {};
  writeFileSync('menu.json', JSON.stringify(menu, null, 2), 'utf8');
  writeFileSync('about.json', JSON.stringify({ hakkimizda: about }, null, 2), 'utf8');
  writeFileSync('footer.json', JSON.stringify(footer, null, 2), 'utf8');
  return { menu, about, footer };
}

// Sadece Bun ortamı için sade kontrol (runtime'da hata vermez, tip hatası ignore edilir)
// @ts-ignore
const isProd = typeof Bun !== 'undefined' && Bun.argv.includes('--prod');
const mode = isProd ? 'production' : 'development';
const { menu, about, footer } = generateData();

if (mode === 'development') {
  // Terminal çıktısı
  console.log('--- Kafe Menüsü (Development) ---');
  menu.forEach((item: any, i: number) => {
    console.log(`${i + 1}. ${item.isim} (${item.kategori}) - ${item.fiyat} TL`);
  });
  console.log('\n--- Hakkımızda ---\n' + about);
  console.log('\n--- Footer ---\n', footer);
  console.log('menu.json, about.json ve footer.json güncellendi. Sunucu başlatılıyor...');
}

serve({
  port: 8000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/menu.json') {
      return new Response(readFileSync('menu.json'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (url.pathname === '/about.json') {
      return new Response(readFileSync('about.json'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (url.pathname === '/footer.json') {
      return new Response(readFileSync('footer.json'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(readFileSync('index.html'), {
        headers: { 'Content-Type': 'text/html' },
      });
    }
    if (url.pathname === '/menu-frontend.js') {
      return new Response(readFileSync('menu-frontend.js'), {
        headers: { 'Content-Type': 'application/javascript' },
      });
    }
    return new Response('404 Not Found', { status: 404 });
  },
});

console.log(`Sunucu http://localhost:8000 adresinde (${mode} modu)`);
