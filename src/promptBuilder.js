const styleConfig = require('./styleConfig');

function formatList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

function buildStyleSummary() {
  const { rendering, characters, animation } = styleConfig;

  return [
    `Rendering: ${rendering.look}.`,
    `Lighting: ${rendering.lighting}. Color: ${rendering.color.palette}. Maintain consistency: ${rendering.color.consistency}.`,
    `Camera: ${rendering.camera.motion}; handheld micro-movements; lenses ${rendering.camera.lenses}; shallow depth of field.`,
    `Environment details:\n${formatList(rendering.environment)}`,
    `Characters: ${characters.proportions}; ${characters.skin}; ${characters.clothing}; movement: ${characters.movement}; tone: ${characters.tone}.`,
    `Animation guidelines: ${animation.pacing}. Cohesion: ${animation.cohesion}. Restrictions:\n${formatList(animation.restrictions)}`
  ].join('\n');
}

function buildPrompt(sceneDescription, characterNotes = [], cameraNotes = []) {
  const style = buildStyleSummary();
  const characters = characterNotes.length
    ? `Character-specific notes:\n${formatList(characterNotes)}`
    : 'Character-specific notes: N/A';
  const cameras = cameraNotes.length
    ? `Camera callouts:\n${formatList(cameraNotes)}`
    : 'Camera callouts: Use standard cinematic framing described above.';

  return [
    'UE5-Quality Cinematic Video Request',
    `Scene description: ${sceneDescription}`,
    style,
    characters,
    cameras,
    'Ensure wholesome, kid-friendly tone and avoid violent, scary, or gritty visuals.',
    'Keep motion capture fluidity, soft bloom, and warm, slightly saturated grading consistent across the project.'
  ].join('\n\n');
}

module.exports = {
  buildPrompt,
  buildStyleSummary
};
