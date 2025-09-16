const universities = [
    {
        name: "Cairo University",
        website: "https://cu.edu.eg",
        location: "Giza, Egypt",
        lat: 30.0276,
        lng: 31.2101,
        info: "Cairo University is one of Egypt's oldest and most prestigious universities, known for its diverse academic programs and research excellence.",
        applicationDeadline: "July 31, 2025",
        acceptedCertificates: [
            "American High School Diploma",
            "British Certificate",
        ],
        courses: [
            {
                name: "Computer Science",
                requirement: {
                    "Thanawiya Amma (Egypt)": {
                        score: 95,
                    },
                    "British Certificate": {
                        score: 3,
                        details: "A-levels including Math and Science",
                    },
                    "American High School Diploma": {
                        score: 3.5,
                        details: "Including Math and Science",
                    },
                    "International Baccalaureate": {
                        score: 36,
                        details: "With HL Math and Science",
                    }
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Introduction to Programming", "Discrete Mathematics", "Computer Organization"],
                        optional: ["Introduction to Web Development"]
                    },
                    {
                        year: 2,
                        mandatory: ["Data Structures", "Algorithms", "Database Systems"],
                        optional: ["Mobile Application Development"]
                    },
                    {
                        year: 3,
                        mandatory: ["Operating Systems", "Software Engineering"],
                        optional: ["Artificial Intelligence", "Computer Graphics"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Computer Networks"],
                        optional: ["Cyber Security", "Cloud Computing"]
                    }
                ]
            },
            {
                name: "Medicine",
                requirement: {
                    score: 98,
                    alternative: "British High School: 3 A-levels including Biology and Chemistry"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Anatomy", "Physiology", "Biochemistry"],
                        optional: ["Medical Ethics"]
                    },
                    {
                        year: 2,
                        mandatory: ["Pathology", "Microbiology", "Pharmacology"],
                        optional: ["Genetics"]
                    },
                    {
                        year: 3,
                        mandatory: ["Internal Medicine", "Surgery", "Pediatrics"],
                        optional: ["Radiology"]
                    },
                    {
                        year: 4,
                        mandatory: ["Obstetrics & Gynecology", "Psychiatry", "Community Medicine"],
                        optional: ["Dermatology"]
                    }
                ]
            },
            {
                name: "Engineering",
                requirement: {
                    score: 96,
                    alternative: "British High School: 3 A-levels including Math and Physics"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Engineering Mathematics", "Physics", "Introduction to Engineering"],
                        optional: ["Technical Drawing"]
                    },
                    {
                        year: 2,
                        mandatory: ["Mechanics", "Thermodynamics", "Materials Science"],
                        optional: ["Environmental Engineering"]
                    },
                    {
                        year: 3,
                        mandatory: ["Fluid Mechanics", "Control Systems"],
                        optional: ["Renewable Energy"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Engineering Management"],
                        optional: ["Robotics"]
                    }
                ]
            },
            {
                name: "Business Administration",
                requirement: {
                    score: 85,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Principles of Management", "Microeconomics", "Accounting"],
                        optional: ["Business Communication"]
                    },
                    {
                        year: 2,
                        mandatory: ["Marketing", "Finance", "Organizational Behavior"],
                        optional: ["Business Law"]
                    },
                    {
                        year: 3,
                        mandatory: ["Operations Management", "Strategic Management"],
                        optional: ["Entrepreneurship"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "International Business"],
                        optional: ["E-Commerce"]
                    }
                ]
            },
            {
                name: "Law",
                requirement: {
                    "Thanawiya Amma (Egypt)": {
                        score: 70,
                    },
                    "British Certificate": {
                        score: 2,
                        details: "A-levels including Math and Science",
                    },
                    "American High School Diploma": {
                        score: 3.5,
                        details: "Including Math and Science",
                    },
                    "International Baccalaureate": {
                        score: 36,
                        details: "With HL Math and Science",
                    }
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Introduction to Law", "Constitutional Law", "Civil Law"],
                        optional: ["Legal Writing"]
                    },
                    {
                        year: 2,
                        mandatory: ["Criminal Law", "Administrative Law"],
                        optional: ["International Law"]
                    },
                    {
                        year: 3,
                        mandatory: ["Commercial Law", "Labor Law"],
                        optional: ["Environmental Law"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Procedural Law"],
                        optional: ["Human Rights Law"]
                    }
                ]
            }
        ]
    },
    {
        name: "Ain Shams University",
        website: "https://www.asu.edu.eg",
        location: "Cairo, Egypt",
        lat: 30.1243,
        lng: 31.2866,
        info: "Ain Shams University is a leading public university in Egypt, recognized for its strong engineering, medical, and humanities faculties.",
        applicationDeadline: "August 5, 2025",
        courses: [
            {
                name: "Computer Engineering",
                requirement: {
                    score: 95,
                    alternative: "British High School: 3 A-levels including Math and Physics"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Programming Fundamentals", "Digital Logic", "Mathematics"],
                        optional: ["Introduction to Robotics"]
                    },
                    {
                        year: 2,
                        mandatory: ["Computer Architecture", "Signals and Systems"],
                        optional: ["Embedded Systems"]
                    },
                    {
                        year: 3,
                        mandatory: ["Operating Systems", "Microprocessors"],
                        optional: ["Computer Vision"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Network Engineering"],
                        optional: ["Internet of Things"]
                    }
                ]
            },
            {
                name: "Pharmacy",
                requirement: {
                    score: 97,
                    alternative: "British High School: 3 A-levels including Biology and Chemistry"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["General Chemistry", "Human Biology", "Pharmaceutical Calculations"],
                        optional: ["Medical Terminology"]
                    },
                    {
                        year: 2,
                        mandatory: ["Pharmacology", "Pharmaceutics"],
                        optional: ["Nutrition"]
                    },
                    {
                        year: 3,
                        mandatory: ["Clinical Pharmacy", "Pharmaceutical Analysis"],
                        optional: ["Cosmetic Science"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Pharmacy Practice"],
                        optional: ["Pharmaceutical Marketing"]
                    }
                ]
            },
            {
                name: "Dentistry",
                requirement: {
                    score: 97,
                    alternative: "British High School: 3 A-levels including Biology"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Oral Biology", "Dental Anatomy", "Biochemistry"],
                        optional: ["Dental Materials"]
                    },
                    {
                        year: 2,
                        mandatory: ["Pathology", "Microbiology", "Pharmacology"],
                        optional: ["Oral Radiology"]
                    },
                    {
                        year: 3,
                        mandatory: ["Restorative Dentistry", "Periodontology"],
                        optional: ["Orthodontics"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Oral Surgery"],
                        optional: ["Pediatric Dentistry"]
                    }
                ]
            },
            {
                name: "Economics",
                requirement: {
                    score: 85,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Microeconomics", "Macroeconomics", "Mathematics for Economics"],
                        optional: ["Economic History"]
                    },
                    {
                        year: 2,
                        mandatory: ["Statistics", "International Economics"],
                        optional: ["Development Economics"]
                    },
                    {
                        year: 3,
                        mandatory: ["Public Finance", "Econometrics"],
                        optional: ["Labor Economics"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Economic Policy"],
                        optional: ["Environmental Economics"]
                    }
                ]
            },
            {
                name: "Arts",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Introduction to Literature", "History of Art", "Critical Thinking"],
                        optional: ["Creative Writing"]
                    },
                    {
                        year: 2,
                        mandatory: ["World Literature", "Philosophy"],
                        optional: ["Drama"]
                    },
                    {
                        year: 3,
                        mandatory: ["Modern Art", "Cultural Studies"],
                        optional: ["Film Studies"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Contemporary Literature"],
                        optional: ["Translation"]
                    }
                ]
            }
        ]
    },
    {
        name: "Alexandria University",
        website: "https://www.alexu.edu.eg",
        location: "Alexandria, Egypt",
        lat: 31.2105,
        lng: 29.91049,
        info: "Alexandria University is a major public university in Egypt, offering a wide range of programs and contributing significantly to scientific research.",
        applicationDeadline: "July 25, 2025",
        courses: [
            {
                name: "Mechanical Engineering",
                requirement: {
                    score: 95,
                    alternative: "British High School: 3 A-levels including Math and Physics"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Engineering Drawing", "Mathematics", "Physics"],
                        optional: ["Introduction to CAD"]
                    },
                    {
                        year: 2,
                        mandatory: ["Mechanics of Materials", "Thermodynamics"],
                        optional: ["Manufacturing Processes"]
                    },
                    {
                        year: 3,
                        mandatory: ["Fluid Mechanics", "Machine Design"],
                        optional: ["Automotive Engineering"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Industrial Engineering"],
                        optional: ["Mechatronics"]
                    }
                ]
            },
            {
                name: "Veterinary Medicine",
                requirement: {
                    score: 94,
                    alternative: "British High School: 3 A-levels including Biology"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Animal Anatomy", "Physiology", "Biochemistry"],
                        optional: ["Animal Nutrition"]
                    },
                    {
                        year: 2,
                        mandatory: ["Pathology", "Microbiology"],
                        optional: ["Genetics"]
                    },
                    {
                        year: 3,
                        mandatory: ["Pharmacology", "Parasitology"],
                        optional: ["Wildlife Medicine"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Clinical Practice"],
                        optional: ["Veterinary Surgery"]
                    }
                ]
            },
            {
                name: "Agriculture",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Plant Biology", "Soil Science", "Agricultural Chemistry"],
                        optional: ["Introduction to Agribusiness"]
                    },
                    {
                        year: 2,
                        mandatory: ["Crop Production", "Animal Science"],
                        optional: ["Organic Farming"]
                    },
                    {
                        year: 3,
                        mandatory: ["Agricultural Economics", "Irrigation"],
                        optional: ["Food Technology"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Farm Management"],
                        optional: ["Sustainable Agriculture"]
                    }
                ]
            },
            {
                name: "Commerce",
                requirement: {
                    score: 85,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Principles of Accounting", "Microeconomics", "Business Mathematics"],
                        optional: ["Business English"]
                    },
                    {
                        year: 2,
                        mandatory: ["Marketing", "Finance"],
                        optional: ["Business Law"]
                    },
                    {
                        year: 3,
                        mandatory: ["Management", "Auditing"],
                        optional: ["E-Commerce"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "International Business"],
                        optional: ["Entrepreneurship"]
                    }
                ]
            },
            {
                name: "Education",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Foundations of Education", "Psychology", "Teaching Methods"],
                        optional: ["Educational Technology"]
                    },
                    {
                        year: 2,
                        mandatory: ["Curriculum Development", "Assessment"],
                        optional: ["Special Education"]
                    },
                    {
                        year: 3,
                        mandatory: ["Classroom Management", "Educational Research"],
                        optional: ["Inclusive Education"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "School Administration"],
                        optional: ["Educational Leadership"]
                    }
                ]
            }
        ]
    },
    {
        name: "Mansoura University",
        website: "https://www.mans.edu.eg",
        location: "Mansoura, Egypt",
        info: "Mansoura University is renowned for its medical and scientific faculties, serving as a center for education and research in the Nile Delta region.",
        applicationDeadline: "August 1, 2025",
        courses: [
            {
                name: "Information Technology",
                requirement: {
                    score: 92,
                    alternative: "British High School: 3 A-levels including Math"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Introduction to IT", "Programming", "Mathematics"],
                        optional: ["Web Technologies"]
                    },
                    {
                        year: 2,
                        mandatory: ["Database Systems", "Networks"],
                        optional: ["Mobile Computing"]
                    },
                    {
                        year: 3,
                        mandatory: ["Software Engineering", "Cyber Security"],
                        optional: ["Cloud Computing"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "IT Management"],
                        optional: ["Big Data"]
                    }
                ]
            },
            {
                name: "Medicine",
                requirement: {
                    score: 98,
                    alternative: "British High School: 3 A-levels including Biology and Chemistry"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Anatomy", "Physiology", "Biochemistry"],
                        optional: ["Medical Ethics"]
                    },
                    {
                        year: 2,
                        mandatory: ["Pathology", "Microbiology", "Pharmacology"],
                        optional: ["Genetics"]
                    },
                    {
                        year: 3,
                        mandatory: ["Internal Medicine", "Surgery", "Pediatrics"],
                        optional: ["Radiology"]
                    },
                    {
                        year: 4,
                        mandatory: ["Obstetrics & Gynecology", "Psychiatry", "Community Medicine"],
                        optional: ["Dermatology"]
                    }
                ]
            },
            {
                name: "Science",
                requirement: {
                    score: 90,
                    alternative: "British High School: 3 A-levels including Science subjects"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["General Chemistry", "Physics", "Biology"],
                        optional: ["Earth Science"]
                    },
                    {
                        year: 2,
                        mandatory: ["Organic Chemistry", "Genetics"],
                        optional: ["Environmental Science"]
                    },
                    {
                        year: 3,
                        mandatory: ["Analytical Chemistry", "Microbiology"],
                        optional: ["Biotechnology"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Research Methods"],
                        optional: ["Advanced Genetics"]
                    }
                ]
            },
            {
                name: "Nursing",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Fundamentals of Nursing", "Anatomy", "Physiology"],
                        optional: ["Nutrition"]
                    },
                    {
                        year: 2,
                        mandatory: ["Medical-Surgical Nursing", "Pharmacology"],
                        optional: ["Mental Health Nursing"]
                    },
                    {
                        year: 3,
                        mandatory: ["Pediatric Nursing", "Community Health Nursing"],
                        optional: ["Critical Care Nursing"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Leadership in Nursing"],
                        optional: ["Geriatric Nursing"]
                    }
                ]
            },
            {
                name: "Law",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Introduction to Law", "Constitutional Law", "Civil Law"],
                        optional: ["Legal Writing"]
                    },
                    {
                        year: 2,
                        mandatory: ["Criminal Law", "Administrative Law"],
                        optional: ["International Law"]
                    },
                    {
                        year: 3,
                        mandatory: ["Commercial Law", "Labor Law"],
                        optional: ["Environmental Law"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Procedural Law"],
                        optional: ["Human Rights Law"]
                    }
                ]
            }
        ]
    },
    {
        name: "Assiut University",
        website: "https://www.aun.edu.eg",
        location: "Assiut, Egypt",
        info: "Assiut University is a prominent university in Upper Egypt, known for its engineering, medical, and agricultural programs.",
        applicationDeadline: "July 28, 2025",
        courses: [
            {
                name: "Civil Engineering",
                requirement: {
                    score: 95,
                    alternative: "British High School: 3 A-levels including Math and Physics"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Engineering Mathematics", "Physics", "Introduction to Civil Engineering"],
                        optional: ["Technical Drawing"]
                    },
                    {
                        year: 2,
                        mandatory: ["Structural Analysis", "Fluid Mechanics"],
                        optional: ["Environmental Engineering"]
                    },
                    {
                        year: 3,
                        mandatory: ["Geotechnical Engineering", "Transportation Engineering"],
                        optional: ["Construction Management"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Hydraulics"],
                        optional: ["Urban Planning"]
                    }
                ]
            },
            {
                name: "Pharmacy",
                requirement: {
                    score: 97,
                    alternative: "British High School: 3 A-levels including Biology and Chemistry"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["General Chemistry", "Human Biology", "Pharmaceutical Calculations"],
                        optional: ["Medical Terminology"]
                    },
                    {
                        year: 2,
                        mandatory: ["Pharmacology", "Pharmaceutics"],
                        optional: ["Nutrition"]
                    },
                    {
                        year: 3,
                        mandatory: ["Clinical Pharmacy", "Pharmaceutical Analysis"],
                        optional: ["Cosmetic Science"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Pharmacy Practice"],
                        optional: ["Pharmaceutical Marketing"]
                    }
                ]
            },
            {
                name: "Education",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Foundations of Education", "Psychology", "Teaching Methods"],
                        optional: ["Educational Technology"]
                    },
                    {
                        year: 2,
                        mandatory: ["Curriculum Development", "Assessment"],
                        optional: ["Special Education"]
                    },
                    {
                        year: 3,
                        mandatory: ["Classroom Management", "Educational Research"],
                        optional: ["Inclusive Education"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "School Administration"],
                        optional: ["Educational Leadership"]
                    }
                ]
            },
            {
                name: "Agriculture",
                requirement: {
                    score: 80,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Plant Biology", "Soil Science", "Agricultural Chemistry"],
                        optional: ["Introduction to Agribusiness"]
                    },
                    {
                        year: 2,
                        mandatory: ["Crop Production", "Animal Science"],
                        optional: ["Organic Farming"]
                    },
                    {
                        year: 3,
                        mandatory: ["Agricultural Economics", "Irrigation"],
                        optional: ["Food Technology"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "Farm Management"],
                        optional: ["Sustainable Agriculture"]
                    }
                ]
            },
            {
                name: "Commerce",
                requirement: {
                    score: 85,
                    alternative: "British High School: 3 A-levels"
                },
                modules: [
                    {
                        year: 1,
                        mandatory: ["Principles of Accounting", "Microeconomics", "Business Mathematics"],
                        optional: ["Business English"]
                    },
                    {
                        year: 2,
                        mandatory: ["Marketing", "Finance"],
                        optional: ["Business Law"]
                    },
                    {
                        year: 3,
                        mandatory: ["Management", "Auditing"],
                        optional: ["E-Commerce"]
                    },
                    {
                        year: 4,
                        mandatory: ["Graduation Project", "International Business"],
                        optional: ["Entrepreneurship"]
                    }
                ]
            }
        ]
    }
];

export default universities;