# Свързване на домейн masajipodomovete.com с Vercel

## 1. В Vercel

1. Влез в [vercel.com](https://vercel.com) и отвори проекта **masajipodomovete.com** (или както се казва репото).
2. Отиди в **Settings** → **Domains**.
3. Натисни **Add** и въведи:
   - `masajipodomovete.com`
4. Vercel ще предложи и `www.masajipodomovete.com` – приеми и го добави (обикновено препраща към основния домейн).
5. В списъка с домейни ще видиш за всеки домейн **какви DNS записи** да сложиш. Запиши ги (или остави отворен таба).

Обикновено Vercel показва:
- За **masajipodomovete.com** (apex): **A** запис → IP адрес (напр. `76.76.21.21`).
- За **www.masajipodomovete.com**: **CNAME** запис → `cname.vercel-dns.com` (или подобен).

(Точните стойности винаги са в таб Domains в Vercel за този проект.)

## 2. В GoDaddy (DNS записи)

Домейнът е в GoDaddy – ето стъпките там:

1. Влез в [godaddy.com](https://www.godaddy.com) → **My Products**.
2. Намери **masajipodomovete.com** и натисни **DNS** (или **Manage DNS** / **Управление на DNS**).
3. В секцията **Records** (записи) добави или редактирай следните записи **точно както ги показва Vercel** в Settings → Domains:

### Запис за www (задължително)

| Тип   | Name | Value |
|-------|------|--------|
| CNAME | `www` | `b0d1d940556e14ca.vercel-dns-017.com` |

В GoDaddy:
- **Type:** CNAME  
- **Name:** `www` (без домейна – само www)  
- **Value:** `b0d1d940556e14ca.vercel-dns-017.com`  
- **TTL:** 600 или 1 Hour (по подразбиране)

Ако вече има CNAME за `www` (напр. към друг хостинг), **изтрий го** или промени Value на горната стойност.

### Запис за основния домейн (masajipodomovete.com без www)

В таб **Domains** във Vercel провери дали за **masajipodomovete.com** (apex) изисква **A** запис. Ако да:

- **Type:** A  
- **Name:** `@` (или остави празно, според интерфейса на GoDaddy)  
- **Value:** IP адресът, който Vercel показва (напр. `76.76.21.21` или новия от Vercel)

Ако в GoDaddy има вече A запис за `@`, редактирай го да сочи към IP-то от Vercel.

4. **Save** / Запази всички промени. DNS промените обикновено влизат в сила за 5–30 минути, понякога до 24–48 часа.

## 3. SSL (HTTPS)

Vercel автоматично издава сертификат (Let’s Encrypt) за домейна след като DNS е насочен правилно. Не е нужно да правиш нищо допълнително.

## 4. Проверка

- След 10–30 минути отвори `https://masajipodomovete.com` и `https://www.masajipodomovete.com`.
- В Vercel → Settings → Domains статусът на домейните трябва да стане **Valid** / зелено.

Ако нещо не работи, провери в Domains в Vercel дали изискванията за записите съвпадат с тези при регистратора.
