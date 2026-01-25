"use client";
import { Trophy, Calendar, Users, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface InstructorProfileProps {
  instructor: {
    name: string;
    belt: string;
    image: string;
    yearsExperience: number;
    championships: number;
    students: number;
    specialties: string[];
    trajectory: string[];
    bio: string;
  };
  index: number;
}

export function InstructorProfile({ instructor, index }: InstructorProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group">
      {/* Card */}
      <div className="bg-white border border-gray-200 hover:border-black transition-all duration-300">
        {/* Image with overlay */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <ImageWithFallback 
            src={instructor.image}
            alt={instructor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Overlay Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 mb-3">
              <span className="text-white">{instructor.belt}</span>
            </div>
            <h3 className="text-white mb-2">{instructor.name}</h3>
            
            {/* Quick Stats */}
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                <span>{instructor.championships}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{instructor.yearsExperience} anos</span>
              </div>
            </div>
          </div>

          {/* Number Badge */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-black text-white flex items-center justify-center">
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Bio */}
          <p className="text-gray-600 mb-4 line-clamp-3">{instructor.bio}</p>

          {/* Specialties */}
          <div className="mb-4">
            <div className="text-black mb-2">Especialidades</div>
            <div className="flex flex-wrap gap-2">
              {instructor.specialties.map((specialty, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200">
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 p-3 border border-gray-100">
              <div className="text-gray-500 mb-1">Alunos</div>
              <div className="text-black">{instructor.students}+</div>
            </div>
            <div className="bg-gray-50 p-3 border border-gray-100">
              <div className="text-gray-500 mb-1">Títulos</div>
              <div className="text-black">{instructor.championships}</div>
            </div>
          </div>

          {/* Expandable Trajectory */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-3 border-t border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <span className="text-black">Ver Trajetória</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>

          {isExpanded && (
            <div className="pt-4 space-y-2 border-t border-gray-100 mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
              {instructor.trajectory.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">{milestone}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
