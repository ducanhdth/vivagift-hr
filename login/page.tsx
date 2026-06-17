import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #ddeaec",
          borderRadius: 16,
          boxShadow: "0 8px 28px rgba(11,80,114,0.10)",
          padding: "40px 36px",
          maxWidth: 420,
          width: "100%",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: "#0e9ca6" }}>
          vivagift
        </div>
        <h1 style={{ fontSize: 22, color: "#0b5072", margin: "20px 0 8px" }}>
          Đăng nhập
        </h1>
        <p style={{ color: "#5c6b72", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 24px" }}>
          Tính năng đăng nhập sẽ được kết nối với Supabase ở Bước 3. Hiện tại
          đây là trang tạm để khung dự án chạy hoàn chỉnh.
        </p>
        <Link href="/" className="btn btn-primary" style={{ width: "100%" }}>
          ← Về trang chủ
        </Link>
      </div>
    </main>
  );
}
