# Георги Луков — Портфолио сайт

## Как се добавят нови снимки

**Единственият файл, който трябва да редактираш: `photos.js`**

### Стъпки:

1. Копирай снимката в `/img/gallery/`
2. Отвори `photos.js`
3. Добави нов ред в масива `PHOTOS`:

```js
{ file: "gallery/FILENAME.jpg", album: "kampanii", title: "Заглавие", tags: ["мода"], cover: false },
```

4. Качи в GitHub — готово.

### Налични albums (album id):
- `kampanii` — Кампании
- `editorial` — Портрети
- `produkti` — Продукти
- `katalog` — Каталог
- `konceptualna` — Концептуална
- `portret` — Бизнес портрет
- `svatbena` — Сватбена
- `balove` — Балове
- `krustene` — Кръщене

### cover: true
Само една снимка на албум трябва да е `cover: true` — тя се показва на началната страница.

---

## Fontello шрифт

Постави файловете в папка `/fonts/`:
- `fontello.woff2`
- `fontello.woff`
- `fontello.ttf`

---

## Структура
```
/
├── index.html          ← Начална страница
├── photos.js           ← РЕДАКТИРАЙ САМО ТОВА за нови снимки
├── style.css           ← Общи стилове
├── components.js       ← Nav и Footer (автоматични)
├── fonts/              ← Fontello файлове (добави ги)
├── img/gallery/        ← Всички снимки тук
├── albums/index.html   ← Галерия с филтриране
├── about/index.html
├── contact/index.html
├── blog/index.html
└── reviews/index.html
```
