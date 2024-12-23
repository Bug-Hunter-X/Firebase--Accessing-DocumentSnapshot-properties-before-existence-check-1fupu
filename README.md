# Firebase DocumentSnapshot Property Access Before Existence Check

This repository demonstrates a common error when working with Firebase's DocumentSnapshot: attempting to access properties before verifying the document's existence.  The provided code samples illustrate the problem and a robust solution.

## Problem

Asynchronous operations can lead to accessing properties of a DocumentSnapshot before the document has fully loaded. This results in an error because the `data()` method might return undefined.

## Solution

Always check the `snapshot.exists` property before accessing any properties of the `snapshot.data()` object. This ensures you're working with a valid document.

## How to reproduce the bug
1. Clone this repository
2. Install Firebase: `npm install firebase`
3. Configure your Firebase project
4. Run the `bug.js` file. Note the error.
5. Run the `bugSolution.js` file. Note that this executes successfully. 