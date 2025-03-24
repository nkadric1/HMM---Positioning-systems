# Positioning Systems – Hidden Markov Model (HMM)

This repository contains the implementation of a **Hidden Markov Model (HMM)** used for mobility prediction in web-based navigation systems. The work is a part of the *Positioning Systems* course practical assignment and focuses on modeling and analyzing user transitions between web pages using statistical methods.

## Authors
- Amina Hromić  
- Nerma Kadrić  
- Nadina Miralem  
- Azra Žunić  

## Project Context

This work was carried out as part of a practical lab directed by Dr. Philippe Canalda, focusing on the following major topics:

- **N-Lateration** for positioning using distances from fixed emitters
- **Fingerprinting** techniques for identifying position based on signal characteristics
- **Mobility Prediction using Hidden Markov Models (HMM)**



## How It Works

- A **transition matrix** is initialized, where each cell represents the transition count between two web pages.
- Every time a user navigates from one page to another, the matrix is updated.
- The model tracks:
  - The number of transitions between pages
  - Probabilities of moving *from* and *to* a specific page
- These statistics are used to simulate and predict user movement patterns.

## Features

- Singleton pattern ensures only one HMM instance
- Each transition updates row and column sums
- Probabilities are calculated dynamically:
  - **Row-based probability** = likelihood of going to a page from a specific origin
  - **Column-based probability** = likelihood of arriving at a page from any other page
- Supports future extensions for prediction tasks

## Requirements

- JavaScript (ES6+)
- Node.js (for testing outside a browser)
- Modern browser (for frontend integration)

## Getting Started

To run this project:

1. Clone the repository:
   git clone [https://github.com/nkadric1/HMM---Positioning-systems](https://github.com/nkadric1/HMM---Positioning-systems)
2. Open server, install npm and start

   cd server
   
   npm install
   
   npm run dev
   
4. Open client, install npm and start
   
   cd client
   
   npm install
   
   npm run dev

