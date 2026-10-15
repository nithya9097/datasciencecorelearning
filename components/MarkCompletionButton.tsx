"use client";

import { useProgress, lessonKey } from "@/lib/progress";

export default function MarkCompleteButton({
  moduleId,
  lessonId,
}: {
  moduleId: string;
  lessonId: string;
}) {
  const { isDone, toggle } = useProgress();
  const key = lessonKey(moduleId, lessonId);
  const completed = isDone(key);

  return (
    <button
      onClick={() => toggle(key)}
      className={`px-4 py-2 rounded font-medium ${
        completed ? "bg-green-600 text-white" : "border border-gray-400"
      }`}
    >
      {completed ? "✓ Completed (click to undo)" : "Mark as complete"}
    </button>
  );
}