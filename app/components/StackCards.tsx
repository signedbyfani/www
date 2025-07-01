"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
}

function CardRotate({ children, onSendToBack }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: any, info: PanInfo) {
    const threshold = 180;
    if (
      Math.abs(info.offset.x) > threshold ||
      Math.abs(info.offset.y) > threshold
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute h-52 w-52 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function StackCards() {
  const initialCards = [
    {
      id: 1,
      img: "/slider/me/1.jpeg",
    },
    {
      id: 2,
      img: "/slider/me/2.jpeg",
    },
    {
      id: 3,
      img: "/slider/me/3.jpeg",
    },
    {
      id: 4,
      img: "/slider/me/4.jpeg",
    },
    {
      id: 5,
      img: "/slider/me/5.jpeg",
    },
    {
      id: 6,
      img: "/slider/me/6.jpeg",
    },
    {
      id: 7,
      img: "/slider/me/7.jpeg",
    },
  ];
  const [cards, setCards] = useState(initialCards);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div className="flex flex-col items-center gap-3 -rotate-6 animate-in" style={{ "--index": 5 } as React.CSSProperties}>
      <div className="relative h-52 w-52" style={{ perspective: 600 }}>
        {cards.map((card, index) => {
          return (
            <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)}>
              <motion.div
                className="h-full w-full rounded-lg"
                animate={{
                  rotateZ: (cards.length - index - 1) * 4,
                  scale: 1 + index * 0.06 - cards.length * 0.06,
                  transformOrigin: "90% 90%",
                }}
                initial={false}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Image
                  src={card.img}
                  alt="card"
                  width={208}
                  height={208}
                  className="pointer-events-none bg-secondary h-full w-full rounded-md outline outline-dashed outline-neutral-400 outline-offset-2 object-cover"
                />
              </motion.div>
            </CardRotate>
          );
        })}
      </div>
      <p className="font-mono font-medium italic text-sm text-accent">swipe these cards →</p>
    </div>
  );
} 