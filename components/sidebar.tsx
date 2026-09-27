import { BellIcon, ChildrenIcon, HomeIcon, LogoutIcon, PlusIcon, SunIcon, UserIcon } from "@/components/icons";
import { classroom, user } from "@/lib/mock-data";

const NAV_ITEMS = [
  { label: "Feed", icon: HomeIcon, isActive: true },
  { label: "Niños", icon: ChildrenIcon, isActive: false },
  { label: "Avisos", icon: BellIcon, isActive: false },
  { label: "Mi cuenta", icon: UserIcon, isActive: false },
] as const;

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen w-[248px] flex-none flex-col border-r border-line bg-surface px-4 py-6">
      <a className="flex items-center gap-[11px] px-2 pt-1 pb-[22px]">
        <div className="flex size-[38px] flex-none items-center justify-center rounded-xl bg-[linear-gradient(155deg,#F8C3A8,#F2937A)] text-white">
          <SunIcon size={21} />
        </div>
        <div>
          <div className="font-display text-[17px] leading-none font-semibold text-ink">
            OpenDayCare
          </div>
          <div className="mt-0.5 text-[11.5px] text-ink-faint">
            {classroom.name}
          </div>
        </div>
      </a>

      <a className="mb-[18px] flex w-full items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(180deg,#F4977E,#EE8164)] p-3 text-[14.5px] font-extrabold text-white shadow-button">
        <PlusIcon size={17} />
        Nueva publicación
      </a>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map(({ label, icon: Icon, isActive }) => (
          <a
            key={label}
            className={
              isActive
                ? "flex items-center gap-3 rounded-xl bg-coral-soft px-3 py-[11px] text-[14.5px] font-extrabold text-coral-700"
                : "flex items-center gap-3 rounded-xl bg-transparent px-3 py-[11px] text-[14.5px] font-semibold text-ink-nav"
            }
          >
            <Icon size={19} />
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-2.5 border-t border-line pt-3.5">
        <div className="flex items-center gap-[11px] px-2 py-1.5">
          <div className="flex size-[38px] flex-none items-center justify-center rounded-full bg-coral-500 font-display text-base font-semibold text-white">
            {user.initial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-extrabold text-ink">{user.name}</div>
            <div className="text-xs text-ink-faint">{user.role}</div>
          </div>
          <a
            title="Cerrar sesión"
            className="flex size-8 flex-none items-center justify-center rounded-[10px] bg-cream text-ink-muted"
          >
            <LogoutIcon size={16} />
          </a>
        </div>
      </div>
    </aside>
  );
}
