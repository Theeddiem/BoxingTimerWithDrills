const workout = [
    {
        title: "Warm-Up",
        drills: [
            {
                explanation: "Jump Rope",
                duration: 120, // 2 minutes of jump rope
                instructions: "Focus on maintaining a steady rhythm. Keep your elbows close to your body and use your wrists to turn the rope."
            },
            {
                explanation: "Stretching",
                duration: 120, // 2 minutes of stretching
                instructions: "Ankles, Knees, LowerBack, Sides, Arms, Neck."
            }
        ]
    },
    {
        title: "Round 1: Only Head Movements",
        drills: [
            {
                explanation: "Slip left, slip right, roll under left, roll under right.",
                duration: 90,
                instructions: "Focus on smooth, fluid transitions between slips and rolls. Keep your hands up and use your legs for balance."
            },
            {
                explanation: "Slip right, slip left, duck, roll under right, roll under left, move back.",
                duration: 90,
                instructions: "Keep your movements quick and controlled. After moving back, reset your stance and repeat the sequence."
            },
            {
                explanation: "Slip left, slip right, duck, move back, roll under left, roll under right.",
                duration: 90,
                instructions: "Engage your core and maintain good posture as you transition between movements. Stay low during ducks and rolls."
            },
            {
                explanation: "Slip right, roll under left, roll under right, move back, slip left, roll under right.",
                duration: 90,
                instructions: "Stay light on your feet. Visualize dodging an opponent's punches while keeping your head and body in constant motion."
            }
        ]
    },
    {
        title: "Round 1.5: Basic Punches with Footwork",
        drills: [
            {
                explanation: "Jab",
                duration: 60,
                instructions: "Jab to face and body with feints. Focus on footwork, step in and out while maintaining balance."
            },
            {
                explanation: "1-2",
                duration: 60,
                instructions: "With step in using left and right foot according to the punches, hands up, fast recovery."
            },
            {
                explanation: "1-2",
                duration: 60,
                instructions: "With step out using left and right foot according to the punches, hands up, fast recovery."
            },
        ]
    },
    {
        title: "Round 2: Slip and Counter Combinations",
        drills: [
            {
                explanation: "1-2 with a slip right, then a counter right hook.",
                duration: 60,
                instructions: "Practice the timing of your slip and ensure a powerful counter. Use visualization."
            },
            {
                explanation: "Slip right and counter with a right uppercut.",
                duration: 60,
                instructions: "Focus on using your legs to create power in the uppercut. Keep breathing sharp with each punch."
            },
            {
                explanation: "1-2-3 combo, then slip left and throw body hooks.",
                duration: 60,
                instructions: "Stay low while slipping and ensure your body hooks are powerful. Angle out after the hooks."
            }
        ]
    },
    {
        title: "Round 3: Slip, Roll, & Counter Combinations",
        drills: [
            {
                explanation: "Jab, Slip left, Roll.",
                duration: 90,
                instructions: "Rotate your hips and pivot your feet for power. Stay low during the roll and keep your guard up."
            },
            {
                explanation: "Jab, Cross, Slip right, Roll.",
                duration: 90,
                instructions: "Rotate your hips and pivot your feet for power. Stay low during the roll and keep your guard up."
            },
            {
                explanation: "Jab, Right Hook, Roll, Right Cross/Hook",
                duration: 90,
                instructions: "Maintain balance while slipping. Roll after the hook, keeping your weight centered for a strong cross."
            },
            {
                explanation: "Jab, Cross, Left Hook, Roll, Left Hook",
                duration: 90,
                instructions: "After throwing the hook, smoothly transition into the roll. Engage your core and maintain breathing control."
            }
        ]
    },
    {
        title: "Round 4: Complex Combinations",
        drills: [
            {
                explanation: "1-2-3-4 combo (Jab, Cross, Left Hook, Right Uppercut).",
                duration: 60,
                instructions: "Emphasize smooth transitions between punches. Keep your form tight, and focus on footwork and breathing."
            },
            {
                explanation: "1-2 followed by a slip and a 2 to the body.",
                duration: 60,
                instructions: "Vary your targets. Keep your chin down, use angles, and stay agile."
            }
        ]
    },
    {
        title: "Round 5: Defensive Techniques",
        drills: [
            {
                explanation: "Slip left, counter with a left hook; slip right, counter with a right uppercut.",
                duration: 90,
                instructions: "Aim for quick, powerful counters. Use your body weight effectively."
            },
            {
                explanation: "Defensive drills: Parry and counter with a jab.",
                duration: 60,
                instructions: "Visualize an opponent’s punches and practice your defensive maneuvers with focus on timing."
            }
        ]
    },
    {
        title: "Round 6: Advanced Head Movement and Body Shots",
        drills: [
            {
                explanation: "Slips and weaves with light punches.",
                duration: 60,
                instructions: "Incorporate light jabs and hooks while slipping and weaving. Keep movements fluid."
            },
            {
                explanation: "Throw 1-2 to the head, then body shots (hooks and uppercuts).",
                duration: 120,
                instructions: "Focus on fluid transitions between head and body shots. Maintain a strong stance."
            }
        ]
    },
    {
        title: "Round 7: Freestyle Combos with Defense",
        drills: [
            {
                explanation: "Combine slips, weaves, and various combinations.",
                duration: 180,
                instructions: "Be creative with your combinations. Visualize an opponent and respond accordingly, staying dynamic."
            }
        ]
    },
    {
        title: "Round 8: Speed and Agility",
        drills: [
            {
                explanation: "Fast 1-2 combo, focusing on speed.",
                duration: 60,
                instructions: "Aim for quick, sharp punches while staying balanced. Last 15 seconds at maximum speed."
            },
            {
                explanation: "Quick alternating hooks and slips.",
                duration: 60,
                instructions: "Practice rapid movement while maintaining control over your punches. Finish with a burst of speed."
            },
            {
                explanation: "Fast alternating uppercuts and defensive slips.",
                duration: 60,
                instructions: "Integrate head movement while throwing uppercuts for added defense. End with 10 seconds of fast punches."
            }
        ]
    },
    {
        title: "Round 9: Power Focus with Defense",
        drills: [
            {
                explanation: "Throw 1-2 with power. Focus on strong punches.",
                duration: 60,
                instructions: "Concentrate on form and full extension for power. Shadowbox with light weights for added resistance."
            },
            {
                explanation: "Left and right hooks with full hip rotation.",
                duration: 60,
                instructions: "Use your entire body to generate power in your hooks."
            },
            {
                explanation: "Power uppercuts with full extension.",
                duration: 60,
                instructions: "Emphasize technique and power while keeping your guard up."
            }
        ]
    },
    {
        title: "Round 10: Freestyle Shadowboxing with Advanced Techniques",
        drills: [
            {
                explanation: "Combine all techniques – punches, defense, head movement.",
                duration: 180,
                instructions: "Be creative and focus on maintaining fluidity between movements. Visualize a dynamic opponent."
            }
        ]
    }
];
