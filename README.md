# 🎮 NeuroTap

A fun and interactive color memory game built using HTML, CSS, JavaScript, and jQuery.

The game challenges players to remember and repeat an increasingly long sequence of colors. Each level adds a new color to the sequence. Make a mistake, and the game ends!
 
---
## 🚀 Demo

Press any key to start the game and test your memory skills!


## 🛠️ Technologies Used

- HTML5

- CSS3

- JavaScript (ES6)

- jQuery

---

## 📂 Project Structure

```
NeuroTap/
│
├── index.html
├── styles.css
├── game.js
├── README.md
└── sounds/
    ├── red.mp3
    ├── blue.mp3
    ├── green.mp3
    ├── yellow.mp3
    └── wrong.mp3
 ```

## 🎯 How to Play

1. Press any key to start the game.

2. The game will flash a color tile.

3. Click the tile that matches the flashed color.

4. Each new level adds one more color to the sequence.

5. You must repeat the entire sequence correctly in order.

6. If you click the wrong color, the game ends.

7. Press any key again to restart.

## 📌 Example Gameplay

Level 1

Game shows: Yellow

User clicks: [Yellow]

Level 2

Game shows: Yellow → Green

User clicks: [Yellow, Green]

Level 3

Game shows: Yellow → Green → Green

User clicks: [Yellow, Green, Green]

The sequence keeps growing with each level.

❌ Any mistake will immediately end the game.

## ⚙️ How It Works (Game Logic Overview)

- The game stores the correct pattern in an array:
   ```javascript
   var gamePattern = [];
  ```
- User clicks are stored in:
   ```javascript
   var userClickedPattern = [];
   ``` 
- Each level:

   - A random color is selected.

   - The color flashes.

   - Sound plays.

    - Level increases.

- The checkAnswer() function verifies:

   - If the user clicked the correct color.

    - If the full sequence is completed.

    - If wrong → Game Over.

## ▶️ How to Run the Project

1. Download or clone the repository:
   ```javascript
    git clone https://github.com/Dharmndr/NeuroTap.git
   ```
2. Open the project folder.

3. Open index.html in your browser.

No installation required.

## 🎵 Sound Effects

The game uses sound files stored in the sounds/ folder:

- red.mp3

- blue.mp3

- green.mp3

- yellow.mp3

- wrong.mp3

## 📸 Features

- Interactive animations

- Sound feedback

- Level progression

- Game over effect

- Restart functionality

- Clean UI design

## 🔥 Future Improvements (Optional)

- Add high score tracking

- Add mobile touch support

- Add difficulty levels

- Convert to Vanilla JavaScript

- Convert into React version

## 👨‍💻 Author

Developed as a frontend JavaScript project to practice:

- DOM manipulation

- Event handling

- Game logic

- jQuery usage

## 📜 License

This project is open-source and free to use for learning purposes.
