"use client";

import { useState, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const primarySkills = [
    { name: "Go", detail: "microservices, concurrency, payment flows" },
    { name: "AWS", detail: "EC2, Lambda, S3, Athena, RDS, Redis" },
  ];
  const supportingSkills = ["Node.js", "TypeScript", "Kafka/SQS", "React"];
  const toolingSkills = ["Docker", "CI/CD", "PostgreSQL/MySQL", "MCP + LLMs"];

  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if component is mounted on the client

  const handleCopy = () => {
    const text = "aadishskjain@gmail.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopied(true);
  };

  useEffect(() => {
    setIsClient(true); // Set the state to true once the component mounts
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && isClient && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="mt-6 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-3">
                {primarySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-2xl border border-white/[0.12] bg-[#10132E]/90 p-4 shadow-[0_0_35px_rgba(203,172,249,0.08)]"
                  >
                    <p className="text-2xl font-bold text-white">{skill.name}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white-100">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-between gap-3">
                <div className="rounded-2xl border border-white/[0.1] bg-black-200 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-purple">
                    Backend side
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {supportingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#151934] px-3 py-1 text-xs text-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.1] bg-black-200 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-purple">
                    Production tooling
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {toolingSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#151934] px-3 py-1 text-xs text-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-8 right-0 h-24 w-48 rounded-full bg-purple/20 blur-3xl" />
              <div className="relative mb-4 rounded-2xl border border-white/[0.1] bg-black-200 p-4 text-sm text-white-100">
                {copied
                  ? "Email copied. I usually respond quickly."
                  : "Open to backend, platform, and AI workflow opportunities."}
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};