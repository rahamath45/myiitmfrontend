import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [data, setData] = useState({
    age: "",
    dob: "",
    contact: "",
    education: {
      degree: "",
      college: "",
      year: ""
    },
    career: {
      role: "",
      experience: ""
    },
    links: {
      linkedin: "",
      github: "",
      portfolio: ""
    }
  });

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  /* ✅ CORRECT PLACE — REPLACE your old useEffect with this */
  useEffect(() => {
    api.get("/profile").then(res => {
      setData(prev => ({
        ...prev,
        ...res.data,
        education: {
          ...prev.education,
          ...res.data?.education
        },
        career: {
          ...prev.career,
          ...res.data?.career
        },
        links: {
          ...prev.links,
          ...res.data?.links
        }
      }));
    });
  }, []);

     const update = async () => {
  try {
    setLoading(true);
    setSaved(false);

    const res = await api.put("/profile", data);

    console.log("Update response:", res.data); // 👈 MUST

    if (res.data?.message) {
      setSaved(true);
       navigate("/profile/view");
    }

  } catch (err) {
    console.error("Update error:", err);
    alert("Update failed ❌");
  } finally {
    setLoading(false);
    setTimeout(() => setSaved(false), 2500);
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900
      flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">My Profile</h1>
          <button
            onClick={logout}
            className="text-red-400 hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>

        <div className="space-y-8">

          {/* BASIC INFO */}
          <Section title="Basic Information">
            <Input
              label="Age"
              value={data.age}
              onChange={v => setData({ ...data, age: v })}
            />

            <Input
              label="Date of Birth"
              type="date"
              value={data.dob}
              onChange={v => setData({ ...data, dob: v })}
            />

            <Input
              label="Contact Number"
              value={data.contact}
              onChange={v => setData({ ...data, contact: v })}
            />
          </Section>

          {/* EDUCATION */}
          <Section title="Education">
            <Input
              label="Degree"
              value={data.education.degree}
              onChange={v =>
                setData({
                  ...data,
                  education: { ...data.education, degree: v }
                })
              }
            />

            <Input
              label="College / Institution"
              value={data.education.college}
              onChange={v =>
                setData({
                  ...data,
                  education: { ...data.education, college: v }
                })
              }
            />

            <Input
              label="Graduation Year"
              value={data.education.year}
              onChange={v =>
                setData({
                  ...data,
                  education: { ...data.education, year: v }
                })
              }
            />
          </Section>

          {/* CAREER */}
          <Section title="Career">
            <Input
              label="Role"
              value={data.career.role}
              onChange={v =>
                setData({
                  ...data,
                  career: { ...data.career, role: v }
                })
              }
            />

            <Input
              label="Experience (Years)"
              value={data.career.experience}
              onChange={v =>
                setData({
                  ...data,
                  career: { ...data.career, experience: v }
                })
              }
            />
          </Section>

          {/* LINKS */}
          <Section title="Online Profiles">
            <Input
              label="LinkedIn"
              value={data.links.linkedin}
              onChange={v =>
                setData({
                  ...data,
                  links: { ...data.links, linkedin: v }
                })
              }
            />

            <Input
              label="GitHub"
              value={data.links.github}
              onChange={v =>
                setData({
                  ...data,
                  links: { ...data.links, github: v }
                })
              }
            />

            <Input
              label="Portfolio"
              value={data.links.portfolio}
              onChange={v =>
                setData({
                  ...data,
                  links: { ...data.links, portfolio: v }
                })
              }
            />
          </Section>

          {/* SAVE */}
          <button
            onClick={update}
            disabled={loading}
            className="btn w-full mt-6"
          >
            {loading ? "Saving..." : "Save Profile"}
          </button>

          {saved && (
            <p className="text-center text-green-400 text-sm">
              ✅ Profile updated successfully
            </p>
            
          )}
        </div>
      </div>
    </div>
  );
}

/* ===== Reusable Components ===== */

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-white font-semibold mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs uppercase text-gray-300">{label}</label>
      <input
        type={type}
        value={value || ""}
        onChange={e => onChange(e.target.value)}
        className="input mt-2"
      />
    </div>
  );
}
