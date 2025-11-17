import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-slate-900 [box-shadow:0_0_0_1px_rgba(148,163,184,.3),0_18px_40px_rgba(15,23,42,.6)]",
      // dark styles
      "transform-gpu dark:bg-slate-900 dark:[border:1px_solid_rgba(148,163,184,.4)]",
      className,
    )}
  >
    {/* top media / background area */}
    <div>{background}</div>

    {/* text content */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-6">
      <Icon className="h-12 w-12 origin-left transform-gpu text-slate-100 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-100">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">
        {description}
      </p>
    </div>

    {/* CTA row, appears on hover */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    {/* hover overlay */}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/5 group-hover:dark:bg-neutral-800/30" />
  </div>
);

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200/10 bg-[#020617] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.75)] transition duration-200 hover:border-[#7C3AED]/70 hover:shadow-[0_22px_80px_rgba(76,29,149,0.7)]",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mt-3 mb-1 font-sans text-base font-semibold text-slate-50">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export { BentoCard, BentoGrid, BentoGridItem };