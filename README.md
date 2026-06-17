# vivagift HR — Hệ thống quản trị nhân sự nội bộ

Cổng nhân sự nội bộ: nghỉ phép, hồ sơ, sáng kiến, dự án, vinh danh.
Stack: **Next.js 14 (App Router) + TypeScript + Supabase**, deploy trên **Vercel**.

---

## Trạng thái dự án

- [x] **Bước 1** — Khung dự án + trang landing
- [ ] Bước 2 — Database schema (Supabase)
- [ ] Bước 3 — Đăng nhập & phân quyền
- [ ] Bước 4 — Hồ sơ nhân viên & số dư phép
- [ ] Bước 5 — Module nghỉ phép

---

## Cấu trúc thư mục

```
vivagift-hr/
├── app/
│   ├── globals.css       # biến màu thương hiệu + style chung
│   ├── layout.tsx        # layout gốc (lang="vi")
│   ├── page.tsx          # trang chủ (landing)
│   └── login/
│       └── page.tsx      # trang đăng nhập (tạm, sẽ nối Supabase ở Bước 3)
├── lib/                  # (trống — sẽ chứa supabase client ở Bước 3)
├── public/               # tài nguyên tĩnh (logo…)
├── .env.local.example    # mẫu biến môi trường
├── next.config.mjs
├── package.json
└── tsconfig.json
```

---

## Chạy thử trên máy (tuỳ chọn)

Cần Node.js 18+.

```bash
npm install
npm run dev
```

Mở http://localhost:3000

> Nếu chưa cài Node.js, có thể bỏ qua bước này và để Vercel tự build khi deploy.

---

## Đưa code lên GitHub

Từ trong thư mục `vivagift-hr`:

```bash
git init
git add .
git commit -m "Bước 1: khung dự án Next.js + landing page"
git branch -M main
git remote add origin https://github.com/<tài-khoản>/vivagift-hr.git
git push -u origin main
```

> Thay `<tài-khoản>` bằng tên GitHub của bạn, và tạo repo rỗng tên `vivagift-hr` trước trên GitHub.

---

## Deploy lên Vercel

1. Vào https://vercel.com → **Add New… → Project**.
2. Chọn **Import** repo `vivagift-hr` vừa push.
3. Framework Preset: Vercel tự nhận **Next.js** — giữ nguyên.
4. (Từ Bước 3 trở đi) thêm **Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - *(Bước 1 chưa cần biến nào — vẫn deploy được.)*
5. Bấm **Deploy**.

Sau khi xong, Vercel cấp một URL dạng `https://vivagift-hr.vercel.app`.

---

## Biến môi trường

Sao chép `.env.local.example` thành `.env.local` và điền giá trị (lấy từ Supabase
ở Bước 2–3). **Không** commit `.env.local` lên GitHub.
