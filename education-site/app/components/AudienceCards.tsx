import Image from "next/image";

const cards = [
  { title: "Schools & K–12 Education", desc: "Support students and educators with AI-assisted learning resources, practice assessments, and personalised academic support.", img: "/media-k12.png", alt: "Students learning with an educator in a classroom." },
  { title: "Higher Education", desc: "Enhance the learning experience with intelligent academic assistance, adaptive practice, and tools that support student learning and institutional innovation.", img: "/media-higher.png", alt: "Educators and students working together in a classroom." },
  { title: "Coaching & Test Preparation", desc: "Help learners prepare for competitive examinations with AI-assisted mock tests, topic-focused practice, and performance-based learning recommendations.", img: "/media-students.png", alt: "Higher education students collaborating in a learning space." },
  { title: "Education Networks & Enterprise", desc: "Explore scalable AI learning solutions for educational groups, multi-campus institutions, and organisations seeking to integrate intelligent learning into their existing ecosystem.", img: "/media-countries.png", alt: "Two attendees at a professional event." },
];

export default function AudienceCards() {
  return (
    <section id="solutions" style={{ borderTop: "1px solid #e5e7eb", padding: "80px 0" }}>
      <div className="page-container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title" style={{ color: "#000", marginBottom: 16 }}>
            Empowering Education at Every Level
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
            From classrooms to large educational networks, Osmium AI aims to make personalised, AI-powered learning more accessible to institutions of every size.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {cards.map((card) => (
            <div key={card.title} style={{
              border: "1px solid #e5e7eb", borderRadius: 12, padding: 24,
              display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 24,
              transition: "border-color 0.2s"
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: 8, overflow: "hidden" }}>
                  <Image src={card.img} alt={card.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#000" }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
