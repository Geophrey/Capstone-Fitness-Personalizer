import unit from "./unitsOfMeasurement";
import type from "./trainingTypes";

const data = [
    {
        name: "chest press",
        trainingType: [type.hypertrophy, type.endurance, type.strength],
        tutorial:
            "With hands in front of you and aligned with your chest, push forwards by moving them away from your body",
        measurementUnits: [unit.repetitions],
        intensity: 6,
    },

    {
        name: "sprints",
        trainingType: [type.speed, type.strength, type.endurance],
        tutorial:
            "Run your specified distance at full or close to full speed to completion",
        measurementUnits: [unit.distance],
        intensity: 9,
    },

    {
        name: "squat",
        trainingType: [type.endurance, type.hypertrophy, type.strength],
        tutorial:
            "With feet aligned at hip width or somewhat wider, lower yourself by bending your knees and hips with a neutral spine (minimal spine bending) until you cant comfortably lower yourself anymore. Bring yourself back up by straightening your self through the knees and hips",
        measurementUnits: [unit.repetitions],
        intensity: 6
    },

    {
        name: "swimming",
        trainingType: [type.cardio, type.endurance, type.speed],
        tutorial:
            "Choose your style of swimming and complete the distance and/or times you've set for yourself in each set",
        measurementUnits: [unit.sets],
        intensity: 6
    },

    {
        name: "straddle stretch",
        trainingType: [type.flexibility, type.mobility],
        tutorial:
            "spread your legs in a v-shape either standing or seated. Reach down or forwwards depending on if you are seated or not and hold. You can also reach to the sides towards your feet and hold.",
        measurementUnits: [unit.duration],
        intensity: 1
    },

    {
        name: "ankle scoops",
        trainingType: [type.warmUp, type.mobility, type.flexibility],
        tutorial:
            "For every step you take, plant a heel into the ground with that leg being straight and reach down towards and somewhat behind that heel to stretch your hamstrings, calves, and back",
        measurementUnits: [unit.repetitions],
        intensity: 3
    },

    {
        name: "box jumps",
        trainingType: [type.power, type.endurance, type.strength],
        tutorial:
            "Set up a box or box-like object with a flat, elevated surface to jump on. Start with bth feet on the ground, bend your knees about half to a quarter of the way down and launch yourself up and forwards to land on the box with both feet fully on top",
        measurementUnits: [unit.repetitions],
        intensity: 6
    },
];

export default data;

// {
//         "name": "sprints",
//         "trainingType": ["Speed", "Strength", "Endurance"],
//         "tutorial":
//             "Run your specified distance at full or close to full speed to completion",
//         "measurementUnits": ["Distance"],
//         "intensity": 9,
//     }

// {
//         "name": "chest press",
//         "trainingType": ["Muscle Growth", "Endurance", "Strength"],
//         "tutorial":
//             "With hands in front of you and aligned with your chest, push forwards by moving them away from your body",
//         "measurementUnits": ["Repetitions"],
//         "intensity": 6
//     }