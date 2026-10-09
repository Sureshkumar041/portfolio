import {
  Briefcase,
  CodeXml,
  Database,
  Landmark,
  Layers,
  LayoutTemplate,
  Mail,
  Plug,
  Server,
  Smartphone,
  Trophy,
  Wrench,
  type LucideProps,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { IconName } from "@/lib/types";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// lucide no longer ships brand logos, so GitHub and LinkedIn are inline SVGs.
function GithubIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

const icons: Record<IconName, ComponentType<LucideProps> | ComponentType<IconProps>> = {
  code: CodeXml,
  server: Server,
  layout: LayoutTemplate,
  smartphone: Smartphone,
  database: Database,
  plug: Plug,
  wrench: Wrench,
  briefcase: Briefcase,
  layers: Layers,
  trophy: Trophy,
  landmark: Landmark,
  mail: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

/** Decorative icon by name. Pass `aria-label` + `aria-hidden={false}` if it carries meaning. */
export function Icon({ name, size = 18, ...props }: { name: IconName } & IconProps) {
  const Component = icons[name] as ComponentType<IconProps>;
  return <Component size={size} aria-hidden="true" focusable="false" {...props} />;
}
