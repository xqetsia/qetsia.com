"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { LucideCalendar, LucideMapPin } from "lucide-react"

const experiences = [
  {
    company: "TOKK",
    companyUrl: "https://tokk.ai",
    position: "iOS Engineering Intern",
    period: "Oct 2025 - Jan 2026",
    location: "Remote",
    responsibilities: [
      "Built and redesigned critical iOS systems including a custom SwiftUI authentication architecture, a modular WebSocket communication layer, an AudioPlaybackService, and a scalable MVVM onboarding experience. Worked within a cross-functional team to deliver clean, extensible foundations."
    ],
    logoUrl: "images/tokk.jpeg",
    technologies: ["Swift", "SwiftUI", "AWS Amplify", "Combine", "MVVM"]
  },
  {
    company: "Nupt.AI",
    companyUrl: "https://nupt.ai/",
    position: "Software Engineering Intern",
    period: "Mar 2025 - Jun 2025",
    location: "Los Angeles, CA",
    responsibilities: [
      "Reduced technical debt and implementation risk by speccing a blogging platform, defining core data models, entity relationships, and access control logic to align with business objectives. Designed and implemented a production-grade CMS backend supporting structured content workflows for admins, with role-based access control and a custom rich text editor integration."
    ],
    logoUrl: "images/nupt.png",
    technologies: ["Bubble.io", "System Design", "Data Modeling", "Role-Based Access Control", "Front-End Development"]
  },
  {
    company: "UniShack",
    companyUrl: "https://www.unishack.com/",
    position: "UI/UX Intern",
    period: "Oct 2022 - Feb 2023",
    location: "Remote",
    responsibilities: [
      "Conducted user research specifically on UCLA students to distinguish their housing needs from those of general renters, surfacing key insights that directly shaped design decisions. Benchmarked major apartment platforms through competitive analysis to align the product with market standards. Defined core UI features and facilitated iterative design reviews with industry mentors throughout the prototyping process.    "
    ],
    logoUrl: "images/unishack.png",
    technologies: ["Figma", "User Research", "Competitive Analysis", "Wireframing", "Prototyping", "UI Design"]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading>Experience</SectionHeading>

        {/* Yellow underline below heading */}
        <div className="w-24 h-1 bg-[#ffd90d] mx-auto mt-2 mb-16"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/50 hidden md:block"></div>

          {/* Experience cards */}
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`mb-16 flex justify-center items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline dot - centered on the timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ffd90d] rounded-full border-4 border-black/50 shadow-md z-20 hidden md:block"></div>

                <div
                  className={`relative md:max-w-[90%] lg:max-w-[80%] w-full md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Experience card */}
                  {/* <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-md p-6 relative z-10 border border-white/10"> */}
                  <div className="group bg-black/40 backdrop-blur-md rounded-xl shadow-md p-6 relative z-10 border border-white/5 transition-all duration-300  hover:shadow-2xl hover:shadow-yellow-900/40 overflow-hidden">
                    {/* Company logo, name, position */}
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm  flex items-center justify-center p-1">
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                              src={exp.logoUrl || "/placeholder.svg"}
                              alt={exp.company}
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                          </a>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white duration-300 group-hover:text-[#ffd90d]">{exp.company}</h3>
                        <p className="text-white duration-300 group-hover:text-[#ffd90d]">{exp.position}</p>
                      </div>
                    </div>

                    {/* Period and location */}
                    <div className="flex items-center text-gray-300 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <LucideCalendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <LucideMapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                          {exp.responsibilities.join(" ")}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full border border-[#ffd90d]/40 text-[#ffd90d] bg-[#F68349]/10"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    {/* HOVER EFFECT: Yellow gradient line that appears at the top of the card on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-[#ffd90d]"></div>
                    </div>
                  </div>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
