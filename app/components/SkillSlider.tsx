import { InfiniteSlider } from './InfiniteSlider';

export function SkillSlider() {
  const skills = [
    "UX Design",
    "UI Design",
    "UX Research",
    "Prototyping",
    "Design Systems",
    "Wireframing",
    "User Testing",
    "Framer",
    "Webflow"
  ];

  return (
    <InfiniteSlider gap={16} speed={50}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="h-fit w-fit rounded-full bg-secondary border border-secondary overflow-hidden flex items-center justify-center px-3 py-1.5"
        >
          <p className="font-medium text-center">{skill}</p>
        </div>
      ))}
    </InfiniteSlider>
  );
} 