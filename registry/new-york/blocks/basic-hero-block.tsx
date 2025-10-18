"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as  React from "react";

/**
 * Hero Component
 * --------------------------------------------------------------------------
 * A responsive hero section built with Next.js + shadcn/ui.
 *
 * Layout:
 * - On desktop and tablets: content and image appear side-by-side.
 * - On mobile: stacks vertically (content above image).
 * - Can reverse layout order using the `reverse` prop.
 *
 * Features:
 * - Dynamic heading, description, and CTA buttons.
 * - Configurable image with responsive placeholder dimensions.
 * - Optional reversed layout for visual variation.
 *
 * Usage:
 * ```tsx
 * import { Hero } from "@/components/hero";
 *
 * <Hero
 *   title="Craft elegant interfaces effortlessly"
 *   description="Responsive hero section built with shadcn and Next.js."
 *   primaryButtonText="Get started"
 *   secondaryButtonText="Learn more"
 *   imageSrc="/images/hero-banner.jpg"
 *   reverse
 * />
 * ```
 */
export interface HeroProps {
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    imageSrc?: string;
    imageAlt?: string;
    reverse?: boolean;
}

export function BasicHero({
    title = "Build beautiful experiences with Next.js + shadcn",
    description =
    "A clean, responsive hero section that switches from side-by-side on desktop to stacked on tablet/mobile. The image area has fixed dimensions per breakpoint to keep layout stable.",
    primaryButtonText = "Get started",
    primaryButtonHref = "#get-started",
    secondaryButtonText = "Learn more",
    secondaryButtonHref = "#learn-more",
    imageSrc,
    imageAlt = "Placeholder dimensions (w x h )",
    reverse = false,
}: HeroProps) {
    // Placeholder dimension labels per breakpoint
    const dimensions = {
        mobile: { w: "100%", h: "288px (h-72)" },
        tablet: { w: "100%", h: "384px (h-96)" },
        desktop: { w: "500px", h: "500px (h-[500px])" },
    };

    // Build flex direction classes:
    // - base: column (stack)
    // - lg: row (side-by-side) or row-reverse when reverse === true
    const layoutDirectionClass = reverse
        ? "flex flex-col lg:flex-row-reverse items-center"
        : "flex flex-col lg:flex-row items-center";

    return (
        <section className="max-w-7xl mx-auto px-4 py-16 ">
            {/* Use flex for simpler, reliable ordering */}
            <div className={`${layoutDirectionClass} gap-8`}>
                {/* Text block */}
                <div className="flex-1">
                    <Card className="bg-transparent border-0 shadow-none">
                        <CardContent className="space-y-6 md:pr-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                                {title}
                            </h1>
                            <p className="text-base sm:text-lg text-muted-foreground">
                                {description}
                            </p>
                            <div className="flex gap-3 items-center">
                                <Button asChild>
                                    <a href={primaryButtonHref}>{primaryButtonText}</a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href={secondaryButtonHref}>{secondaryButtonText}</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Image block */}
                <div className={` flex-1 w-full  flex justify-center ${reverse ? "lg:justify-start" : "lg:justify-end"}`}>
                    <div
                        className="
              relative overflow-hidden rounded-2xl shadow-md bg-gray-100
              w-full h-72 sm:h-80 md:h-96 lg:w-[500px] lg:h-[500px]
              flex items-center justify-center
            "
                        aria-hidden={imageSrc ? false : true}
                    >
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 767px) 100vw, 500px"
                                priority
                            />
                        ) : (
                            <div className="text-center text-muted-foreground">
                                <div className="text-lg font-semibold">{imageAlt}</div>
                                <div className="mt-2 text-sm">
                                    <span className="block sm:hidden">
                                        {dimensions.mobile.w} × {dimensions.mobile.h}
                                    </span>
                                    <span className="hidden sm:block md:hidden">
                                        {dimensions.tablet.w} × {dimensions.tablet.h}
                                    </span>
                                    <span className="hidden md:block lg:hidden">
                                        {dimensions.tablet.w} × {dimensions.tablet.h}
                                    </span>
                                    <span className="hidden lg:block">
                                        {dimensions.desktop.w} × {dimensions.desktop.h}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
