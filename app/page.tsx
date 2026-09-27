import { CameraIcon } from "@/components/icons";
import { PostCard } from "@/components/post-card";
import { Sidebar } from "@/components/sidebar";
import { classroom, posts, user } from "@/lib/mock-data";

export default function Home() {
  const firstName = user.name.split(" ")[0];

  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar />
      <main className="h-screen min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[760px] px-10 pt-[34px] pb-20">
          <div className="mb-6">
            <div className="mb-1 text-[12.5px] font-extrabold tracking-[.8px] text-coral-700">
              GUARDERÍA · SALA SOLES
            </div>
            <h1 className="m-0 font-display text-[30px] font-semibold text-ink">
              Buenas, {firstName}
            </h1>
            <p className="mt-[5px] mb-0 text-[14.5px] text-ink-muted">
              {classroom.childrenCount} niños · {classroom.dateLabel}
            </p>
          </div>

          <a className="mb-6 flex items-center gap-3.5 rounded-[18px] border border-line bg-surface px-[18px] py-3.5 shadow-soft">
            <div className="flex size-10 flex-none items-center justify-center rounded-full bg-coral-500 font-display text-base font-semibold text-white">
              {user.initial}
            </div>
            <span className="flex-1 text-[15px] text-ink-faint">
              Compartí un momento…
            </span>
            <span className="flex size-[38px] items-center justify-center rounded-xl bg-coral-soft text-coral-600">
              <CameraIcon size={19} />
            </span>
          </a>

          <div className="mb-3.5 flex items-center gap-3.5">
            <span className="text-[12.5px] font-extrabold tracking-[.8px] text-ink-dim">
              PUBLICADO HOY
            </span>
            <span className="h-px flex-1 bg-line-strong" />
          </div>

          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
