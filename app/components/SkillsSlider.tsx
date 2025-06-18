import { InfiniteSlider } from '@/app/components/infinite-slider';

const skills = [
  "UX Design",
  "UI Design",
  "Interaction Design",
  "User Research",
  "Prototyping",
  "Design Systems",
  "Wireframing",
  "User Testing",
  "Design Thinking",
  "Visual Design",
  "Framer",
  "Webflow",
];

export default function SkillsSlider() {
  return (
    <div className="w-full overflow-visible select-none py-6">
      <InfiniteSlider 
        speed={70}
        className="gap-8"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-primary whitespace-nowrap transition-transform duration-300 ease-out hover:scale-95"
          >
            {skill}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
} 