// ============================================
// moduleData.js - COMPLETE VERSION
// All 8 modules with ALL sessions and links
// ============================================

export const introVideo = "https://www.youtube.com/watch?v=JrLLP2U2D3s";

export const modules = [
  {
    id: 0,
    title: "Basics",
    badge: "MODULE 0",
    description:
      "Start your DSA journey here. This module covers the core language fundamentals you need before touching any data structure — separate video paths for Java, Python, and JavaScript students, so you can follow along in the language you are most comfortable with.",
    isActive: true,
    note:
      "Note for Java students: the language used in the video is JavaScript, but operators remain the same — just ignore **, !==, and !=.",
    sessions: [
      {
        id: "Java",
        content: "Java Students — Part 1 & Part 2",
        resources: [
          { label: "Part 1", type: "video", url: "https://www.youtube.com/watch?v=eUAqbFn64a0" },
          { label: "Part 2", type: "video", url: "https://www.youtube.com/watch?v=A2SV_bf0yl0" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "Python",
        content: "Python Students — Basics",
        resources: [
          { label: "Click Here", type: "video", url: "https://www.youtube.com/watch?v=mdlbz025jkA" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "JavaScript",
        content: "JavaScript Students — Part 1 & Part 2",
        resources: [
          { label: "Part 1", type: "video", url: "https://www.youtube.com/watch?v=eUAqbFn64a0" },
          { label: "Part 2", type: "video", url: "https://www.youtube.com/watch?v=A2SV_bf0yl0" },
        ],
        practice: [],
        importance: "core",
      },
    ],
  },

  {
    id: 1,
    title: "Pattern Programming",
    badge: "MODULE 1",
    description:
      "The classic DSA warm-up every beginner must practice. You will build squares, triangles, stars, number pyramids, diamonds, and hourglass shapes using nested loops — this builds the loop-control thinking you will reuse in every future module.",
    isActive: true,
    sessions: [
      {
        id: "Pattern-1",
        content: "Basic patterns — squares, triangles, stars",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=f1IVU3mKvv8" },
          { label: "Notes", type: "notes", url: "#" },
        ],
        practice: [],
        importance: "extreme",
      },
      {
        id: "Pattern-2",
        content: "Number patterns + pyramid variations",
        resources: [
          {
            label: "Class Recording / Notes",
            type: "notes",
            url: "https://docs.google.com/document/d/13NmAr3DIKfAhFTJgY-dC3QShygVsCS4ESBTx840mwZs/edit?tab=t.0",
          },
        ],
        practice: [],
        importance: "extreme",
      },
      {
        id: "Pattern-3",
        content: "Diamond, hourglass & complex patterns",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=ppmBHL1a7YM" },
          { label: "Notes", type: "notes", url: "#" },
        ],
        practice: [
          { label: "Question 1", type: "hack", url: "https://www.hackerrank.com/challenges/printing-pattern-2/problem" },
          { label: "Question 2", type: "geek", url: "https://www.geeksforgeeks.org/problems/pattern/1" },
        ],
        importance: "extreme",
        importanceNote: "Solve the below questions",
      },
      {
        id: "Pattern-4",
        content: "All pattern types — full revision + notes",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=c-effdypJhI" },
          { label: "Notes", type: "notes", url: "#" },
        ],
        practice: [],
        importance: "extreme",
      },
    ],
  },

  {
    id: 2,
    title: "ArrayList / List",
    badge: "MODULE 2",
    description:
      "Go deep into arrays — the most-used data structure in coding interviews. You will learn prefix sums, brute-force subarray techniques, in-place operations, and 2D arrays, then apply them to real interview questions like Product of Array Except Self.",
    isActive: true,
    sessions: [
      {
        id: "AL-01",
        content: "Intro Part 1 — Array basics & methods",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=KaDtZsyDsXc" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "AL-02",
        content: "Intro Part 2 — Iteration & in-place ops",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=Hgr_Py6nXnA&feature=youtu.be" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "AL-03",
        content: "Prefix Sum Array",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=PnIOEPDATjw" },
          { label: "Notes", type: "notes", url: "#" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/running-sum-of-1d-array/description/" },
          { label: "HackerRank Q", type: "hack", url: "https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true" },
        ],
        importance: "extreme",
      },
      {
        id: "AL-04",
        content: "Nested List + HackerRank challenges",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=Wg834zAVliw" },
          { label: "Notes", type: "notes", url: "#" },
        ],
        practice: [
          { label: "HackerRank Q", type: "hack", url: "http://www.hackerrank.com/challenges/diagonal-difference/problem" },
          { label: "HackerRank Q", type: "hack", url: "https://www.hackerrank.com/challenges/mini-max-sum/problem" },
        ],
        importance: "medium",
      },
      {
        id: "AL-05",
        content: "Brute Force & Subarrays",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=-WK9WPhuKB4&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1rm2SbVoUAVapYgnWmDw6myH7cnSBirBCtIZ_HXpE4_E/edit?tab=t.0" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/two-sum/" },
        ],
        importance: "critical",
      },
      {
        id: "AL-06",
        content: "Merge Strings Alternately",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=mI6v-1LUL9s&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/merge-strings-alternately/description/" },
        ],
        importance: "critical",
      },
      {
        id: "AL-07",
        content: "Product of Array Except Self",
        resources: [
          { label: "Class Recording", type: "video", url: "#" },
        ],
        practice: [],
        importance: "critical",
      },
      {
        id: "AL-08",
        content: "Increasing Triplet Subsequence",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=KhvpFHlzc1c&t=520s" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/increasing-triplet-subsequence/submissions/1948171683/" },
        ],
        importance: "medium",
      },
      {
        id: "AL-09",
        content: "Can Place Flowers",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=XO2hTYkghVk&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/can-place-flowers" },
        ],
        importance: "medium",
      },
      {
        id: "AL-10",
        content: "Core Concept - Nested List 2D array",
        resources: [
          { label: "Class Recording", type: "video", url: "https://youtu.be/R9MSSjx0m4Y" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1LMubSkXVmuwfTE5WLqHRgCbG0p75O1Hih07iTSFXcuw/edit?usp=sharing" },
        ],
        practice: [],
        importance: "extreme",
        importanceNote: "Extremely Important 2D array",
      },
    ],
  },

  {
    id: 3,
    title: "HashMap / Dictionary",
    badge: "MODULE 3",
    description:
      "The biggest module in this sheet, and one of the most important. You will master frequency counting, duplicate detection, Kadane's algorithm, XOR tricks, and dynamic programming basics — all built on top of the HashMap data structure.",
    isActive: true,
    sessions: [
      {
        id: "HM-01",
        content: "Intro + Methods",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=7_x9WjVZVNA" },
        ],
        practice: [],
        importance: "extreme",
        importanceNote: "Core Concept",
      },
      {
        id: "HM-02",
        content: "Frequency HashMap — Java & Python",
        resources: [
          { label: "Class Recording 1", type: "video", url: "https://www.youtube.com/watch?v=t2wxEHMbs_A&t=306s" },
          { label: "Class Recording 2", type: "video", url: "https://www.youtube.com/watch?v=bdJI_l7yF8E" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/valid-anagram/" },
        ],
        importance: "critical",
      },
      {
        id: "HM-03",
        content: "Identify Duplicates",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=zHdxch6g0cc&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1kDBgMlPgJ1I-RLgi-TPwjdLeMboYAvLTeuTJadnEkfE/edit?tab=t.0" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/contains-duplicate/" },
        ],
        importance: "high",
      },
      {
        id: "HM-04",
        content: "HashMap + Prefix Sum (SubArray Sum = k)",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=dtCHBS5wZZg&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1_5w3ZumaLnDJEAdu4lnPoIz1ZA25_4I8QTpaH0W_3ZY/edit?tab=t.0" },
        ],
        practice: [],
        importance: "critical",
      },
      {
        id: "HM-05",
        content: "Remove Duplicates",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=c4dXRQ7UYKs&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/18jYKkavSQcEdKyVMy9u0AfsdyQOPat-d7MzOoMLfMa0/edit?tab=t.0" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
        ],
        importance: "medium",
      },
      {
        id: "HM-06",
        content: "Strings Frequency HashMap",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=MA0u-7THJng&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
        ],
        importance: "medium",
      },
      {
        id: "HM-07",
        content: "Kadane's Algorithm",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=1RYQw8kEx_U&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1oNzgELbh-Ayw8jqbho4hTomLUbpVkcse2kbQR3LmLWI/edit?tab=t.0" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/maximum-subarray/" },
        ],
        importance: "important",
        importanceNote: "Core Algorithm + Extremely Important",
      },
      {
        id: "HM-08",
        content: "Longest SubArray (same as Kadane)",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=cYQkFfHVOtc&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1qhw3nUm4obgM2rL14nilEPTXsBbsJ25NVh-KrXc26kQ/edit?tab=t.0" },
        ],
        practice: [
          { label: "GeeksforGeeks Q", type: "geek", url: "https://www.geeksforgeeks.org/problems/subarray-sum--111254/1" },
        ],
        importance: "critical",
      },
      {
        id: "HM-09",
        content: "Time Complexity begin/end",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=uNmm0cXZ5ok&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/13zPxfAbsm5SwAtQ37C-SldrkuQrZ4yrjq2h_MwWx3hI/edit?usp=sharing" },
        ],
        practice: [],
        importance: "critical",
      },
      {
        id: "HM-10",
        content: "Two Sum O(n) Optimisation",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=V4PSb5zUPYI&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "#" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/two-sum/" },
        ],
        importance: "core",
      },
      {
        id: "HM-11",
        content: "SubArray xor==0",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=rvtyKzlsK8g" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1IBL6n34K5DTwMtiU6EKFG5LJyIQPGujoQKGLVVqYvjs/edit?tab=t.0" },
        ],
        practice: [],
        importance: "core",
        importanceNote: "Bitwise XOR Concept",
      },
      {
        id: "HM-12",
        content: "Isomorphic Strings",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=T3B0oI0K8IE&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/isomorphic-strings/" },
        ],
        importance: "low",
      },
      {
        id: "HM-13",
        content: "Dynamic Programming - Best Time to Buy and Sell Stocks",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=lma6H8YdVAY&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        ],
        importance: "medium",
      },
      {
        id: "HM-14",
        content: "Contains Duplicate + Group Anagrams",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=AbTdBb_iwAk" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/contains-duplicate/description/" },
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/group-anagrams/description/" },
        ],
        importance: "core",
        importanceNote: "Core Concept",
      },
      {
        id: "HM-15",
        content: "Happy Number [HashSet/HashMap]",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=Gjc-40Ilhh0" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/happy-number/description/" },
        ],
        importance: "medium",
      },
      {
        id: "HM-16",
        content: "SubArrays K unique Distinct values",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=l-5Tejq6rVg" },
        ],
        practice: [],
        importance: "high",
        importanceNote: "Core + High Priority",
      },
    ],
  },

  {
    id: 4,
    title: "Two Pointers",
    badge: "MODULE 4",
    description:
      "Learn the two-pointer technique that turns many O(n squared) brute-force solutions into clean O(n) ones. Covers 3Sum, 4Sum, array intersections, and classic string problems like reversing vowels and checking subsequences.",
    isActive: true,
    sessions: [
      {
        id: "TP-01",
        content: "Intro + Two Pointers Template",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=ASU4tsD80IA&feature=youtu.be" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "TP-02",
        content: "3Sum + Intersection of 2 Arrays",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=_9TNPk_mEOU&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/3sum/" },
        ],
        importance: "important",
      },
      {
        id: "TP-03",
        content: "4Sum",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=Ji4NRa9ctcE&t=299s" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/4sum/" },
        ],
        importance: "medium",
      },
      {
        id: "TP-04",
        content: "Reverse Vowels of a String",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=W_CFCfh2tWs&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/reverse-vowels-of-a-string/" },
        ],
        importance: "high",
      },
      {
        id: "TP-05",
        content: "Is Subsequence",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=eKYMYeB5OuA&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/is-subsequence/" },
        ],
        importance: "high",
      },
    ],
  },

  {
    id: 5,
    title: "Stack",
    badge: "MODULE 5",
    description:
      "A short but essential module. You will understand how a stack works internally and solve the famous Valid Parentheses problem, which forms the foundation for parsing and expression-evaluation problems later on.",
    isActive: true,
    sessions: [
      {
        id: "ST-01",
        content: "Introduction to Stack",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=Fg5LwtS4cSM&feature=youtu.be" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "ST-02",
        content: "Valid Parentheses [LeetCode]",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=NWm2mkkFDQU&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/valid-parentheses/description/" },
        ],
        importance: "high",
      },
    ],
  },

  {
    id: 6,
    title: "Maths",
    badge: "MODULE 6",
    description:
      "Mathematical programming for coding interviews. You will work with factors, divisibility, and successive calculation problems — the kind of number-theory questions that show up early in most interview rounds.",
    isActive: true,
    sessions: [
      {
        id: "MC-01",
        content: "Factors",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=HKWRIECjHvw&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1I6nGsDCFdL9Std5R48X5YNZ88id2qUmtEQJVfNt9J9w/edit?tab=t.0" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "MC-02",
        content: "Successive Calculations",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=gk75AMssF24&feature=youtu.be" },
          { label: "Notes", type: "notes", url: "https://docs.google.com/document/d/1iT9b2CXHDcwLdKr4HOEsc_4vBC_TOaCemtRtm9rZsqY/edit?tab=t.0" },
        ],
        practice: [
          { label: "GeeksforGeeks Q", type: "geek", url: "https://www.geeksforgeeks.org/problems/sum-of-series2811/1" },
        ],
        importance: "high",
      },
    ],
  },

  {
    id: 7,
    title: "LinkedList",
    badge: "MODULE 7",
    description:
      "Move beyond arrays into linked structures. This module covers cycle detection, sorting a linked list, finding the middle node, separating odd and even nodes, and safely removing nodes — all common interview favorites.",
    isActive: true,
    sessions: [
      {
        id: "LL-01",
        content: "Intro to LinkedList",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=gazPXgakwrw&feature=youtu.be" },
        ],
        practice: [],
        importance: "core",
      },
      {
        id: "LL-02",
        content: "Linked List Cycle",
        resources: [
          { label: "Class Recording", type: "video", url: "#" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/linked-list-cycle/description/" },
        ],
        importance: "extreme",
      },
      {
        id: "LL-03",
        content: "Sort List",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=krjmsU-MDb4&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/sort-list/submissions/1951300970/" },
        ],
        importance: "medium",
      },
      {
        id: "LL-04",
        content: "Middle of the Linked List",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=A5EQyA_AIUQ&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/middle-of-the-linked-list/submissions/1951325083/" },
        ],
        importance: "medium",
      },
      {
        id: "LL-05",
        content: "Odd Even LinkedList",
        resources: [
          { label: "Class Recording", type: "video", url: "https://www.youtube.com/watch?v=BSpmdh5QE68&feature=youtu.be" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/odd-even-linked-list/description/" },
        ],
        importance: "medium",
      },
      {
        id: "LL-06",
        content: "Remove LinkedList Elements",
        resources: [
          { label: "Class Recording", type: "video", url: "https://drive.google.com/file/d/1RokGB9x1YXMSCRmAviKiPchH9DvH0Jwx/view" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/remove-linked-list-elements/description/" },
        ],
        importance: "medium",
      },
      {
        id: "LL-07",
        content: "Delete the Middle Node of a Linked List",
        resources: [
          { label: "Class Recording", type: "video", url: "https://drive.google.com/file/d/1j2BkXd4QnUX8gSTUK7UjYEHl9T_CluEJ/view" },
        ],
        practice: [
          { label: "LeetCode Q", type: "leet", url: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/" },
        ],
        importance: "medium",
      },
    ],
  },
];
