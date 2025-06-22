// menu.ts
// bun ile: Hem terminalde menü gösterir hem de menu.json'u otomatik üretir
import { readFileSync, writeFileSync } from 'fs';
import yaml from 'yaml';

const yamlText = readFileSync('menu.yaml', 'utf8');
const menu = yaml.parse(yamlText);

// Terminal çıktısı
console.log('--- Kafe Menüsü ---');
menu.forEach((item: any, i: number) => {
  console.log(`${i + 1}. ${item.isim} (${item.kategori}) - ${item.fiyat} TL`);
});

// Frontend için menu.json üretimi
writeFileSync('menu.json', JSON.stringify(menu, null, 2), 'utf8');
console.log('menu.json güncellendi.');
