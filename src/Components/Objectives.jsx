import React, { useLayoutEffect, useRef } from "react";
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";

import integration from "../assets/integration.png";
import strategy from "../assets/strategy.png";
import research from "../assets/research.png";
import tracking from "../assets/tracking.png";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS_PER_GROUP = 2;
// Fraction of each group's scroll range spent "holding" still before snapping to the next group.
const HOLD_RATIO = 0.65;

export default function HorizontalObjectives() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const groupOffsetsRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const calculate = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const max = trackWidth - viewportWidth;

      const offsets = [];
      for (let i = 0; i < cardRefs.current.length; i += CARDS_PER_GROUP) {
        offsets.push(cardRefs.current[i]?.offsetLeft ?? 0);
      }
      if (offsets.length) {
        offsets[offsets.length - 1] = max;
      }
      groupOffsetsRef.current = offsets;
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const x = useTransform(scrollYProgress, (progress) => {
    const offsets = groupOffsetsRef.current;
    if (!offsets.length) return 0;

    const groupCount = offsets.length;
    const segmentSize = 1 / groupCount;
    const g = Math.min(groupCount - 1, Math.floor(progress / segmentSize));

    if (g === groupCount - 1) return -offsets[g];

    const segStart = g * segmentSize;
    const segEnd = segStart + segmentSize;
    const holdEnd = segStart + segmentSize * HOLD_RATIO;

    if (progress <= holdEnd) return -offsets[g];

    const t = (progress - holdEnd) / (segEnd - holdEnd);
    return -(offsets[g] + (offsets[g + 1] - offsets[g]) * t);
  });

  const objectivesData = [
    {
      title: "Strategy and Policy Development",
      description:
        "We assist organizations in crafting evidence-based strategies, developing policies, and ensuring alignment with global and local objectives to drive sustainable impact.",
      image: strategy,
      color: "blue",
    },
    {
      title: "Program Implementation",
      description:
        "We deliver end-to-end program implementation services, ensuring efficiency, effectiveness, and alignment with organizational goals.",
      image: integration,
      color: "yellow",
    },
    {
      title: "Research and Data Management",
      description:
        "We provide cutting-edge research, data collection, and management solutions to empower decision-making and generate actionable insights.",
      image: research,
      color: "blue",
    },
    {
      title: "Monitoring, Evaluation, and Learning",
      description:
        "We specialize in designing and implementing robust MEL frameworks to track progress, evaluate impact, and integrate learning for continuous improvement.",
      image: tracking,
      color: "yellow",
    },
    {
      title: "Learning And Performance Academy",
      description:
        "We provide Instructor-led Training, E-Learning, International Training, Knowledge management, Performance support.",
      icon: FaChalkboardTeacher,
      color: "blue",
    },
    {
      title: "IT Services",
      description:
        "We provide a range of IT services and consulting. Data Science, Data Analytics & Data infrastructure, Artificial Intelligence (AI), Information Security Management, IT Infrastructure Procurement.",
      icon: FaLaptopCode,
      color: "yellow",
    },
    {
      title: "Human Capital Management",
      description:
        "We provide Talent Acquisition Services, HR Support Services, HR Audit/Organisational Diagnostics, HR Strategy and Talent Management, etc.",
      icon: MdManageAccounts,
      color: "blue",
    },
    {
      title: "Event Management",
      description:
        "We provide Online Ticketing Platforms, Invitation Distribution Service, Event Advertising and Publicity, and Product Advertising and Publicity (PR and Media).",
      icon: RiCalendarEventFill,
      color: "yellow",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-brightBackGround"
      style={{ height: `${objectivesData.length * 120}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Horizontal track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="relative flex items-center gap-8 sm:gap-16 lg:gap-24 px-4 sm:px-8 lg:px-24"
        >
          {objectivesData.map((item, index) => {
            const isTop = index % 2 === 0;
            const accent = item.color === "blue" ? "#2563eb" : "#eab308";

            return (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="relative flex-shrink-0 w-[90vw] sm:w-[70vw] lg:w-[40vw]"
                initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Card */}
                <div
                  className={`relative ${isTop ? "mb-12 sm:mb-16" : "mt-12 sm:mt-16"} bg-white rounded-2xl shadow-xl p-6 sm:p-8`}
                >
                  {/* Icon/Image in top-left */}
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-sm absolute top-4 left-4 ${
                      item.color === "blue"
                        ? "bg-blue text-white"
                        : "bg-yellow text-white"
                    }`}
                  >
                    {item.icon ? (
                      <item.icon className="text-3xl" />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-10 object-contain"
                      />
                    )}
                  </div>

                  {/* Heading with same color as icon, add padding-left to not overlap icon */}
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      item.color === "blue" ? "text-blue" : "text-yellow"
                    } pl-20`} // 16 width + extra padding
                  >
                    {item.title}
                  </h3>

                  <p className="text-lightText text-sm sm:text-base leading-relaxed pl-20">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
