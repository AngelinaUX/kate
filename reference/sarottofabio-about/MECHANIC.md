# sarottofabio.com/about — механика страницы About

Снято: capture.mjs (main, 1440/390) + код из raw/src. Блок с годами (sticky-лента карьеры) не переносили — по просьбе.

| Что | Значение | Откуда |
|---|---|---|
| Наклон фото | perspective(900px) rotateY(5·x) rotateX(−4·y), x,y ∈ [−1;1] от центра | код, HeadlineScene (03_…js) |
| Возврат фото | transform 0.6s cubic-bezier(.4,0,.2,1) | код |
| Одометры | старт при входе в экран, margin "-15% 0px", once; задержка 0.15 + 0.18·i с | код, StatsStrip |
| Кривая/длительность одометра | те же, что в reference/sarottofabio-process (1300 мс, cubic-bezier(0.16,1,0.3,1)) | код OdometerValue |
| Лента фактов | CSS translateX(0 → −50%), linear, infinite, 35 с на 2 копии; пауза при наведении | CSS .marquee-scroll / .marquee-hover-pause |
| Лента, «меньше движения» | без анимации, список переносится по центру | код FactsMarquee |
| Точки на плитках | DotIconField — те же числа, что в sarottofabio-process (сетка 13 px, σ≈85 px) | код 02_…js |
| Плавная прокрутка | есть (~30 мс доезд) — настройка всего сайта, у нас уже Lenis | замер |

## Для переноса
- Куда: новая страница /about (src/components/about/AboutPage.tsx).
- Одометр и точки взяты из ProcessSection (уже перенесены с этого же сайта).
- Лента: у нас 4 копии вместо 2 → 70 с для той же скорости (наше решение).
- Форма: поля из нашей ContactForm (ContactFields), а не форма оригинала.
