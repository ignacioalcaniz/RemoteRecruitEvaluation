export default function FeatureCard({ title, subtitle }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 w-[240px] hover:scale-105 transition">

      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600" />

      <div>
        <h4 className="font-semibold text-slate-900 text-sm">
          {title}
        </h4>
        <p className="text-xs text-slate-500">
          {subtitle}
        </p>
      </div>

    </div>
  );
}