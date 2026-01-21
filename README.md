# Kopyta Studio — business card site

Одностраничное приложение на React + Vite (TypeScript). Секции: Hero с анимацией и Contact с телефоном и email.

## Требования
- Node.js 18 или выше (рекомендуется LTS). Проверить: `node -v`.
- npm (идет вместе с Node).

## Установка
```bash
npm install
```

## Локальный запуск
```bash
npm run dev
```
Откройте URL из вывода (обычно http://localhost:5173).

## Продакшн-сборка
```bash
npm run build
```
Готовые файлы будут в папке `dist/`.

## Как менять тексты
Все тексты хранятся в `src/content/copy.json`. Поля:
- `hero.title` — название компании.
- `hero.subtitle` — подзаголовок.
- `hero.cta` — текст кнопки.
- `contact.phone` — телефон (форматируйте как хотите, ссылка формируется автоматически).
- `contact.email` — email.

После изменения файлов перезапустите dev-сервер (если он не обновился автоматически).***

