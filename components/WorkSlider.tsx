"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// Illustrative concepts, not documented client projects.
const projects = [
  { title: "Northgate Commerce Dashboard", category: "Web application · 2026 · Next.js, Supabase, TypeScript", path: "/project-northgate-generated.png" },
  { title: "Aurelio Studio Rebuild", category: "WordPress · Elementor · 2025 · Performance, SEO", path: "/project-aurelio-generated.png" },
  { title: "Vantor Leads Landing System", category: "Landing pages · 2025 · CRO, Google Ads", path: "/project-vantor-generated.png" },
  { title: "Fieldpost Agency Platform", category: "CMS dashboard · 2025 · Sanity CMS, React, REST APIs", path: "/project-fieldpost-generated.png" },
  { title: "Marloe Apparel Storefront", category: "E-commerce · 2025 · Next.js, Stripe", path: "/project-marloe-generated.png" },
  { title: "Kestrel Analytics Suite", category: "SaaS dashboard · 2026 · Next.js, REST APIs, TypeScript", path: "/project-kestrel-generated.png" },
];

const chunk = <T,>(items: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, i * size + size));

const ProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <article className="group relative overflow-hidden rounded-lg" key={project.title}>
    <Image
      src={project.path}
      alt={`${project.title} illustrative interface`}
      width={800}
      height={480}
      className="aspect-[5/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent" aria-hidden />
    <div className="absolute inset-x-0 bottom-0 p-3 text-left">
      <h3 className="text-sm font-medium leading-tight">{project.title}</h3>
      <p className="text-[11px] leading-tight text-white/65">{project.category}</p>
    </div>
    <div className="absolute right-3 top-3 rounded-full bg-white/10 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
      <BsArrowRight aria-hidden />
    </div>
  </article>
);

const MobileProjectCard = ({ project }: { project: (typeof projects)[number] }) => (
  <article className="overflow-hidden rounded-lg bg-white/10 text-left shadow-lg">
    <Image
      src={project.path}
      alt={`${project.title} illustrative interface`}
      width={800}
      height={480}
      className="aspect-[5/3] w-full object-cover"
    />
    <div className="p-4">
      <h3 className="text-base font-medium leading-snug text-white">{project.title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-white/65">{project.category}</p>
    </div>
  </article>
);

const WorkSlider = () => (
  <>
    <div className="grid grid-cols-1 gap-5 xl:hidden">
      {projects.map((project) => (
        <MobileProjectCard key={project.title} project={project} />
      ))}
    </div>

    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="hidden h-[31rem] xl:block"
    >
      {chunk(projects, 4).map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
);

export default WorkSlider;
