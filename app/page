import Link from "next/link";

const modules = [
  { title: "Nghỉ phép", desc: "Tạo đơn, duyệt nhiều cấp, số dư phép tự tính." },
  { title: "Hồ sơ & thâm niên", desc: "Thông tin cá nhân, năm cống hiến, thành tích." },
  { title: "Sơ đồ tổ chức", desc: "Cây tổ chức, phòng ban, quản lý trực tiếp." },
  { title: "Sáng kiến", desc: "Gửi ý tưởng, duyệt, ghi nhận & thưởng." },
  { title: "Dự án thử thách", desc: "Đăng & nhận dự án, phát hiện tài năng." },
  { title: "Vinh danh", desc: "Nhân vật nổi bật tuần / tháng / năm." },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0b5072 0%, #0e6e8c 100%)",
          color: "#fff",
          padding: "72px 24px 96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(14,156,166,0.25)",
          }}
        />
        <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#5ec8cf" }}>
            vivagift
          </div>
          <div style={{ fontSize: 13, color: "#9fc4d4", marginTop: 2 }}>
            quatangviva.com
          </div>

          <h1
            style={{
              fontSize: 44,
              lineHeight: 1.15,
              fontWeight: 800,
              margin: "48px 0 12px",
              maxWidth: 760,
            }}
          >
            Hệ thống quản trị nhân sự nội bộ
          </h1>
          <p
            style={{
              fontSize: 19,
              color: "#cfe6ec",
              maxWidth: 640,
              margin: "0 0 32px",
            }}
          >
            Một nơi để cả công ty xin nghỉ phép, xem hồ sơ, đóng góp sáng kiến,
            nhận dự án và được vinh danh.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/login" className="btn btn-primary">
              Đăng nhập
            </Link>
            <a href="#modules" className="btn btn-outline">
              Xem tính năng
            </a>
          </div>

          <div
            style={{
              marginTop: 40,
              fontSize: 13,
              color: "#7faec0",
              letterSpacing: 0.3,
            }}
          >
            Bước 1 — Khung dự án đã sẵn sàng · Next.js + Supabase
          </div>
        </div>
      </section>

      {/* Modules */}
      <section
        id="modules"
        style={{ maxWidth: 1040, margin: "0 auto", padding: "56px 24px 80px" }}
      >
        <h2
          style={{
            fontSize: 13,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#0e9ca6",
            fontWeight: 700,
            margin: 0,
          }}
        >
          Các module
        </h2>
        <p style={{ fontSize: 26, fontWeight: 700, color: "#0b5072", margin: "8px 0 32px" }}>
          Những gì hệ thống sẽ làm
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {modules.map((m) => (
            <div
              key={m.title}
              style={{
                background: "#fff",
                border: "1px solid #ddeaec",
                borderRadius: 14,
                padding: "22px 22px 24px",
                boxShadow: "0 8px 28px rgba(11,80,114,0.06)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 4,
                  background: "#0e9ca6",
                  borderRadius: 4,
                  marginBottom: 14,
                }}
              />
              <h3 style={{ margin: "0 0 6px", fontSize: 18, color: "#0b5072" }}>
                {m.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14.5, color: "#5c6b72", lineHeight: 1.5 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #ddeaec",
          padding: "24px",
          textAlign: "center",
          color: "#5c6b72",
          fontSize: 13,
        }}
      >
        vivagift · quatangviva.com — Hệ thống nội bộ
      </footer>
    </main>
  );
}
