const styleConfig = {
  rendering: {
    look: "Clean, polished 3D animated style inspired by Unreal Engine 5",
    lighting: "Soft, cinematic lighting with realistic shadows, subtle bloom, natural global illumination, and warm color grading",
    environment: [
      "Volumetric light beams",
      "Floating dust particles",
      "Soft fog",
      "Realistic ambient bounce light",
      "Clean, UE5-style textures"
    ],
    camera: {
      lenses: "35mm–50mm lens equivalents",
      motion: "Smooth dolly shots, slow push-ins, and over-the-shoulder frames",
      movement: "Natural handheld micro-movements with shallow depth of field"
    },
    color: {
      palette: "Warm tones with slight saturation and gentle bloom",
      consistency: "Maintain cohesive color grading across all outputs"
    }
  },
  characters: {
    proportions: "Semi-realistic proportions similar to modern game cinematics",
    skin: "Soft skin shading with accurate reflections",
    clothing: "Detailed folds and physically believable fabric response",
    movement: "Motion-capture-like animation with expressive body language, gentle micro-motions, and zero stiffness",
    tone: "Wholesome, kid-friendly, emotional, never violent or gritty"
  },
  animation: {
    pacing: "Cinematic timing with smooth transitions and eased keyframes",
    cohesion: "Every video should feel like part of the same world and lighting model",
    restrictions: [
      "Avoid jump cuts and harsh camera whips",
      "No violent, scary, or gritty framing"
    ]
  }
};

module.exports = styleConfig;
