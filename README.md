# 🍽️ Smart Grocery Picker App

This repo now includes a starter toolkit for designing **UE5-quality, wholesome cinematic prompts** for an AI video generator. It keeps lighting, camera, and character direction consistent so every video belongs in the same warm, kid-friendly world.

---

## ✨ What it does
- Encodes a reusable **style configuration** (lighting, camera lenses, bloom, motion-capture feel, and tone).
- Builds **scene-specific prompts** that merge your story beats with the shared cinematic style.
- Prints a **style summary** so teams can align on visuals before rendering.

---

## 🚀 Running the demo
```bash
node app.js
```
The script logs a UE5-style prompt for a sample scene plus the full visual style summary.

---

## 🧠 Files
- `src/styleConfig.js` – Centralized style/lens/lighting/character rules inspired by UE5 cinematics.
- `src/promptBuilder.js` – Helpers to assemble cohesive prompts from your scene notes.
- `app.js` – Demo entry that prints a ready-to-use prompt and the underlying style summary.

---

## 🧭 Next steps
- Plug the prompt builder into your video generation API (e.g., text-to-video or storyboard-to-video).
- Expand `styleConfig` with location-specific variants while keeping the core look (warm grading, soft bloom, motion-capture animation).
- Add tests to guarantee style consistency across prompts.
