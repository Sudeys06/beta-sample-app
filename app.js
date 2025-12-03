// app.js
const { buildPrompt, buildStyleSummary } = require('./src/promptBuilder');

function demo() {
  const scene = 'A young inventor and her friendly robot plant a glowing seed in a cozy greenhouse at sunset.';
  const characterNotes = [
    'Inventor: joyful, curious, wearing a soft denim jacket with rolled sleeves',
    'Robot: rounded edges, gentle LED eyes, polished white casing with subtle scratches showing use'
  ];
  const cameraNotes = [
    'Begin with a slow push-in from a 40mm lens toward the workbench',
    'Over-the-shoulder shot as the inventor places the seed, with shallow depth of field on her hands',
    'Close-up of the seed emitting warm light, dust particles visible in the beam'
  ];

  const prompt = buildPrompt(scene, characterNotes, cameraNotes);
  console.log('\nGenerated UE5-style prompt\n--------------------------');
  console.log(prompt);

  console.log('\nStyle summary\n-------------');
  console.log(buildStyleSummary());
}

demo();
