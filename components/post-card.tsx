import { CommentIcon, HeartIcon, MegaphoneIcon, PhotoIcon } from "@/components/icons";
import type { Post, PostType } from "@/lib/mock-data";

const POST_TYPE_BADGE: Record<PostType, { label: string; className: string }> = {
  achievement: {
    label: "LOGRO",
    className: "bg-badge-achievement-bg text-badge-achievement",
  },
  activity: {
    label: "ACTIVIDAD",
    className: "bg-badge-activity-bg text-badge-activity",
  },
  announcement: {
    label: "ANUNCIO",
    className: "bg-badge-announcement-bg text-badge-announcement",
  },
};

export function PostCard({ post }: { post: Post }) {
  const badge = POST_TYPE_BADGE[post.type];

  return (
    <article className="rounded-[20px] border border-line bg-surface p-[20px_22px] shadow-card">
      <div className="mb-3.5 flex items-center gap-3">
        {post.avatar.kind === "initial" ? (
          <div
            className="flex size-11 flex-none items-center justify-center rounded-full font-display text-[17px] font-semibold"
            style={{ backgroundColor: post.avatar.bg, color: post.avatar.fg }}
          >
            {post.avatar.text}
          </div>
        ) : (
          <div className="flex size-11 flex-none items-center justify-center rounded-full bg-badge-announcement-bg text-badge-announcement">
            <MegaphoneIcon size={20} />
          </div>
        )}
        <div className="flex-1">
          <div className="font-display text-[16.5px] font-semibold text-ink">
            {post.author}
          </div>
          <div className="text-[12.5px] text-ink-faint">
            {post.time} · {post.publishedBy}
          </div>
        </div>
        <div
          className={`flex items-center gap-[7px] rounded-full px-3 py-1.5 ${badge.className}`}
        >
          <span className="size-2 rounded-full bg-current" />
          <span className="text-xs font-extrabold tracking-[.5px]">
            {badge.label}
          </span>
        </div>
      </div>

      <div className="mb-2.5 text-[12.5px] text-ink-faint">{post.audience}</div>
      <p className="m-0 text-[15.5px] leading-[1.55] text-ink-body">
        {post.text}
      </p>

      {post.photoCaption && (
        <div className="mt-3.5 flex h-[200px] flex-col items-center justify-center gap-2 rounded-2xl border-[1.5px] border-dashed border-line-dashed bg-sunken text-ink-ghost">
          <PhotoIcon size={30} />
          <span className="text-[13.5px]">{post.photoCaption}</span>
        </div>
      )}

      <div className="mt-4 flex items-center gap-[18px] border-t border-line-soft pt-3.5">
        <span className="flex items-center gap-[7px] text-sm font-bold text-coral-600">
          <HeartIcon size={19} />
          {post.likes}
        </span>
        <a className="flex items-center gap-[7px] text-sm font-bold text-ink-muted">
          <CommentIcon size={18} />
          {post.comments}
        </a>
        <span className="flex-1" />
        <a className="text-sm font-extrabold text-coral-800">Editar</a>
      </div>
    </article>
  );
}
